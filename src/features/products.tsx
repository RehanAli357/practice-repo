import { useGetAllProducts } from "@/lib/hooks/use-products";
import { addToCart } from "@/store/slices/cart-slice";
import { useDispatch } from "react-redux";

const Products = () => {
  const { data, isLoading, isError } = useGetAllProducts();
  const dispatch = useDispatch();
  if (isLoading) return <p className="message">Loading...</p>;
  if (isError) return <p className="message error">Something went wrong</p>;

  const handleAddToCart = (id: number) => {
    dispatch(addToCart({ id }));
  };
  return (
    <div className="products-container">
      <h1 className="products-title">All Products</h1>
      <div className="products-grid">
        {data?.products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <button
              onClick={() => {
                handleAddToCart(product.id);
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
