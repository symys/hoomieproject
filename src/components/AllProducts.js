import React from "react";
import { Link } from "react-router-dom";
// import VIMLE from "../images/lowimages/vintageYellowCouch.jpg";
// import EKOLSUND from "../images/lowimages/blackPlasticChair.jpg";
// import JÄTTEBO from "../images/lowimages/wickerHanmadeWoodenChair.jpg";
// import LANDSKRONA from "../images/lowimages/vintageMiniChairandSofa.jpg";
// import SÖDERHAMN from "../images/lowimages/orangeBoxFoamSofa.jpg";
// import LINNEBÄCK from "../images/lowimages/grayPaddedChair.jpg";
// import NOLMYRA from "../images/lowimages/claretRedSofa.jpg";
// import FAMMARP from "../images/lowimages/bohemianWickerChair.jpg";
// import PARUP from "../images/lowimages/brownWovenChair.jpg";
// import KIVIK from "../images/lowimages/brownWickerArmchair.jpg";
// import HEMNES from "../images/lowimages/copperWiredAccentChair.jpg";
// import ASVANG from "../images/grayCouch.jpg";
// import AGOTNES from "../images/lowimages/pinksofa.jpg";
// import LÖNSET from "../images/lowimages/teakWoodSofa.jpg";
// import LYCKSELE from "../images/lowimages/greenWoodenSofa.jpg";
// import FRIHETEN from "../images/lowimages/whiteCouch.jpg";
// import SPRUTTIG from "../images/lowimages/whiteSofaWithGreenPillows.jpg";
// import BRIMNES from "../images/lowimages/whitePearlChair.jpg";
// import HAMMARN from "../images/lowimages/whiteWickerChair.jpg";
// import HOLMSUND from "../images/lowimages/yellowArmchair.jpg";
// import NYHAMN from "../images/lowimages/whiteSofa.jpg";

import { useDispatch, useSelector } from "react-redux";
import { onAdd } from "../cartItemsSlice.js";

// const allproducts = [
//     {
//       id:1,
//       orderQuantity: 0,
//       name: "Vintage Yellow Couch",
//       img: VIMLE,
//       title: "VIMLE",
//       price: "$92",
//       star: "../images/4.png",
//     },
//     {
//       id:2,
//       orderQuantity: 0,
//       name: "Black Chair",
//       img: EKOLSUND,
//       title: "GISTAD",
//       price: "$82",
//       star: "../images/3.png",
//     },
//     {
//       id:3,
//       orderQuantity: 0,
//       name: "Wicker Hanmade Wooden Chair",
//       img: JÄTTEBO,
//       title: "JÄTTEBO",
//       price: "$90",
//       star: "../images/4.png",
//     },
//     {
//       id:4,
//       orderQuantity: 0,
//       name: "Vintage Mini Chair and Sofa",
//       img: LANDSKRONA,
//       title: "LANDSKRONA",
//       price: "$120",
//       star: "../images/5.png",
//     },
//     {
//       id:5,
//       orderQuantity: 0,
//       name: "Orange Box Foam Sofa",
//       img: SÖDERHAMN,
//       title: "SÖDERHAMN",
//       price: "$180",
//       star: "../images/5.png",
//     },
//     {
//       id:6,
//       orderQuantity: 0,
//       name: "Gray Padded Chair",
//       img: LINNEBÄCK,
//       title: "LINNEBÄCK",
//       price: "$100",
//       star: "../images/3.png",
//     },
//     {
//       id:7,
//       orderQuantity: 0,
//       name: "Claret Red Sofa",
//       img: NOLMYRA,
//       title: "NOLMYRA",
//       price: "$77",
//       star: "../images/4.png",
//     },
//     {
//       id:8,
//       orderQuantity: 0,
//         name: "Bohemian Wicker Chair",
//         img: FAMMARP,
//         title: "FAMMARP",
//         price: "$43",
//         star: "../images/4.png",
//       },
//     {
//       id:9,
//       orderQuantity: 0,
//       name: "Brown Woven Chair",
//       img: PARUP,
//       title: "PARUP",
//       price: "$43",
//       star: "../images/4.png",
//     },
//     {
//       id:10,
//       orderQuantity: 0,
//       name: "Bohemian Wicker Arm Chair",
//       img: KIVIK,
//       title: "KIVIK",
//       price: "$43",
//       star: "../images/4.png",
//     },
//     {
//       id:11,
//       orderQuantity: 0,
//         name: "Copper Wired Accent Chair",
//         img: HEMNES,
//         title: "HEMNES",
//         price: "$43",
//         star: "../images/4.png",
//       },
//       {
//         id:12,
//         orderQuantity: 0,
//         name: "Gray Couch",
//         img: ASVANG,
//         title: "ASVANG",
//         price: "$92",
//         star: "../images/4.png",
//       },
//       {
//         id:13,
//         orderQuantity: 0,
//         name: "Pink Sofa",
//         img: AGOTNES,
//         title: "AGOTNES",
//         price: "$82",
//         star: "../images/3.png",
//       },
//       {
//         id:14,
//         orderQuantity: 0,
//         name: "Teak Wood Sofa",
//         img: LÖNSET,
//         title: "LÖNSET",
//         price: "$90",
//         star: "../images/4.png",
//       },
//       {
//         id:15,
//         orderQuantity: 0,
//         name: "Vintage Green Sofa",
//         img: LYCKSELE,
//         title: "LYCKSELE",
//         price: "$120",
//         star: "../images/5.png",
//       },
//       {
//         id:16,
//         orderQuantity: 0,
//         name: "White Couch",
//         img: FRIHETEN,
//         title: "FRIHETEN",
//         price: "$180",
//         star: "../images/5.png",
//       },
//       {
//         id:17,
//         orderQuantity: 0,
//         name: "White Sofa with Green Pillows",
//         img: SPRUTTIG,
//         title: "SPRUTTIG",
//         price: "$100",
//         star: "../images/3.png",
//       },
//       {
//         id:18,
//         orderQuantity: 0,
//         name: "White Pearl Chair",
//         img: BRIMNES,
//         title: "BRIMNES",
//         price: "$77",
//         star: "../images/4.png",
//       },
//       {
//         id:19,
//         orderQuantity: 0,
//         name: "White Wicker Chair",
//         img: HAMMARN,
//         title: "HAMMARN",
//         price: "$43",
//         star: "../images/4.png",
//       },
//       {
//         id:20,
//         orderQuantity: 0,
//         name: "Yellow Arm Chair",
//         img: HOLMSUND,
//         title: "HOLMSUND",
//         price: "$43",
//         star: "../images/4.png",
//       },
//       {
//         id:21,
//         orderQuantity: 0,
//           name: "White Sofa",
//           img: NYHAMN,
//           title: "NYHAMN",
//           price: "$43",
//           star: "../images/4.png",
//         },

//   ];

function AllProducts() {
  //sadece böyle yaparsam her butona tıkladığımda en yukarı atıyor.
  // window.scrollTo(0, 0);
  //onLoad sayesinde sayfa ilk yüklendiğin en üstten başlayacak.
  window.onload = function() {
    window.scrollTo(0, 0);
  }
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartItems);
  // const cartItems = useSelector(state => state.cartItems)
  // console.log(cartItems)

  return (
    <div className="flex flex-col pt-[10em] p-[5em] bg-light2">
      <div className="flex lg:flex-row flex-col flex-wrap lg:gap-8 gap-4 lg:mt-10 mt-4 font-montserrat">
        {products.allproducts.map((product, index) => (
          <div key={index}>
            <div class="hover:scale-110  duration-500 hover:cursor-pointer flex flex-col w-full lg:max-w-[20em] max-w-[15em] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="place-self-center rounded-lg">
                <Link state={product} to="/product">
                  <img
                    class="p-8 object-cover object-center w-[20em] h-[20em] "
                    src={product.img}
                    alt={product.title}
                  />
                </Link>
              </div>
              <div class="px-5 pb-5">
                <h5 className="lg:text-xl text-base font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
                <h2 className="lg:text-base text-sm font-normal">
                  {product.name}
                </h2>

                <div class="flex items-center mt-2.5 mb-5">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    5.0
                  </span>
                </div>
                <div class="flex items-center lg:justify-between justify-evenly">
                  <span class="lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
                    {product.price}
                  </span>
                  <button
                    onClick={() => dispatch(onAdd(product))}
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg lg:text-sm text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
