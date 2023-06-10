import React from "react";
import { useLocation, Link } from "react-router-dom";
// import LANDSKRONA from "../images/lowimages/vintageMiniChairandSofa.jpg";
// import SÖDERHAMN from "../images/lowimages/orangeBoxFoamSofa.jpg";
// import LINNEBÄCK from "../images/lowimages/grayPaddedChair.jpg";
// import NOLMYRA from "../images/lowimages/claretRedSofa.jpg";
import { toastr } from "react-redux-toastr";
import { onAdd } from "../cartItemsSlice.js";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-stars";

// const similarProducts = [
//   {
//     name: "Vintage Mini Chair Sofa",
//     img: LANDSKRONA,
//     title: "LANDSKRONA",
//     price: "$92",
//     star: "../images/4.png",
//   },
//   {
//     name: "Orange Box Foam Sofa",
//     img: SÖDERHAMN,
//     title: "SÖDERHAMN",
//     price: "$82",
//     star: "../images/3.png",
//   },
//   {
//     name: "Gray Padded Chair",
//     img: LINNEBÄCK,
//     title: "LINNEBÄCK",
//     price: "$90",
//     star: "../images/4.png",
//   },
//   {
//     name: "Claret Red Sofa",
//     img: NOLMYRA,
//     title: "NOLMYRA",
//     price: "$120",
//     star: "../images/5.png",
//   },]

const ratingChanged = (newRating) => {
  console.log(newRating);
};

function Product() {
  window.scrollTo(0, 0);

  const location = useLocation();
  const products = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const propsData = location.state;
  return (
    <div className="flex flex-col mt-[10em] m-[5em] font-montserrat ">
      <div className="flex lg:flex-row flex-col">
        <div className="basis-2/3">
          <img src={propsData.img} alt="" className="rounded-[1em] shadow-xl" />
        </div>
        <div className="basis-1/3 lg:pl-[5em] gap-4 flex flex-col mt-6">
          <div className="lg:text-5xl text-3xl tracking-wider font-bakbak">
            {propsData.title}
          </div>
          <div className="lg:text-2xl text-lg">{propsData.name}</div>
          <div className="flex lg:flex-row flex-col gap-6  pt-4">
            <div>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={30}
                color2={"#ffd700"}
                value={4}
              />
            </div>
            <div className="self-center underline hover:cursor-pointer">
              56 reviews
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="lg:text-4xl text-lg font-bold tracking-widest lg:pt-12 pt-6">
              {propsData.price}
            </div>
            <div className="lg:text-lg text-sm">
              or 10% off with <span className="font-bold">Bank</span>
            </div>
          </div>
          <div className="lg:pt-12 pt-6">
            <div className="flex flex-row lg:gap-8 gap-4">
              <button class="lg:w-12 lg:h-12 w-6 h-6 rounded-full bg-[#E4DCCF] hover:border-4 border-2 border-gray-600 text-white"></button>
              <button class="lg:w-12 lg:h-12 w-6 h-6 rounded-full bg-[#B99B6B] hover:border-4 border-2 border-gray-600 text-white"></button>
              <button class="lg:w-12 lg:h-12 w-6 h-6 rounded-full bg-black hover:border-4 border-2 border-gray-600 text-white"></button>
            </div>
          </div>
          <div className="lg:pt-12 pt-6 flex flex-col gap-1">
            <div className="lg:text-base text-sm">In stock</div>
            <div className="lg:text-base text-sm">
              2 left for dispatch in 5 working days
            </div>
            <button
              class="bg-black hover:bg-gray-800 text-white lg:text-base text-sm font-bold lg:py-3 py-1 lg:px-24 px-12 mt-4 rounded lg:tracking-widest"
              onClick={() => {
                dispatch(onAdd(propsData));
                toastr.success("Product added to cart");
              }}
            >
              Add to cart
            </button>
          </div>
          <div className="lg:mt-8 mt-4 lg:text-base text-sm">
            *Home Delivery $40
          </div>
          <div className="lg:text-base text-sm">
            *Your pieces is covered for 5 years
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="lg:text-2xl text-lg font-bold">
          Customers also viewed
        </div>
        <div className="flex lg:flex-row flex-col justify-evenly gap-10 pt-10">
          {products.allproducts.slice(2,6).map((product) => (
            <div className="flex items-center hover:cursor-pointer shadow-2xl rounded-[1em] bg-light1 ">
              <Link state={product} to="/product">
                <img src={product.img} alt="" className="rounded-[1em] object-cover object-center lg:w-[25em] w-[12em] lg:h-[25em] h-[12em] hover:scale-110 duration-500 " />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
