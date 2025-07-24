"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FB_LINK } from "@/utils/constant";
import Link from "next/link";
import AppLogo from "./AppLogo";
import { HamBurgerSheetIcon } from "./HamburgerSheet";
import WishListIcon from "./WishListIcon";

export default function MenuBar() {
  return (
    <div className="w-full sticky top-0 z-50 bg-white ">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 ">
        {/* Left: Logo */}
        <div className="shrink-0 sm:block">
          <Link href="/">
            <AppLogo />
          </Link>
        </div>

        {/* Center: Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                Explore
              </NavigationMenuTrigger>
              <NavigationMenuContent className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ul className="flex flex-col space-y-2 col-span-full">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/contact-us" className="hover:underline">
                        Contact Us
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/faq" className="hover:underline">
                        FAQs
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/about" className="hover:underline">
                        About Us
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={FB_LINK} target="_blank">
                  Find Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Icons or Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile menu icon */}
          <div className="sm:hidden">
            <HamBurgerSheetIcon />
          </div>

          {/* Wishlist for larger screens */}
          <WishListIcon />
        </div>
      </div>
    </div>
  );
}
