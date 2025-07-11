import { useQueries, useQuery } from "@tanstack/react-query";
import { getAllProducts, getProductById } from "../api/products";
import type { ProductResponse } from "./type";
import { product } from "./keys";

export const useGetAllProducts = () => {
  return useQuery<ProductResponse>({
    queryKey: [product.getAllProductsKey],
    queryFn: getAllProducts,
  });
};

export const useGetProductsByIds = (ids: number[]) => {
  return useQueries({
    queries: ids.map((id) => ({
      queryKey: ['product', id],
      queryFn: () => getProductById(id),
    })),
  });
};