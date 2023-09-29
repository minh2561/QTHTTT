import React from "react";
import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { routes } from "../configs/routes";

const ProtectedRoute = (props) => {
  const { ...rest } = props;
  const token = Cookies.get("token");

  if (token) {
    return <Route {...rest} />;
  }

  return (
    <Redirect
      to={{
        pathname: routes.login,
      }}
    />
  );
};

export default ProtectedRoute;
