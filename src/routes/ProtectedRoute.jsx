import React from "react";
import { redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const { ...rest } = props;
  const token = Cookies.get("token");

  if (token) {
    return <Route {...rest} />;
  }

  return redirect("/login");
};

export default ProtectedRoute;
