import React from "react";
import { motion } from "framer-motion";

const videoAnimate = {
  offscreen: { y: 50 },
  onscreen: {
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 3 },
  },
};

function About() {
  return (
    <div
      id="about"
      className="bg-light2 h-full text-dark1 font-montserrat flex lg:flex-row flex-col lg:pl-32 pl-16 pt-[2em] lg:pr-0 pr-4 pb-[10em] items-center"
    >
      <div className="flex flex-col items-center basis-1/2">
        <div className="lg:text-7xl text-3xl font-bakbak self-start">
          About Us
        </div>
        {/* <div className="text-4xl pt-2 self-start">from Hoomie</div> */}
        <div className="lg:text-xl text-base lg:pt-12 pt-6">
          HOOMIE provides a variety of quality collections for residential,
          office, accessories, and commercial spaces as a shop with a "one stop
          shopping" concept for all furniture products. HOOMIE offers a wide
          range of styles and cutting-edge designs to meet customers' desires
          for dream furniture.
        </div>
        <div className="lg:text-xl text-base mt-10">
          HOOMIE furnishing develops the latest concept of "innovative and
          durable design at an affordable price" with customer needs and tastes
          in mind.
        </div>
      </div>
      <motion.div initial={"offscreen"}
          whileInView={"onscreen"}
          transition={{staggerChildren:0.1}} variants={videoAnimate} className="lg:w-[50em] lg:pl-24 pl-2 lg:pt-0 pt-8">
        <iframe
          src="https://www.youtube.com/embed/v6FEvLcnzP0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="rounded-[1em] lg:h-[330px] lg:w-[600px] h-[10em] sm:w-[20em] w-[13em]"
        ></iframe>
      </motion.div>
    </div>
  );
}

export default About;
