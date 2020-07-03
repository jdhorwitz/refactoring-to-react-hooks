import React from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import {loadMirageInDev} from "./mirage";

const App = () => {
  loadMirageInDev()
  return <DashboardShell />;
};

export default App;
