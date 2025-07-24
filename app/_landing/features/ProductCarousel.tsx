"use client";
import ProductDetailLayout from "@/app/components/PopupDetail";
import ProductItem from "@/app/components/ProductItem";
import { Button } from "@/components/ui/button";
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
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { motion, useInView, Variants } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "../../globals.css";
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};
const skincareProducts = [
  {
    id: 10,
    name: "Sugar Wax Mask",
    description: "Gentle exfoliating sugar wax mask for smooth skin.",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1670615119585-3585bc6a0fc6?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Aloe Vera Gel",
    description: "Soothing aloe vera gel for hydration and calming skin.",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "Sugar Glow Scrub",
    description: "Brightening sugar scrub infused with natural oils.",
    price: 22.5,
    image:
      "https://images.unsplash.com/photo-1615540732559-882b276c6786?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Aloe Vera Moisturizer",
    description: "Lightweight aloe-based moisturizer for daily use.",
    price: 24.99,
    image:
      "https://plus.unsplash.com/premium_photo-1681364365252-387c05c06c40?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    name: "Sugar Wax Lip Mask",
    description: "Nourishing lip mask with sugar wax and vitamin E.",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1657023828553-18c23601c4d7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    name: "Checking Wax Lip Mask",
    description: "Nourishing lip mask with sugar wax and vitamin E.",
    price: 2.99,
    image:
      "https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ProductCarousel = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const swiperRef = useRef<SwiperClass | null>(null);
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
  const goNext = () => {
    swiperRef.current?.slideNext();
  };

  const goPrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #000;
          top: 45%;
        }
      `}</style>

      <div className="relative mt-12 w-full">
        <div className="flex justify-between mb-4">
          <Button
            onClick={goPrev}
            variant="outline"
            size="lg"
            className="rounded-full w-14 h-14 flex items-center justify-center"
          >
            <ArrowLeft className="w-6 h-6" size={32} />
          </Button>
          <Button
            onClick={goNext}
            variant="outline"
            size="lg"
            className="rounded-full w-14 h-14 flex items-center justify-center"
          >
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="w-full"
        >
          <Swiper
            modules={[Navigation]}
            navigation
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {skincareProducts.map((product, index) => {
              const found = favoriteProducts.find((p) => p.id === product.id);

              return (
                <SwiperSlide
                  key={product.id}
                  className="flex justify-center w-full"
                >
                  <motion.div variants={itemVariants} className="w-full">
                    <Dialog>
                      <DialogTrigger
                        asChild
                        className="flex justify-center w-full"
                      >
                        <div>
                          <ProductItem
                            product={product}
                            handleAddFavorite={() =>
                              handleAddFavorite(product, found ? true : false)
                            }
                            isLoading={loadingProductId === product.id}
                            isFavorite={found ? true : false}
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
                            isFavorite={
                              product.id == favoriteProducts[index]?.id
                            }
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
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </>
  );
};

export default ProductCarousel;
