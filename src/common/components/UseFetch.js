import {useState, useEffect } from 'react';

export const useFetch = (endpoint) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(endpoint);
        const json = await res.json();
        setResponse(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);
  return { response, error, loading};
}