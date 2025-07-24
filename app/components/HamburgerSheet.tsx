import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CollapseMenu from "./CollapseMenu";
import { FB_LINK } from "@/utils/constant";

export function HamBurgerSheetIcon() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="default">
          <AlignJustify width={25} height={25} />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[350px] overflow-y-hidden z-[3000]"
      >
        <SheetHeader className="flex justify-center items-center">
          <SheetTitle className="flex justify-center items-center absolute  top-[-22px] left-3 z-0 ">
            <Image
              alt="logo-app-sheet"
              width={100}
              height={100}
              src={"/logo.png"}
              className="object-cover w-24 scale-100 "
            />
          </SheetTitle>
        </SheetHeader>
        <div className="border-t border-gray-200 my-2 mx-2" />
        <nav className="flex flex-col gap-4 pl-4 pr-2 text-sm">
          <Link href="/" className="hover:bg-gray-50 py-2">
            Home
          </Link>
          <Link
            href={FB_LINK}
            target="_blank"
            className="hover:bg-gray-50 py-2"
          >
            Shop Now
          </Link>
          <Link href="/wishlist" className="hover:bg-gray-50 py-2">
            Wish List
          </Link>
          <CollapseMenu>
            <Link
              href={"#"}
              className="hover:cursor-pointer  pointer-events-none "
            >
              Explore
            </Link>
          </CollapseMenu>
        </nav>

        <SheetFooter className="mt-auto pt-6 bg-gray-50">
          <SheetClose asChild>
            <p className="text-xs text-gray-500 text-center">
              &copy; 2025. Exclusiva. All rights reserved.
            </p>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
