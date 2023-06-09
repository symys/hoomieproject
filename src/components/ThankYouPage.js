import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const thanksAnimate = {
  offscreen: { y: 50 },
  onscreen: {
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 3 },
  },
};

function ThankYouPage() {
  const location = useLocation();
  const propsData = location.state;

  return (
    <div className="flex flex-col font-montserrat justify-center items-center h-screen bg-light2 bg-cover bg-center">
      <motion.div initial={"offscreen"}
          whileInView={"onscreen"}
          transition={{staggerChildren:0.1}} variants={thanksAnimate}  className="sm:text-3xl text-sm sm:p-20 p-10 m-2 mb-2 shadow-3xl rounded-[1em] font-bakbak tracking-wider bg-white opacity-70">
        {propsData}
      </motion.div>
      <div>
        <Link to="/">
          <button className="lg:text-2xl sm:text-xl text-sm font-bold tracking-wider bg-gradient-to-r from-purple-400 to-blue-600 text-transparent font-montserrat  hover:scale-110 duration-500 text-white py-4 lg:px-10 px-2 rounded tracking-wider lg:mt-6 mt-2">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ThankYouPage;
