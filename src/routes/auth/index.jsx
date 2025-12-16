import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";

const AuthLayout = lazy(() => import("../../components/Layouts/auth"));
const Home = lazy(() => import("../../pages/auth/home"));
const About = lazy(() => import("../../pages/auth/about"));
const Login = lazy(() => import("../../pages/auth/login"));
const Register = lazy(() => import("../../pages/auth/resgister"));

const AuthRoutes = () => {
  return (
    <Suspense fallback={<div>Loading auth page...</div>}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<div>Auth Page Not Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default AuthRoutes;
