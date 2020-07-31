import React from 'react';
import DashboardShell from './features/Dashboard/DashboardShell';
import { Provider } from './Provider';

const App = () => {
  return (
    <Provider>
      <DashboardShell />
    </Provider>
  );
};

export default App;
