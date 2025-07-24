"use client";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { Variants, motion } from "motion/react";
import { useRouter } from "next/navigation";

const MotionButton = motion(Button);

const parentVariants: Variants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,

    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.7,

      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
};
const itemVariants: Variants = {
  initial: { x: "-100vw" },
  enter: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const TabButton = () => {
  const router = useRouter();
  return (
    <motion.div
      variants={parentVariants}
      initial="initial"
      animate="enter"
      className="flex justify-center flex-col gap-2 my-12"
    >
      <MotionButton
        onClick={() => router.push("/create")}
        key="variant-one"
        variants={itemVariants}
        className="w-xs py-6 bg-transparent border-2 border-black text-black hover:bg-transparent hover:scale-105 transition-all ease-in-out"
      >
        Create Product
      </MotionButton>
      <Link href="/wishlist">
        <MotionButton
          key="variant-two"
          variants={itemVariants}
          className="w-xs py-6 bg-transparent border-2 border-black text-black hover:bg-transparent hover:scale-105 transition-all ease-in-out"
        >
          View Wishlist
        </MotionButton>
      </Link>

      <MotionButton
        onClick={() => router.push("/products")}
        key="variant-three"
        variants={itemVariants}
        className="w-xs py-6 bg-transparent border-2 border-black text-black hover:bg-transparent hover:scale-105 transition-all ease-in-out"
      >
        Inventory
      </MotionButton>
    </motion.div>
  );
};

export default TabButton;
