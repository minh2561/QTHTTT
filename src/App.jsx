import React, { Suspense, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { routes } from "./configs/routes";
import ScrollToTop from "./components/ScrollToTop/Index";

const LoginPage = React.lazy(() => import("./pages/LoginPage/Index"));
const HomePage = React.lazy(() => import("./pages/HomePage/Index"));
const RegisterPage = React.lazy(() =>
  import("./pages/RegisterPage/RegisterPage")
);

export default function App() {
  const token = Cookies.get("token");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      if (pathname === routes.login || pathname === routes.register) {
        navigate("/");
      }
    }
  }, [pathname]);

  return (
    <React.Fragment>
      <ScrollToTop />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path={routes.home} element={<HomePage />}></Route>
          <Route path={routes.login} element={<LoginPage />}></Route>
          <Route path={routes.register} element={<RegisterPage />}></Route>
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}
