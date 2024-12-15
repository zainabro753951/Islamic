import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import AdminLogin from "./components/AdminLogin";
import { useAuth } from "../context/AuthProvider.jsx";
import Cookies from "js-cookie";

const App = () => {
  const { authUser, loading } = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Dashboard /> : <Navigate to={"/admin/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/admin/"} /> : <AdminLogin />}
        />
      </Routes>
    </>
  );
};

export default App;
