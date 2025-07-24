"use client";
import { Button } from "@/components/ui/button";
import { FB_LINK } from "@/utils/constant";

const ShopNow = () => {
  return (
    <Button
      onClick={() => window.open(FB_LINK, "_blank")}
      className="hover:cursor-pointer px-12 py-2 w-full sm:w-fit"
    >
      Shop Now
    </Button>
  );
};

export default ShopNow;
