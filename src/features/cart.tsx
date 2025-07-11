import { useSelector } from "react-redux";
import { useGetProductsByIds } from "@/lib/hooks/use-products";
import type { RootState } from "@/store";

const Cart = () => {
  const { cartId } = useSelector((state: RootState) => state.cart);
  const productQueries = useGetProductsByIds(cartId);

  return (
    <div>
      <h2>Cart Items</h2>

      {productQueries.length === 0 && <p>No products in cart.</p>}

      {productQueries.map((query, i) => {
        if (query.isLoading) return <p key={i}>Loading product...</p>;
        if (query.isError) return <p key={i}>Error loading product</p>;

        const product = query.data;

        return (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h3>{product.title}</h3>
            <img src={product.thumbnail} alt={product.title} width={100} />
            <p>Price: ${product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
