import React from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";

export const Context = React.createContext();

const App = () => {
  const state = {
    loading: true,
    error: "",
    salesTotal: 0,
    subscriptionsTotal: 0,
    data: [{ timestamp: new Date().toISOString(), amount: 0 }]
  };

  return (
    <Context.Provider value={state}>
      <DashboardShell />
    </Context.Provider>
  )
};

export default App;
