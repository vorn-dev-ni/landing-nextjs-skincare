"use client";
import { motion } from "motion/react";

const Text = ({ children }: { children: string }) => {
  return (
    <motion.p
      className=""
      initial={{
        scale: 1,
        color: "orange",
      }}
      animate={{
        scale: 1.5,
        color: "red",
      }}
      transition={{
        type: "spring",
        duration: 1,
      }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.p>
  );
};

export default Text;
