import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
const DefaultLayout = () => {
  return (
    <div>
      <div className="topbar">
        <Topbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">content</div>
    </div>
  );
};

export default DefaultLayout;
