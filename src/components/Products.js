import React from "react";
import { Link } from "react-router-dom";
import seemore from "../images/seemoreBtn.png";
import { useDispatch, useSelector } from "react-redux";
import {
  onAdd,
  handleHeartClick,
} from "../cartItemsSlice.js";
import { toastr } from "react-redux-toastr";
import { motion } from "framer-motion";

const cardAnimate = {
  offscreen: { x: -100 },
  onscreen: {
    x: 0,
    transition: { type: "spring", bounce: 0.4, duration: 3 },
  },
};

function Products() {
  const newProducts = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  // const handleMouseEnter = (index) => {
  //   // const newHoverStates = [...hoverStates];
  //   // newHoverStates[index] = true;
  //   // setHoverStates(newHoverStates);
  //   dispatch(handleMouseEnterance({ index: index}));
  // };

  // const handleMouseLeave = (index, clickStatus) => {
  //   // const newHoverStates = [...hoverStates];
  //   // newHoverStates[index] = false;
  //   // setHoverStates(newHoverStates);
  //   dispatch(handleMouseEnterance({ index: index}));
  // };

  const setHeartClicked = (productObj, index) => {
    // const newHoverStates = [...isHeartClicked];
    // newHoverStates[index] = !(newHoverStates[index]);
    // setHeartClickStatus(newHoverStates);
    dispatch(handleHeartClick(productObj));
    // console.log("hello product from products component: " + JSON.stringify(productObj));
    !(newProducts.allproducts[index].isHeartClicked)
      ? toastr.info("Product added to favorites")
      : toastr.warning("Product removed from favorites");
  };

  return (
    <div
      className="text-dark1 font-bakbak lg:pl-32 pl-8 bg-light2 h-full lg:pt-32 pt-60"
      id="products"
    >
      <div className="lg:text-4xl text-xl">New Products</div>
      <div className="lg:text-2xl text-base text-dark2 leading-8 font-montserrat mt-2">
        Purchase the product listed below as soon as possible before it sells
        out.
      </div>
      <div className="flex sm:flex-row flex-col flex-wrap lg:gap-8 gap-4 lg:mt-10 mt-4 font-montserrat">
        {newProducts.allproducts.slice(0, 7).map((product, index) => (
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.5 }}
            variants={cardAnimate}
            className=" hover:cursor-pointer flex flex-col w-full lg:max-w-[20em] max-w-[14em] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="place-self-center rounded-lg relative">
              <Link state={product} to="/product">
                <img
                  class="p-8 object-cover object-center sm:w-[20em] w-[14em] sm:h-[20em] h-[14em] "
                  src={product.img}
                  alt={product.title}
                />
              </Link>
              <div
                key={product.id}
                className="border-2 border-red-500 bg-white rounded-full flex items-center justify-center sm:h-10 sm:w-10 h-8 w-8 text-red-500  sm:text-3xl text-xl absolute top-10 text-center right-10"
           
                onClick={() =>
                  setHeartClicked({
                    id: product.id,
                    orderQuantity: product.orderQuantity,
                    name: product.name,
                    img: product.img,
                    title: product.title,
                    price: product.price,
                    hoverStates: product.hoverStates,
                    isHeartClicked: product.isHeartClicked,
                    heartClass: product.heartClass,
                  }, index)
                }
              >
                {product.isHeartClicked ? <ion-icon name="heart"></ion-icon> : <ion-icon name="heart-outline"></ion-icon>}
              </div>
            </div>

            <div class="px-5 pb-5">
              <h5 className="lg:text-xl text-base font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
              <h2 className="lg:text-base text-sm font-normal">
                {product.name}
              </h2>
              <div class="flex sm:flex-row flex-col items-center lg:justify-between justify-evenly pt-4">
                <span class="lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
                  $ {product.price}
                </span>
                <button
                  variants={cardAnimate}
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg sm:text-sm text-xs px-5 sm:py-2.5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    dispatch(onAdd(product));
                    toastr.success("Product added to cart");
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="sm:place-self-center lg:ml-0 ml-[6em] opacity-80 hover:opacity-100  hover:cursor-pointer hover:brightness-125 duration-700">
          <Link to="/allproducts" className=" lg:gap-8 gap-4 flex flex-col">
            {" "}
            <img
              src={seemore}
              alt="seemoreButton"
              className="lg:w-[8em] w-[4em] lg:ml-24 "
            />
            <div className="lg:text-xl text-base lg:ml-20 ml-[-2em]">
              See All Products
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
