import React, { useState, Suspense, lazy } from "react";
import { useSelector } from "react-redux";

const AuthRoutes = lazy(() => import("./auth/index.jsx"));
const AppRoutes = lazy(() => import("./app/index.jsx"));

const Routers = () => {
  const [isAuthorised, setIsAuthorised] = useState(true); // replace with actual auth logic

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isAuthorised ? <AppRoutes /> : <AuthRoutes />}
    </Suspense>
  );
};

export default Routers;
