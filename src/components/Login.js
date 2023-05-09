import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/sofa.png";

function Login() {
  return (
    <div className="text-dark1 font-bakbak bg-light2 h-screen items-center flex flex-col justify-center lg:gap-8 gap-4">
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" className="lg:w-[10em] w-[5em] lg:mb-[-2em]" />
        <div className="lg:text-[2em] text-lg text-center text-[#B939B7]">Hoomie</div>
      </div>
      <div className=" font-montserrat flex flex-col items-center gap-2">
        <div className="lg:text-5xl text-lg text-dark1 font-bold">
          Log in to your account
        </div>
        <div className="lg:text-lg text-sm cursor-pointer underline text-blue-600">
          <Link to="/register"> Don't have an account? </Link>
        </div>
      </div>
      <div className="flex flex-col lg:gap-6 gap-4 lg:w-[30em] w-[15em] font-montserrat lg:font-bold">
        <input
          placeholder="Username or Email"
          className="lg:h-[3em] h-[2em] placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
        />
        <input
          placeholder="Password"
          className="lg:h-[3em] h-[2em] placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
        />
        <div className="self-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold lg:py-3 py-2 lg:px-20 px-8 rounded lg:text-xl text-sm tracking-widest ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
