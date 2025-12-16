import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";

const DashboardLayout = lazy(() =>
  import("../../components/Layouts/dashboard")
);
const Dashboard = lazy(() => import("../../pages/app/dashboard"));
const Posts = lazy(() => import("../../pages/app/post"));
const Settings = lazy(() => import("../../pages/app/settings"));
const NotFound = lazy(() => import("../../pages/app/notfound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="posts" element={<Posts />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
