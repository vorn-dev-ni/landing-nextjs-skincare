"use client";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAtomValue } from "jotai";
import { wishlistCountAtom } from "../lib/jotai";

const WishlistButton = () => {
  const router = useRouter();
  const wishlistCounter = useAtomValue(wishlistCountAtom);

  return (
    <div className="hidden sm:flex items-center">
      <Button
        variant="ghost"
        size="default"
        className="relative gap-1"
        onClick={() => router.push("/wishlist")}
      >
        {/* Icon with badge */}
        <div className="relative ">
          <Heart className="w-5 h-5" />
          {wishlistCounter > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
              {wishlistCounter}
            </span>
          )}
        </div>

        <span className="hidden md:inline">WishList</span>
      </Button>
    </div>
  );
};

export default WishlistButton;
