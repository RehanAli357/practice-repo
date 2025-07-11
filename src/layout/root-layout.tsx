import { Outlet } from "react-router-dom";
import AppLayout from "./app-layout";

const RootLayout = () => {
  return (
    <>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </>
  );
};

export default RootLayout;
