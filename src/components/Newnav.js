import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../images/shopping-cart.png";
import userIcon from "../images/user.png";
import loginIcon from "../images/login.png";
import logoutIcon from "../images/logout.png";
import logo from "../images/sofa.png";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { toggleLoginStatus } from "../loginSlice";

function Newnav() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(toggleLoginStatus(false));
        navigate("/login");
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  const goToLoginPage = () => {
    navigate("/login");
  };

  const cartItemQuantity = useSelector((state) => state.cartItems);
  const loginStatus = useSelector((state) => state.loginStatus);
  // console.log(loginStatus)
  let Links = [
    // { name: "HOME", link: "/" },
    { name: "PRODUCTS", link: "/#products" },
    { name: "SERVICES", link: "/#services" },
    { name: "ABOUT US", link: "/#about" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-screen fixed z-40 top-0 left-0">
      <div className="md:flex bg-white items-center justify-between py-6 md:px-10 px-7">
        <div className="text-4xl cursor-pointer flex items-center font-bakbak text-[#ca61c9]">
          <a href="/">
            <div className="flex flex-row items-center gap-2 hover:brightness-110">
              <div className="w-14">
                <img src={logo} alt="logo" />
              </div>
              <div>Hoomie</div>
            </div>
          </a>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-24 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-0`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-4">
              <a
                href={link.link}
                className="text-dark1 hover:text-gray-400 duration-500 lg:text-xl text-sm font-montserrat font-bold"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Link to="/contact" className="md:ml-8 md:my-0 my-4">
            <li className="text-dark1 hover:text-gray-400 duration-500 lg:text-xl text-sm font-montserrat font-bold">
              CONTACT
            </li>
          </Link>
          <div className="md:flex lg:ml-6 lg:gap-6 lg:mt-0 mt-2">
            <button className="relative">
              <Link to="/cart">
                <img
                  src={cartIcon}
                  alt="cartIcon"
                  className="hover:scale-110 duration-500 cursor-pointer lg:h-10 h-6"
                />
              </Link>
              {cartItemQuantity.cartItem !== 0 && (
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                  {cartItemQuantity.cartItem}
                </div>
              )}
            </button>
            <Link to="/register">
              <img
                src={userIcon}
                alt="cartIcon"
                className="hover:scale-110 duration-500 cursor-pointer lg:h-10 h-6"
              />
            </Link>
            <img
              onClick={loginStatus.loginStatus ? logout : goToLoginPage}
              src={loginStatus.loginStatus ? logoutIcon : loginIcon}
              alt="cartIcon"
              className="hover:scale-110 duration-500 cursor-pointer lg:h-10 h-6 lg:mt-0 mt-2"
            />
          </div>
          {/* <button className="bg-blue-600 text-white font-montserrat py-2 px-6 rounded md:ml-8 hover:bg-blue-400 duration-500">
            LOGIN or SIGNUP
          </button> 
          <img
            src={userIcon}
            alt="userIcon"
            className="hover:scale-110 duration-500 cursor-pointer lg:h-10 h-6 lg:mt-0 mt-2"
          />
          </div> */}
        </ul>
      </div>
    </div>
  );
}

export default Newnav;
