import Wrapper from "@/app/components/Wrapper";
import { Metadata } from "next";
import ProductWishLists from "./ProductWishlist";
import WishList from "./Wishlist";

export const metadata: Metadata = {
  title: "wishlist",
};
const page = () => {
  return (
    <main className="my-12">
      <Wrapper>
        <WishList />
        <ProductWishLists />
      </Wrapper>
    </main>
  );
};

export default page;
