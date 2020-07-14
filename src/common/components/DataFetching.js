import React from 'react';
import { useFetch } from './UseFetch';
import Loading from './Loading';
import PropTypes from 'prop-types';

const DataFetching = ({ endpoint }) => {
  const {error, loading, data } = useFetch(endpoint);

  if (error) {
    return <div>{error}</div>
  }

  return (
    (loading || !data) ? <Loading /> :
    <ul>
      {data.map(element => (
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