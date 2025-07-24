"use client";
import { Variants, motion } from "motion/react";
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

const CTA = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="block sm:grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-24 pb-12 pt-24"
    >
      {/* Column 1: Heading + Image */}
      <motion.div variants={fadeInUp} className="space-y-6 relative z-[2000px]">
        <h6 className="text-2xl sm:text-5xl font-semibold leading-tight">
          Clean, Aloe Vera{" "}
          <span className="italic font-extralight">Packaging</span>
        </h6>
        <svg
          width="268"
          height="176"
          viewBox="0 0 268 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute start-60 top-2/12 left-11/12 md:left-8/12  md:top-2/12 hidden h-[150px] md:block 2xl:start-72 2xl:top-16 2xl:h-auto z-[2000px]"
        >
          <path
            d="M0.0780465 8.82203C263.757 -43.3056 263.574 174.898 263.574 174.898M263.574 174.898L259.5 171.5M263.574 174.898L267 171"
            stroke="currentColor"
          ></path>
        </svg>

        <div className="relative w-full  h-[340px] mt-12 mx-auto z-0 overflow-hidden">
          <Image
            src="/cta/aloe_vera.jpg"
            alt="feature-one"
            fill
            className="object-cover z-0 animated-scale duration-600"
            priority
          />
        </div>
      </motion.div>

      {/* Column 2: Description */}
      <motion.div variants={fadeInUp} className="flex items-end">
        <p className="leading-relaxed my-12 sm:my-0 subtitle2 font-light  text-sm">
          We love it for modern UI design because of its simple, clean, and
          distinctive geometric style and the designers actively work.
          FEATHERLIGHT FEEL Experience unparalleled comfort with our breathable
          hijabs, perfect for any season.
        </p>
      </motion.div>

      {/* Column 3: Full image */}
      <motion.div
        variants={fadeInUp}
        className="col-span-2 lg:col-span-1 w-full overflow-hidden"
      >
        <Image
          src="/cta/aloe_vera_left.jpg"
          alt="feature-product-2"
          width={500}
          height={170}
          className="object-cover w-full h-full animated-scale duration-600"
        />
      </motion.div>
    </motion.section>
  );
};

export default CTA;
