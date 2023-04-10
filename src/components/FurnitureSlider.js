import React from "react";
import Slider from "react-slick";
import VIMLE from "../images/lowimages/vintageYellowCouch.jpg";
import EKOLSUND from "../images/lowimages/blackPlasticChair.jpg";
import JÄTTEBO from "../images/lowimages/wickerHanmadeWoodenChair.jpg";

const furnitureImages = [VIMLE, EKOLSUND, JÄTTEBO];

function FurnitureSlider() {
  // const settings = {
  //     length: 10,
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 3000
  //   };

  const settings = {
    autoplay: true,
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 5,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = furnitureImages.map((image) => (
    <div>
      <img
      key={image}
        src={image}
        alt=""
        className="lg:h-[20em] h-[15em] rounded-[3em] shadow-2xl"
      />
    </div>
  ));

  return <Slider {...settings}>{slides}</Slider>;
}

export default FurnitureSlider;
