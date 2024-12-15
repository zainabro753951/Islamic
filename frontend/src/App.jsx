import React from "react";
import Dapp from "./admin_dashboard/App";
import { Route, Routes } from "react-router-dom";
import UserApp from "./users/UserApp";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/admin/*" element={<Dapp />} />
        <Route path="/*" element={<UserApp />} />
      </Routes>
    </>
  );
};

export default App;
