import { Button } from "@/components/ui/button";
import { FB_LINK } from "@/utils/constant";
import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProductDetailLayoutProps {
  title: string;
  description: string;
  price: string;
  isFavorite: boolean;
  image: string;
  onAddFavorites: () => void;
  isLoading: boolean;
}

const ProductDetailLayout: React.FC<ProductDetailLayoutProps> = ({
  title,
  description,
  price,
  image,
  onAddFavorites,
  isLoading,
  isFavorite,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Product Image */}
      <div className="w-full relative overflow-hidden rounded-xl">
        <Image
          src={image}
          width={400}
          height={300}
          alt={title}
          className="rounded-xl w-full h-full object-cover animated-scale "
        />
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold line-clamp-2">{title}</h1>
        <p className="text-gray-700 line-clamp-">{description}</p>
        <div className="text-2xl font-semibold text-primary-400">{price}</div>

        {/* Action Button */}
        <div className="space-y-2">
          <Button
            size="lg"
            disabled={isLoading}
            className={`w-full rounded-xl bg-primary-400 hover:bg-primary-300 ${
              isFavorite ? "bg-red-400 hover:bg-red-300" : "bg-primary-400"
            }`}
            color="#5EABD6"
            onClick={onAddFavorites}
          >
            <Heart className={"text-white"} />

            {isLoading
              ? "Loading..."
              : isFavorite
              ? "Remove from wishlist"
              : "Add to wishlist"}
          </Button>

          <Button
            size="lg"
            className="w-full rounded-xl"
            onClick={() => window.open(FB_LINK, "_blank")}
          >
            <ShoppingBag />
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailLayout;
