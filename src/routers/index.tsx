import RootLayout from "@/layout/root-layout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "./route";
import ProtectedRoutes from "./protected-routes";
import ProtectedRouteLayout from "@/layout/protected-route-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.Home} replace />,
      },
      {
        path: ROUTES.Login,
        lazy: async () => {
          const Login = (await import("@/features/Login")).default;
          return { Component: Login };
        },
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            element: <ProtectedRouteLayout />,
            children: [
              {
                path: ROUTES.Home,
                lazy: async () => {
                  const Products = (await import("@/features/products"))
                    .default;
                  return { Component: Products };
                },
              },
              {
                path: ROUTES.Cart,
                lazy: async () => {
                  const Cart = (await import("@/features/cart")).default;
                  return { Component: Cart };
                },
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
