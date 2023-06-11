import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAdd } from "../cartItemsSlice.js";
import { toastr } from "react-redux-toastr";


function AllProducts() {
  //sadece böyle yaparsam her butona tıkladığımda en yukarı atıyor.
  // window.scrollTo(0, 0);
  //onLoad sayesinde sayfa ilk yüklendiğin en üstten başlayacak.
  window.onload = () => {
    window.scrollTo(0, 0);
  };
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartItems);
  // const cartItems = useSelector(state => state.cartItems)
  // console.log(cartItems)

 

  return (
    <div className="flex flex-col pt-[10em] p-[5em] bg-light2">
      <div className="flex sm:flex-row flex-col flex-wrap lg:gap-8 gap-4 lg:mt-10 mt-4 font-montserrat">
        {products.allproducts.map((product, index) => (
          <div key={index}>
            <div class=" hover:cursor-pointer flex flex-col w-full lg:max-w-[20em] max-w-[15em] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="place-self-center rounded-lg">
                <Link state={product} to="/product">
                  <img
                    class="p-8 object-cover object-center sm:w-[20em] w-[14em] sm:h-[20em] h-[14em] "
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
                <div class="flex sm:flex-row flex-col gap-2 items-center lg:justify-between justify-evenly pt-4">
                  <span class="lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
                   $ {product.price}
                  </span>
                  <button
                    onClick={() => {
                      dispatch(onAdd(product));
                      toastr.success("Product added to cart");
                    }}
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg sm:text-sm text-xs px-5 sm:py-2.5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
