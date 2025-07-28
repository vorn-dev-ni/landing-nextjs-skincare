import { motion, Variants } from "motion/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../globals.css";
const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.4,
      duration: 0.5,
      delay: 0.5,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
const socials = [
  {
    id: 1,
    link: "https://eliah-next.vercel.app/images/instagram/InstagramTwo/6.png",
    url: "https://eliah-next.vercel.app/images/instagram/InstagramTwo/6.png",
  },
  {
    id: 2,
    link: "https://eliah-next.vercel.app/images/instagram/InstagramTwo/5.png",
    url: "https://eliah-next.vercel.app/images/instagram/InstagramTwo/5.png",
  },
  {
    id: 3,
    link: "https://eliah-next.vercel.app/images/instagram/InstagramTwo/3.png",
    url: "https://eliah-next.vercel.app/images/instagram/InstagramTwo/3.png",
  },
  {
    id: 4,
    link: "https://eliah-next.vercel.app/images/instagram/InstagramTwo/6.png",
    url: "https://eliah-next.vercel.app/images/instagram/InstagramTwo/6.png",
  },
  {
    id: 5,
    link: "https://images.unsplash.com/photo-1659533984606-0aa0dc68bad0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://images.unsplash.com/photo-1659533984606-0aa0dc68bad0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    link: "https://images.unsplash.com/photo-1555820585-c5ae44394b79?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://images.unsplash.com/photo-1555820585-c5ae44394b79?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    link: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const SocialCarousel = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full mb-12"
    >
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={2}
        slidesPerView={2}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="w-screen"
        style={{ paddingBottom: "2rem" }}
      >
        {socials.map((data, index) => (
          <SwiperSlide key={index}>
            <motion.div variants={fadeUp} className="block w-full h-full">
              <Image
                src={data.url}
                alt={`Instagram ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-72 object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default SocialCarousel;
