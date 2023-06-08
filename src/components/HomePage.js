import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import VIMLE from "../images/lowimages/orangeBoxFoamSofa.jpg";
import EKOLSUND from "../images/lowimages/whiteSofaWithGreenPillows.jpg";
import JÄTTEBO from "../images/lowimages/pinksofa.jpg";
import { motion } from "framer-motion";

const homeAnimate = {
  offscreen: { x: -50 },
  onscreen: {
    x: 0,
    transition: { type: "spring", bounce: 0.4, duration: 3 },
  },
};

const swiperAnimate = {
  offscreen: { x: 100 },
  onscreen: {
    x: 0,
    transition: { type: "spring", bounce: 0.4, duration: 5 },
  },
};


function HomePage() {
  const furnitureImages = [VIMLE, EKOLSUND, JÄTTEBO];

  return (
    <div 
    
    className="bg-light2 h-screen text-dark1 font-bakbak ">
      <div 
      
      className="flex lg:flex-row flex-col items-center self-center h-screen justify-evenly lg:pl-32 pl-16 lg:pr-32 lg:pt-0 pt-[20em]">
        <motion.div initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{staggerChildren:0.5}}
        variants={homeAnimate} className="lg:w-[50em] w-[13em] flex flex-col lg:gap-6 gap-2">
          <div className="lg:text-8xl text-2xl font-bold tracking-wider bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">
            Spring Sale!
          </div>
          <div className="lg:text-4xl text-xl">Get 35% off Sofas</div>
          <div className="lg:text-2xl text-base text-dark2 leading-8 font-montserrat lg:mt-6 mt-2">
            Since 2019, minimalist sofa decor has been popular. <br />
            Millennials look to the combination of modern and
            <br />
            semi-classical decor for inspiration.
          </div>
          <div>
            <button className="lg:text-2xl sm:text-xl text-sm font-bold tracking-wider bg-gradient-to-r from-purple-400 to-blue-600 text-transparent font-montserrat  hover:scale-110 duration-500 text-white py-4 lg:px-10 px-2 rounded tracking-wider lg:mt-6 mt-2">
              <Link to="/allproducts">Start to shop now</Link>
            </button>
          </div>
        </motion.div>
        <motion.div initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{staggerChildren:0.5}}
        variants={swiperAnimate} className=" lg:w-[32em] w-[15em] pt-[3em]">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            modules={[Navigation, Autoplay]}
            centeredSlides={true}
            navigation={true}
            className="lg:w-[32em] w-[13em]  rounded-[2em] shadow-2xl"
            // coverflowEffect={{
            //   rotate: 20,
            //   stretch: 0,
            //   depth: 200,
            //   modifier: 1,
            //   slideShadows: true,
            // }}
            loop={true}
            autoplay={{
              delay: 4000, // 4 saniye sonra otomatik oynatmayı başlat
            }}
          >
            {furnitureImages.map((link) => (
              <SwiperSlide
                key={link}
                className=" object-contain h-full w-full z-40"
              >
                <img src={link} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
