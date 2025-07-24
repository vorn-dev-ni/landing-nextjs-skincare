import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { Heart, Loader2 } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const ProductItem = ({
  product,
  isLoading,
  isFavorite,
  handleAddFavorite,
}: {
  product: Product;
  handleAddFavorite: () => void;
  isLoading: boolean;
  isFavorite?: boolean;
}) => {
  return (
    <div className=" rounded-xl  bg-transparent w-full group overflow-hidden">
      <div className="relative w-full flex justify-center overflow-hidden h-[400px] sm:min-h-[400px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-md mb-2 grow duration-500 group-hover:scale-125 transition-all h-full"
        />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              disabled={isLoading}
              onClick={(e: React.MouseEvent) => {
                if (!isLoading) {
                  handleAddFavorite();
                  e.stopPropagation();
                }
              }}
              className={`group/heart absolute bottom-12 bg-white rounded-none opacity-0  translate-y-4  group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 `}
            >
              {isLoading ? (
                <Loader2 className="animate-spin h-5 w-5 text-gray-500" />
              ) : (
                <Heart
                  className={`h-5 w-5 text-black  duration-0 group-hover/heart:text-white group-hover/heart:duration-75 ${
                    isFavorite && "text-red-500"
                  }`}
                />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p> {isFavorite ? "Remove from wishlist" : "Add to wishlist"}</p>
          </TooltipContent>
        </Tooltip>

        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-black bg-opacity-50
    opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-50
    transition-all duration-500 ease-in-out rounded-b-md"
        />
      </div>

      <main className="flex  flex-col  items-center gap-2 my-4">
        <h3 className="text-lg font-medium ">{product.name}</h3>
        <p className="font-normal text-gray-500 text-sm">${product.price}</p>
      </main>
    </div>
  );
};

export default ProductItem;
