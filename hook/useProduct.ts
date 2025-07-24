import { wishlistCountAtom } from "@/app/lib/jotai";
import { Product } from "@/types";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";

export const useProduct = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const setWishlistCounter = useSetAtom(wishlistCountAtom);
  const addProduct = (newProd: Product) => {
    const allProducts = product.concat(newProd);
    setProduct(allProducts);
    localStorage.setItem("products", JSON.stringify(allProducts));
  };
  const removeProduct = (prodToRemove: Product) => {
    const filteredProducts = product.filter((p) => p.id != prodToRemove.id);
    setProduct(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
  };

  useEffect(() => {
    const items = localStorage.getItem("products");
    if (items) {
      const rawProduct = JSON.parse(items);
      setProduct(rawProduct);
    }
  }, []);

  useEffect(() => {
    if (product) {
      setWishlistCounter(product.length);
    }
  }, [product.length]);

  return {
    product,
    addProduct,
    removeProduct,
  };
};
