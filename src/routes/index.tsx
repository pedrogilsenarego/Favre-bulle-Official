import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import useScrollTop from "../hooks/useScrollTop";

const AppRoutes = () => {
  useScrollTop();
  const redirectRoute = () => {
    return "/";
  };

  return (
    <Routes>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path}>
          <Route path={path} element={component} />
        </Route>
      ))}
      <Route path="/" element={<Navigate to={redirectRoute()} />} />

      <Route
        path="*"
        element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
