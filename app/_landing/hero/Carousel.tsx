"use client";
import Wrapper from "@/app/components/Wrapper";
import { Button } from "@/components/ui/button";
import { FB_LINK } from "@/utils/constant";
import { AnimatePresence, motion, Variants } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../globals.css";

const textVariant: Variants = {
  hidden: { y: -10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeIn", delay: 1 },
  },
  exit: { y: -5, opacity: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const MotionImage = motion(Image);
const slides = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "True to Oneself",
    title: "Explore Our Wax Sellers",
    subtitle:
      "Unreservedly honest products that truly work, and are kind to skin and the planet – no exceptions!",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "Get The Best Offer",
    title: "Discover Clean Beauty",
    subtitle:
      "Gentle formulas made with integrity. Shop now for sustainable skincare essentials.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522108098940-de49801b5b40?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "Natural Skincare",
    title: "Glow Naturally",
    subtitle:
      "Organic skincare that nourishes deeply. Experience radiant results.",
  },
];

export default function MySwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>

      <div className="max-w-full overflow-x-hidden py-0">
        <Swiper
          modules={[Pagination, EffectFade, Autoplay]}
          loop={true}
          speed={1000}
          fadeEffect={{ crossFade: true }}
          allowTouchMove={false}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-screen"
        >
          {slides.map((slide, i) => (
            <SwiperSlide
              key={slide.id}
              className="w-full relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {activeIndex === i && (
                  <motion.div
                    key={`slide-${slide.id}-${activeIndex == i}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ scale: 1, opacity: 0 }}
                    layout
                    transition={{ duration: 1 }}
                    className="relative h-[600px] w-full "
                  >
                    <MotionImage
                      key={slide.image}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1 }}
                      src={slide.image}
                      alt="slider"
                      fill
                      className="object-cover"
                    />
                    <Wrapper>
                      <motion.div
                        key={i}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={textVariant}
                        className="absolute top-4/12  text-white px-0"
                      >
                        <motion.h1
                          variants={textVariant}
                          className="text-white text-lg sm:text-2xl font-normal text-shadow"
                        >
                          {slide.headline}
                        </motion.h1>

                        <motion.h1
                          variants={textVariant}
                          className="text-white  text-4xl sm:text-7xl font-semibold mb-2 text-shadow"
                        >
                          {slide.title}
                        </motion.h1>

                        <motion.p variants={textVariant} className="max-w-3xl">
                          {slide.subtitle}
                        </motion.p>

                        <motion.a
                          variants={textVariant}
                          href={FB_LINK}
                          target="_blank"
                        >
                          <Button className="my-6 py-6 sm:py-8 w-fit justify-between px-16 bg-primary-400 hover:bg-primary-300 duration-500 ease-in-out transition-all">
                            <div className="grow" />
                            <p className="text-md sm:text-lg  text-center text-white text-shadow-2xs">
                              SHOP NOW
                            </p>
                          </Button>
                        </motion.a>
                      </motion.div>
                    </Wrapper>
                  </motion.div>
                )}
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
