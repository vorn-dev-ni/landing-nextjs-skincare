"use client";
import { Variants, motion } from "motion/react";

import Image from "next/image";
const imageVariants: Variants = {
  init: {
    scale: 1,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  hovering: {
    scale: 1.15,
    transition: {
      duration: 0.9,
      ease: "easeInOut",
    },
  },
};

export default function AnimatedNextImage() {
  return (
    <motion.div
      initial={{
        scale: 1,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        delay: 1,
      }}
      className="w-64 h-64 overflow-hidden rounded-xl my-8 relative"
    >
      <motion.div
        className="w-full h-full"
        variants={imageVariants}
        initial={"init"}
        animate={"visible"}
        whileHover={"hovering"}
      >
        <Image
          src="https://api.amore-beauty.com/uploads/product/amore-beauty-3035fb7d-3602-4d74-9eea-86dae6e3124e.jpg"
          alt="Animated Image"
          fill
          className="object-cover"
          sizes="256px"
        />
      </motion.div>
    </motion.div>
  );
}
