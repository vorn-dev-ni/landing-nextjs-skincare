"use client";
import ProductDetailLayout from "@/app/components/PopupDetail";
import ProductItem from "@/app/components/ProductItem";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useProduct } from "@/hook/useProduct";
import { Product } from "@/types";
import { X } from "lucide-react";
import { motion, Variants } from "motion/react";
import { useState } from "react";
import { toast } from "react-toastify";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProductWishList = () => {
  const { addProduct, removeProduct, product: favoriteProducts } = useProduct();
  const [loadingProductId, setLoadingProductId] = useState<number | null>(null);
  const handleAddFavorite = async (product: Product, isFav: boolean) => {
    setLoadingProductId(product.id); // Start loading

    // Simulate delay (e.g., 300ms to prevent spam)
    await new Promise((resolve) => setTimeout(resolve, 300));

    isFav ? removeProduct(product) : addProduct(product);
    toast.success(
      !isFav ? "Product has been added" : "Product has been removed",
      {
        pauseOnHover: false,
        position: "top-center",
        autoClose: 1000,
        closeButton: false,
        type: isFav ? "error" : "success",
      }
    );

    setLoadingProductId(null);
  };
  if (favoriteProducts) {
    return (
      <div className="container mx-auto px-4 mt-12">
        {/* motion.div container with variants */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {!favoriteProducts.length && (
            <p className="text-center w-full col-span-full text-primary-400">
              Wishlist products will show here
            </p>
          )}
          {/* {favoriteProducts.length} */}

          {favoriteProducts?.map((product, index) => {
            const found = favoriteProducts.find((p) => p.id === product.id);

            return (
              <motion.div key={index} variants={itemVariants}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div>
                      <ProductItem
                        handleAddFavorite={() =>
                          handleAddFavorite(
                            product,
                            product.id == favoriteProducts[index]?.id
                          )
                        }
                        isLoading={loadingProductId === product.id}
                        isFavorite={found ? true : false}
                        product={product}
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="[&>button]:hidden">
                    <DialogTitle>
                      <DialogClose className="absolute top-10 sm:top-2 right-4 p-2 rounded-full hover:bg-gray-200">
                        <X className="w-5 h-5" />
                      </DialogClose>
                    </DialogTitle>
                    <DialogDescription asChild>
                      <ProductDetailLayout
                        key={product.id}
                        isFavorite={found ? true : false}
                        title={product.name}
                        description={product.description}
                        price={`$${product.price}`}
                        image={product.image}
                        isLoading={loadingProductId === product.id}
                        onAddFavorites={() =>
                          handleAddFavorite(product, found ? true : false)
                        }
                      />
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  }
};

export default ProductWishList;
