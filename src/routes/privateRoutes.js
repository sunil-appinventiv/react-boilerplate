import React from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children, isLogin }) {
  return isLogin ? children : <Navigate to={"/"} />;
}

export function PublicRoute({ children }) {
   return children;
}
