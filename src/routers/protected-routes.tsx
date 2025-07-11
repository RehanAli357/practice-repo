import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "./route";
const ProtectedRoutes = () => {
  const { loggedIn } = useSelector((state: RootState) => state.auth);

  return loggedIn ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to={ROUTES.Login} replace />
  );
};

export default ProtectedRoutes;
