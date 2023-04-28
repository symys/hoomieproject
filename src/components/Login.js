import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/sofa.png";

function Login() {
  return (
    <div className="text-dark1 font-bakbak bg-light2 h-screen items-center flex flex-col justify-center gap-8">
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" className="w-[10em] mb-[-2em]" />
        <div className="text-[2em] text-center  text-[#B939B7]">Hoomie</div>
      </div>
      <div className=" font-montserrat flex flex-col items-center  gap-2">
        <div className="text-5xl text-dark1 font-bold">
          Log in to your account
        </div>
        <div className="text-lg cursor-pointer underline text-blue-600">
          <Link to="/register"> Don't have an account?</Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-[30em] font-montserrat font-bold">
        <input
          placeholder="Username or Email"
          className="h-[3em] placeholder:tracking-wider placeholder:pl-4"
        />
        <input
          placeholder="Password"
          className="h-[3em] placeholder:tracking-wider placeholder:pl-4"
        />
        <div className="self-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 rounded text-xl tracking-widest ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
