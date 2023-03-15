import React from "react";
import VIMLE from "../images/lowimages/vintageYellowCouch.jpg";
import EKOLSUND from "../images/lowimages/blackPlasticChair.jpg";
import JÄTTEBO from "../images/lowimages/wickerHanmadeWoodenChair.jpg";
import LANDSKRONA from "../images/lowimages/vintageMiniChairandSofa.jpg";
import SÖDERHAMN from "../images/lowimages/orangeBoxFoamSofa.jpg";
import LINNEBÄCK from "../images/lowimages/grayPaddedChair.jpg";
import NOLMYRA from "../images/lowimages/claretRedSofa.jpg";
import seemore from "../images/seemoreBtn.png"
// import EKENÄSET from "../images/lowimages/copperWiredAccentChair.jpg";
// import PELLO from "../images/lowimages/teakWoodSofa.jpg";

const newproducts = [
  {
    name: "Vintage Yellow Couch",
    img: VIMLE,
    title: "VIMLE",
    price: "$92",
    star: "../images/4.png",
  },
  {
    name: "Black Chair",
    img: EKOLSUND,
    title: "GISTAD",
    price: "$82",
    star: "../images/3.png",
  },
  {
    name: "Wicker Hanmade Wooden Chair",
    img: JÄTTEBO,
    title: "JÄTTEBO",
    price: "$90",
    star: "../images/4.png",
  },
  {
    name: "Vintage Mini Chair and Sofa",
    img: LANDSKRONA,
    title: "LANDSKRONA",
    price: "$120",
    star: "../images/5.png",
  },
  {
    name: "Orange Box Foam Sofa",
    img: SÖDERHAMN,
    title: "SÖDERHAMN",
    price: "$180",
    star: "../images/5.png",
  },
  {
    name: "Gray Padded Chair",
    img: LINNEBÄCK,
    title: "LINNEBÄCK",
    price: "$100",
    star: "../images/3.png",
  },
  {
    name: "Claret Red Sofa",
    img: NOLMYRA,
    title: "NOLMYRA",
    price: "$77",
    star: "../images/4.png",
  },
  // {
  //   name: "Copper Wired Accent Chair",
  //   img: EKENÄSET,
  //   title: "EKENÄSET",
  //   price: "$43",
  //   star: "../images/4.png",
  // },
  // {
  //   name: "Copper Wired Accent Chair",
  //   img: PELLO,
  //   title: "PELLO",
  //   price: "$43",
  //   star: "../images/4.png",
  // },
];

function Products() {
  return (
    <div className="text-dark1 font-bakbak pl-32 bg-light2 h-full pt-32">
      <div className="text-4xl ">New Products</div>
      <div className="text-2xl text-dark2 leading-8 font-montserrat mt-2">
        Purchase the product listed below as soon as possible before it sells
        out.
      </div>
      <div className="flex lg:flex-row flex-col flex-wrap gap-8 mt-10 font-montserrat">
        {newproducts.map((product) => (
          <div>
            {/* <img src={product.img} alt={product.title} className="h-20"/> */}

            <div class="hover:scale-110  duration-500 hover:cursor-pointer flex flex-col w-full max-w-[20em] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="place-self-center rounded-lg">
                <a href="https://flowbite.com/docs/components/card/">
                  <img
                    class="p-8 object-cover object-center w-[20em] h-[20em] "
                    src={product.img}
                    alt={product.title}
                  />
                </a>
              </div>
              <div class="px-5 pb-5">
                
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                  <h2 className="text-base font-normal">{product.name}</h2>
                
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
                <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white">
                    {product.price}
                  </span>
                  <a
                    href="https://flowbite.com/docs/components/card/"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="place-self-center gap-8 flex flex-col opacity-80 hover:opacity-100 hover:scale-110  hover:cursor-pointer hover:animate-bounce hover:brightness-125 duration-700">
          <img src={seemore} alt="seemoreButton" className="w-[8em]  ml-24 "/>
          <div className="text-xl ml-20">See All Products</div>
        </div>
      </div>
    </div>
  );
}

export default Products;
