import React from "react";
import { Link } from "react-router-dom";
import seemore from "../images/seemoreBtn.png";
import { useDispatch, useSelector } from "react-redux";
import { onAdd } from "../cartItemsSlice.js";
import { toastr } from 'react-redux-toastr';


function Products() {
  const newProducts = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  return (
    <div
      className="text-dark1 font-bakbak lg:pl-32 pl-16 bg-light2 h-full lg:pt-32 pt-60"
      id="products"
    >
      <div className="lg:text-4xl text-xl">New Products</div>
      <div className="lg:text-2xl text-base text-dark2 leading-8 font-montserrat mt-2">
        Purchase the product listed below as soon as possible before it sells
        out.
      </div>
      <div className="flex lg:flex-row flex-col flex-wrap lg:gap-8 gap-4 lg:mt-10 mt-4 font-montserrat">
        {newProducts.allproducts.slice(0, 7).map((product) => (
          <div>
            <div class=" hover:cursor-pointer flex flex-col w-full lg:max-w-[20em] max-w-[14em] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link state={product} to="/product">
                <div className="place-self-center rounded-lg">
                  <img
                    class="p-8 object-cover object-center lg:w-[20em] w-[14em] h-[20em] "
                    src={product.img}
                    alt={product.title}
                  />
                </div>
              </Link>
              <div class="px-5 pb-5">
                <h5 className="lg:text-xl text-base font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
                <h2 className="lg:text-base text-sm font-normal">
                  {product.name}
                </h2>
                <div class="flex items-center lg:justify-between justify-evenly pt-4">
                  <span class="lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
                    {product.price}
                  </span>
                  <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg lg:text-sm text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {dispatch(onAdd(product)); toastr.success('Product added to cart') }}>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="lg:place-self-center lg:ml-0 ml-[6em] opacity-80 hover:opacity-100  hover:cursor-pointer hover:brightness-125 duration-700">
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
