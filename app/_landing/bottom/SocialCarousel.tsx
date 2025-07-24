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
    link: "https://scontent.fpnh2-1.fna.fbcdn.net/v/t39.30808-6/520948677_1130752512416974_4615759049780292371_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4Jv07uTb5dgQ7kNvwFx2NW_&_nc_oc=AdnkQsY5N-5AcoVNyD2Q-IPAau96q_v0J7CMApawRRXwilrL88k07M2SSXWNXlNRyjw&_nc_zt=23&_nc_ht=scontent.fpnh2-1.fna&_nc_gid=QlNepJ87oD_zxZx2lse5Zw&oh=00_AfRGrGTz5IUOPIXleROtg0eHACzz6jD3tC4gCEH-nITIFQ&oe=688515A0",
    url: "https://scontent.fpnh2-1.fna.fbcdn.net/v/t39.30808-6/520948677_1130752512416974_4615759049780292371_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4Jv07uTb5dgQ7kNvwFx2NW_&_nc_oc=AdnkQsY5N-5AcoVNyD2Q-IPAau96q_v0J7CMApawRRXwilrL88k07M2SSXWNXlNRyjw&_nc_zt=23&_nc_ht=scontent.fpnh2-1.fna&_nc_gid=QlNepJ87oD_zxZx2lse5Zw&oh=00_AfRGrGTz5IUOPIXleROtg0eHACzz6jD3tC4gCEH-nITIFQ&oe=688515A0",
  },
  {
    id: 6,
    link: "https://scontent.fpnh2-2.fna.fbcdn.net/v/t39.30808-6/523116508_1129932919165600_2122805901817921154_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MHIgVdKapHgQ7kNvwEXRDk7&_nc_oc=Adn2xdLSTckvKaXQxeuiI6RO8tuttatb13JMjFHQtiydX3z97o4uh0jvFPRKlk46E-E&_nc_zt=23&_nc_ht=scontent.fpnh2-2.fna&_nc_gid=Qli4HnjrtCTyr3ymMHjjzg&oh=00_AfQobK4wOthvjNxIkPuWAg6OfHPZY--uTfY_ykPrEEhzjw&oe=688531D2",
    url: "https://scontent.fpnh2-2.fna.fbcdn.net/v/t39.30808-6/523116508_1129932919165600_2122805901817921154_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MHIgVdKapHgQ7kNvwEXRDk7&_nc_oc=Adn2xdLSTckvKaXQxeuiI6RO8tuttatb13JMjFHQtiydX3z97o4uh0jvFPRKlk46E-E&_nc_zt=23&_nc_ht=scontent.fpnh2-2.fna&_nc_gid=Qli4HnjrtCTyr3ymMHjjzg&oh=00_AfQobK4wOthvjNxIkPuWAg6OfHPZY--uTfY_ykPrEEhzjw&oe=688531D2",
  },
  {
    id: 7,
    link: "https://scontent.fpnh2-2.fna.fbcdn.net/v/t39.30808-6/521553599_1125983869560505_335629306354103403_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lisTqlg1jwwQ7kNvwFaSUpR&_nc_oc=Adn9Vmd9JQwjalWpkjPvKlMCMQ81DCDpETnz2UhD18VTckIBa7QsDuNEtob5tDgkjJI&_nc_zt=23&_nc_ht=scontent.fpnh2-2.fna&_nc_gid=MX5fkfRpTR0csVPJ6LtXtg&oh=00_AfTpUopZRxretBumJqmKve_7tuq36KpdYQhBRc7xFZxl_w&oe=68852143",
    url: "https://scontent.fpnh2-2.fna.fbcdn.net/v/t39.30808-6/521553599_1125983869560505_335629306354103403_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lisTqlg1jwwQ7kNvwFaSUpR&_nc_oc=Adn9Vmd9JQwjalWpkjPvKlMCMQ81DCDpETnz2UhD18VTckIBa7QsDuNEtob5tDgkjJI&_nc_zt=23&_nc_ht=scontent.fpnh2-2.fna&_nc_gid=MX5fkfRpTR0csVPJ6LtXtg&oh=00_AfTpUopZRxretBumJqmKve_7tuq36KpdYQhBRc7xFZxl_w&oe=68852143",
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
