import React from "react";
import SideBar from "../../components/SideBar";
import Home_Dashboard from "./Components/Home_Dashboard";

const Dashboard = () => {
  return (
    <div className="flex w-full min-h-screen h-full">
      <SideBar />
      <Home_Dashboard />
    </div>
  );
};

export default Dashboard;
