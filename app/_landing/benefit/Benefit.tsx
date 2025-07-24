"use client";
import { Variants, motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import Header from "../../components/Header";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Benefit = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={containerRef}
      className="block sm:grid md:grid-cols-2 lg:grid-cols-3 gap-12 h-full mb-3 sm:mb-24"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {/* Header without wrapper, just motion.div */}
      <motion.div variants={itemVariants} className="col-span-full">
        <Header
          title="Why Choose our Exilir Wax Products?"
          desc="Experience the natural and gentle hair removal benefits of our sugar wax, specially formulated to exfoliate, soothe, and protect your skin while providing long-lasting smoothness."
        />
      </motion.div>

      {/* Left section */}
      <motion.section
        className="w-full h-60 space-y-12"
        variants={itemVariants}
      >
        <div>
          <h3 className="title1">100% Natural Ingredients</h3>
          <p className="subtitle2 font-light">
            Our sugar wax is made from pure sugar, lemon, and water — free from
            harsh chemicals and additives, making it safe for all skin types.
          </p>
        </div>
        <div>
          <h3 className="title1">Gentle & Soothing</h3>
          <p className="subtitle2 font-light">
            Designed to minimize redness and irritation, it’s perfect for
            sensitive skin and provides a comfortable waxing experience.
          </p>
        </div>
      </motion.section>

      {/* Image section */}
      <motion.div
        className="w-full h-full relative flex justify-center items-center"
        variants={itemVariants}
      >
        <Image
          src="/box/sugar_transparent.png"
          alt="Exilir Sugar Wax"
          width={1000}
          height={1000}
          className="object-cover z-0 animated-scale"
          priority
        />
        <div className="absolute bg-red-50 rounded-t-full w-full h-[50%] top-[35%] z-[-1]" />
      </motion.div>

      {/* Right section */}
      <motion.section
        className="w-full h-60 space-y-12"
        variants={itemVariants}
      >
        <div>
          <h3 className="title1">Smooth & Long-lasting</h3>
          <p className="subtitle2 font-light">
            Removes hair from the root to leave skin silky smooth for weeks and
            gently exfoliates dead skin cells.
          </p>
        </div>
        <div>
          <h3 className="title1">Eco-Friendly & Cruelty-Free</h3>
          <p className="subtitle2 font-light">
            Our products are responsibly made with sustainable ingredients and
            never tested on animals.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Benefit;
