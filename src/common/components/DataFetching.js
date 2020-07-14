import React from 'react';
import { useFetch } from './UseFetch';
import Loading from './Loading';
import PropTypes from 'prop-types';

const DataFetching = ({ endpoint }) => {
  const {error, loading, response } = useFetch(endpoint);

  if (error) {
    return <div>{error}</div>
  }

  return (
    (loading || !response) ? <Loading /> :
    <ul>
      {response.map(element => (
        <li key={element.timestamp}>
          {element.timestamp} - {element.amount}
        </li>
      ))}
    </ul>
  );
};

DataFetching.propTypes = {
  endpoint: PropTypes.string.isRequired
}

export default DataFetching