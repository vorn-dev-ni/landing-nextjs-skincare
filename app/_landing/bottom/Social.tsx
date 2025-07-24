"use client";
import Header from "@/app/components/Header";
import { motion, Variants } from "motion/react";
import "../../globals.css";
import SocialCarousel from "./SocialCarousel";

const fadeUp: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Social = () => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="w-full mb-12"
    >
      <motion.div className="col-span-full" variants={fadeUp}>
        <Header
          title="Who's love the product"
          desc="OUR COMMUNITY SIMPLIFYING SUGAR WAXING"
        />
      </motion.div>

      <SocialCarousel />
    </motion.div>
  );
};

export default Social;
