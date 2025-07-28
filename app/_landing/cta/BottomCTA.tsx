"use client";
import { Button } from "@/components/ui/button";
import { FB_LINK } from "@/utils/constant";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const BottomCTA = () => {
  return (
    <div className="bg-red-50 rounded-b-[100px] h-full sm:h-96 my-24">
      <main className="w-full block sm:grid grid-cols-2">
        {/* Image with animation */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="justify-center order-1 relative flex"
        >
          <Image
            src="/box/sugar_transparent.png"
            alt="feature-one"
            width={300}
            height={200}
            className="object-cover z-0 h-fit scale-100 hover:scale-125 duration-500 transition-all ease-in-out"
          />
        </motion.div>

        {/* Text section with animation */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="px-12 py-12 space-y-5"
        >
          <h6 className="h5 sm:h4">Ready for Glowing Skin</h6>
          <p className="text-sm subtitle2 font-light">
            Uncover your natural radiance with skincare that nourishes,
            hydrates, and empowers your glow—inside and out.
          </p>
          <Link href={FB_LINK} target="_blank">
            <Button className="rounded-xl px-12 py-7 text-md sm:text-xl bg-red-300 text-red-50 hover:bg-red-200 outline-0 ring-0 duration-500 transition-all">
              Shop Now
            </Button>
          </Link>
        </motion.div>

        {/* Fallback/Extra Image (hidden on small screens) */}
        <div className="justify-center hidden md:hidden relative overflow-hidden">
          <Image
            src="/box/sugar_transparent.png"
            alt="feature-one"
            width={400}
            height={300}
            className="object-cover z-0 h-full hover:scale-125 duration-500 transition-all ease-in-out"
            priority
          />
        </div>
      </main>
    </div>
  );
};

export default BottomCTA;
