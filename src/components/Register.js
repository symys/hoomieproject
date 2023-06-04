import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase-config";
import logo from "../images/sofa.png";
import { useDispatch } from "react-redux";
import { toggleLoginStatus } from "../loginSlice.js";


function Register() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // eslint-disable-next-line no-console
        console.log(user);
        dispatch(() => toggleLoginStatus(true))
        setEmail("");
        setPassword("");
        
        // eslint-disable-next-line no-alert
        alert("Sign up successfully!");
        navigate("/thankyou")
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        // eslint-disable-next-line no-console
        console.log(errorMessage);
      });
  };

  return (
    <div className="text-dark1 font-bakbak bg-light2 h-screen items-center flex flex-col justify-center lg:gap-8 gap-4">
      <div className="flex flex-col items-center mt-10">
        <img
          src={logo}
          alt="logo"
          className="lg:w-[10em] w-[5em] lg:mb-[-2em]"
        />
        <div className="lg:text-[2em] text-lg text-center text-[#B939B7]">
          Hoomie
        </div>
      </div>
      <div className=" font-montserrat flex flex-col items-center gap-2">
        <div className="lg:text-5xl text-lg text-dark1 font-bold">
          Create an account
        </div>
        <div className="lg:text-lg text-sm ">
          Do you have an account?{" "}
          <Link to="/login">
            <span className="cursor-pointer underline text-blue-600">
              Login
            </span>{" "}
          </Link>
        </div>
      </div>
      <div className="flex flex-col lg:gap-6 gap-4 lg:w-[30em] w-[15em] font-montserrat lg:font-bold">
        <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="lg:h-[3em] h-[2em] placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
        />
        <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="lg:h-[3em] h-[2em] placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
        />
        <div className="self-center">
          <button onClick={signup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold lg:py-3 py-2 lg:px-20 px-8 rounded lg:text-xl text-sm tracking-widest ">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
