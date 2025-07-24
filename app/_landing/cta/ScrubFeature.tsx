"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ScrubFeatures = () => {
  return (
    <motion.section
      className="block sm:grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-24 pb-24 space-y-8 sm:space-y-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Column 1 */}
      <motion.div className="space-y-6 relative order-3" variants={fadeInUp}>
        {/* Positioned SVG */}
        <div className="transform rotate-y-180 absolute left-[-200] top-[-120] hidden md:block z-50 pointer-events-none">
          <svg
            width="268"
            height="176"
            viewBox="0 0 268 176"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-auto"
          >
            <path
              d="M0.0780465 8.82203C263.757 -43.3056 263.574 174.898 263.574 174.898M263.574 174.898L259.5 171.5M263.574 174.898L267 171"
              stroke="currentColor"
            />
          </svg>
        </div>

        <h6 className="text-2xl sm:text-5xl font-semibold leading-tight relative z-10">
          Our, Beyond Clean{" "}
          <span className="italic font-extralight">Scrub</span>
        </h6>

        <div className="relative w-full h-[340px] mt-12 mx-auto z-10 overflow-hidden">
          <Image
            src="/products/scrub_face.jpg"
            alt="feature-one"
            fill
            className="object-cover animated-scale duration-600"
            priority
          />
        </div>
      </motion.div>

      {/* Column 2 */}
      <motion.div className="flex items-start" variants={fadeInUp}>
        <p className="leading-relaxed my-2 sm:my-0 subtitle2 font-light text-sm">
          We love it for modern UI design because of its simple, clean, and
          distinctive geometric style and the designers actively work.
          FEATHERLIGHT FEEL Experience unparalleled comfort with our breathable
          hijabs, perfect for any season. We love it for modern UI design
          because of its simple, clean, and distinctive geometric style and the
          designers actively work. FEATHERLIGHT FEEL Experience unparalleled
          comfort with our breathable hijabs, perfect for any season.
        </p>
      </motion.div>

      {/* Column 3 */}
      <motion.div
        className="flex flex-col justify-between h-full space-y-4 gap-6"
        variants={fadeInUp}
      >
        <p className="leading-relaxed my-2 sm:my-0 subtitle2 font-light text-sm order-2">
          We love it for modern UI design because of its simple, clean, and
          distinctive geometric style
        </p>

        <div className="relative min-h-[250px] sm:flex-grow z-0 order-1 overflow-hidden">
          <Image
            src="/products/scrub_land.jpg"
            alt="feature-product-2"
            fill
            className="object-cover animated-scale duration-600"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ScrubFeatures;
