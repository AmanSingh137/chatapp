import React from "react";
import { Outlet } from "react-router-dom";
const DefaultLayout = () => {
  return (
    <div>
      <div className="topbar">topbar</div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">content</div>
    </div>
  );
};

export default DefaultLayout;
