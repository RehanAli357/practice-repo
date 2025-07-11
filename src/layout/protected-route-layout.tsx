import { ROUTES } from "@/routers/route";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRouteLayout = () => {
  const { cartId } = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          if (cartId.length > 0) {
            navigate(ROUTES.Cart);
          }
        }}
      >
        {cartId.length > 0
          ? `Total items in cart ${cartId.length}`
          : `Add Items in a cart`}
      </button>
      <Outlet />
    </>
  );
};

export default ProtectedRouteLayout;
