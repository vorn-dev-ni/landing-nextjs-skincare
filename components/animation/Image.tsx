"use client";
import { Variants, motion } from "motion/react";

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,

    originX: 0.5,
    originY: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function AnimatedImage() {
  return (
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: 200,
      }}
      transition={{
        duration: 0.7,
        type: "tween",
      }}
      className="w-64 h-64 overflow-x-hidden rounded-xl "
    >
      <motion.img
        src="https://api.amore-beauty.com/uploads/product/amore-beauty-3035fb7d-3602-4d74-9eea-86dae6e3124e.jpg"
        alt="Animated Image"
        className="w-full h-full object-cover"
        variants={imageVariants}
        whileHover={{
          scale: 1.25,
          originX: 0.5,
          originY: 0.5,

          transition: {
            duration: 3,
            // ease: "easeIn",
          },
        }}
        initial="hidden"
        animate="visible"
      />
    </motion.div>
  );
}
