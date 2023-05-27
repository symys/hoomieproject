import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
// import "swiper/css/coverflow";
import "swiper/css/navigation";
import "swiper/css";
// import FurnitureSlider from "./FurnitureSlider";
// import homeimg from "../images/landingPageBg.jpg"
import VIMLE from "../images/lowimages/orangeBoxFoamSofa.jpg";
import EKOLSUND from "../images/lowimages/whiteSofaWithGreenPillows.jpg";
import JÄTTEBO from "../images/lowimages/pinksofa.jpg";
// import { useSelector } from "react-redux";



function HomePage() {
  const furnitureImages = [VIMLE, EKOLSUND, JÄTTEBO];

  // const pizza = useSelector(state => state.pizza)
  // console.log(pizza.toppings)
 

  return (
    <div className="bg-light2 h-screen text-dark1 font-bakbak ">
      <div className="flex lg:flex-row flex-col items-center self-center h-screen justify-evenly lg:pl-32 pl-16 lg:pr-32 lg:pt-0 pt-[20em]">
        <div className="lg:w-[50em] w-[16em] flex flex-col lg:gap-6 gap-2">
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
            <button className="lg:text-2xl text-xs font-montserrat bg-dark1 hover:bg-dark2 hover:scale-110 duration-500 text-white py-4 lg:px-10 px-2 rounded tracking-wider lg:mt-6 mt-2">
              <Link to="/allproducts">Start to shop now</Link>
            </button>
          </div>
        </div>
        <div className=" w-[32em] pt-[3em]">
          {/* <img src={homeimg} alt="homeimg" className="lg:h-[35em] h-[10em] rounded-[3em] shadow-2xl "/> */}
          {/* <div >
            <FurnitureSlider />
          </div> */}

          <Swiper
          effect="coverflow"
            grabCursor={true}
            modules={[Navigation, Autoplay]}
            centeredSlides={true}
            navigation={true}
            className="w-[32em]  rounded-[2em] shadow-2xl"
            // coverflowEffect={{
            //   rotate: 20,
            //   stretch: 0,
            //   depth: 200,
            //   modifier: 1,
            //   slideShadows: true,
            // }}
            loop={true}
            autoplay={{
              delay: 5000, // 5 saniye sonra otomatik oynatmayı başlat 
            }}
          >
            {furnitureImages.map((link) => (
              <SwiperSlide key={link} className=" object-contain h-full w-full z-40">
                {/* <Link href={`/detail/${product.id}`}> */}
                <img
                  src={link}
                  alt=""
                  
                />
                {/* </Link> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
