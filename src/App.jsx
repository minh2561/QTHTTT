import React from "react";
import { Routes, Route } from "react-router-dom";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}
