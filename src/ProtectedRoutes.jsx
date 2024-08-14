import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let rol = "user";
  return rol === "admin" ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
