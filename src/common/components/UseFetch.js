import { useEffect, useReducer } from 'react';

const initialState = {
  loading: false,
  error: '',
  data: [],
};

const actionTypes = {
  fetchDatasetStart: 'FETCH_DATASET_START',
  fetchDatasetSuccess: 'FETCH_DATASET_SUCCESS',
  fetchDatasetError: 'FETCH_DATASET_ERROR',
};

function apiReducer(state, action) {
  switch (action.type) {
    case actionTypes.fetchDatasetStart:
      return { ...state, loading: true };
    case actionTypes.fetchDatasetError:
      return { ...state, loading: false, error: action.payload };
    case actionTypes.fetchDatasetSuccess:
      return { ...state, loading: false, error: '', data: action.payload };
    case 'FETCH_DATASET_FINISH':
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const useFetch = (endpoint) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    if (!endpoint) return;

    dispatch({ type: actionTypes.fetchDatasetStart });
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((json) => {
        dispatch({ type: actionTypes.fetchDatasetSuccess, payload: json });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.fetchDatasetError,
          payload: error.message,
        });
      })
      .finally(() => {
        dispatch({ type: 'FETCH_DATASET_FINISH' });
      });
  }, [endpoint]);

  return state;
};
