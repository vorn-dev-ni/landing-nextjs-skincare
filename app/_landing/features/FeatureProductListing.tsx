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

const skincareProducts = [
  {
    id: 51,
    name: "Velvet Sugar Wax",
    description: "Smooth exfoliating sugar wax for radiant skin.",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1585652757141-8837d676fac8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 222,
    name: "Pure Aloe Vera Soothing Gel",
    description: "Hydrating aloe vera gel that calms irritated skin.",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 53,
    name: "Glow Sugar Scrub",
    description: "Natural oil-infused sugar scrub to brighten your skin.",
    price: 22.5,
    image:
      "https://images.unsplash.com/photo-1552046122-03184de85e08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

const containerVariants: Variants = {
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

const FeatureProductListing = () => {
  const [loadingProductId, setLoadingProductId] = useState<number | null>(null);

  const { addProduct, removeProduct, product: favoriteProducts } = useProduct();
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
  return (
    <div className="container mx-auto px-4 mt-12">
      {/* motion.div container with variants */}
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {skincareProducts.map((product, index) => {
          const found = favoriteProducts.find((p) => p.id === product.id);

          return (
            <motion.div key={product.id} variants={itemVariants}>
              <Dialog>
                <DialogTrigger asChild>
                  <div>
                    <ProductItem
                      handleAddFavorite={() =>
                        handleAddFavorite(product, found ? true : false)
                      }
                      isLoading={loadingProductId == product.id}
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
                      title={product.name}
                      description={product.description}
                      price={`$${product.price}`}
                      image={product.image}
                      isLoading={loadingProductId === product.id}
                      isFavorite={product.id == favoriteProducts[index]?.id}
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
};

export default FeatureProductListing;
