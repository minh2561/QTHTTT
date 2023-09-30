import React from "react";
import { Routes, Route } from "react-router-dom";

import { routes } from "./configs/routes";
import ProtectedRoute from "./routes/ProtectedRoute";

const LoginPage = React.lazy(() => import("./pages/LoginPage/Index"));
const HomePage = React.lazy(() => import("./pages/HomePage/Index"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage/RegisterPage"))

export default function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />}></Route>
      <Route path={routes.login} element={<LoginPage />}></Route>
      <Route path={routes.register} element={<RegisterPage />}></Route>
    </Routes>
  );
}
