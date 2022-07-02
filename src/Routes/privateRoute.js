import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest}) => {
  const { user } = useSelector((state) => state.auth);
  return user !== null ? <Outlet /> : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
