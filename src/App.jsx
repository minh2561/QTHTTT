import React from "react";
import { Routes, Route } from "react-router-dom";

import { routes } from "./configs/routes";

const LoginPage = React.lazy(() => import("./pages/LoginPage/Index"));
const HomePage = React.lazy(() => import("./pages/HomePage/Index"));

export default function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />}></Route>
      <Route path={routes.login} element={<LoginPage />}></Route>
    </Routes>
  );
}
