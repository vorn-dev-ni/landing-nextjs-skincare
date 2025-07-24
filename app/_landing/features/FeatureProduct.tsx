"use client";
import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";
import FeatureProductListing from "./FeatureProductListing";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const HottestProduction = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={containerRef}
      className="mb-12 flex justify-center w-full py-12"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <div className="w-full max-w-7xl">
        <motion.header
          className="flex text-center items-center flex-col justify-center place-content-center gap-4 space-y-3"
          variants={containerVariants}
        >
          <motion.h6 className="subtitle2" variants={itemVariants}>
            SHOP CHOICE
          </motion.h6>

          <motion.div
            className="bg-gray-300 w-10 h-1"
            variants={itemVariants}
          ></motion.div>

          <motion.h2
            className="h4 text-primary font-normal"
            variants={itemVariants}
          >
            Our Selling Products
          </motion.h2>

          <motion.p variants={itemVariants}>
            Discover & Shop on sale skincare, Start your new routine with a
            latest product
          </motion.p>
        </motion.header>

        {/* Product Grid */}
        <FeatureProductListing />
      </div>
    </motion.div>
  );
};

export default HottestProduction;
