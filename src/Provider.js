import React, { createContext, useState } from 'react';
import { useFetch } from './common/components/UseFetch';

export const Context = createContext(undefined);

export function Provider({ children }) {
  const [endpoint, setEndpoint] = useState('');
  const value = useFetch(endpoint);

  return (
    <Context.Provider value={{ value, setEndpoint }}>
      {children}
    </Context.Provider>
  );
}
