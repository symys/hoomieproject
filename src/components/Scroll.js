import React from "react";
import { Link } from "react-router-dom";
import home from "../images/up-arrow.png";
// import heart from "../images/heart.png";

function Footer() {
  return (
    <div className=" bottom-0 left-0 bg-dark3 bg-opacity-30 rounded-tr-[2em] rounded-br-[2em]">
      <div className="lg:w-20 w-12 flex flex-col gap-3 lg:pl-6 pl-3 pt-4 pb-4 ">
        <Link
          to="/"
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <img
            src={home}
            alt="home"
            className="lg:hover:h-10 lg:h-8 h-6 duration-500 rounded-tr-[2em] rounded-br-[2em]"
          />
        </Link>
      </div>
      {/* <div className="lg:w-20 w-12 flex flex-col gap-3 bg-dark3 bg-opacity-30 lg:pl-6 pl-3 pb-6 pt-4 rounded-br-[2em] ">
        <Link to="/favorites">
          <img
            src={heart}
            alt="favorites"
            className="lg:hover:h-10 lg:h-8 h-6 duration-500 "
          />
        </Link>
      </div> */}
    </div>
  );
}

export default Footer;
