import { useEffect, useReducer } from 'react';

const actionTypes = {
  fetchDatasetStart: 'FETCH_DATASET_START',
  fetchDatasetSuccess: 'FETCH_DATASET_SUCCESS',
  fetchDatasetError: 'FETCH_DATASET_ERROR',
}

const initialState = {
  loading: true,
  error: "",
  data: [{ timestamp: new Date().toISOString(), amount: 0 }]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.fetchDatasetStart:
      return { ...state, loading: true };
    case actionTypes.fetDatasetError:
      return { ...state, error: action.payload, loading: false };
    case actionTypes.fetchDatasetSuccess:
      const data = Array.isArray(action.payload) ? action.payload : state.data;

      return {
        ...state,
        loading: false,
        error: "",
        data
      };
    default:
      return state;
  }
}

function fetchDatasetStart() {
  return { type: actionTypes.fetchDatasetStart };
}

function fetchDatasetFailure(payload) {
  return { type: actionTypes.fetchDatasetError, payload };
}

function fetchDatasetSuccess(payload) {
  return { type: actionTypes.fetchDatasetSuccess, payload };
}

export const useFetch = (endpoint) => {
  const [{loading, error, data}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchDatasetStart());
        const res = await fetch(endpoint);
        const json = await res.json();
        dispatch(fetchDatasetSuccess(json));
      } catch (error) {
        dispatch(fetchDatasetFailure(error))
      }
    };
    fetchData();
  }, [endpoint]);
  return { data, error, loading};
}