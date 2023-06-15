import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAdd, handleHeartClick } from "../cartItemsSlice.js";
import { toastr } from "react-redux-toastr";

function AllProducts() {
  window.onload = () => {
    window.scrollTo(0, 0);
  };

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartItems);

  const setHeartClicked = (productObj, productId) => {
    dispatch(handleHeartClick(productObj));

    const selectedHeartIndex = products.allproducts.findIndex((item) => item.id === productId)

    !products.allproducts[selectedHeartIndex].isHeartClicked
      ? toastr.info("Product added to favorites")
      : toastr.warning("Product removed from favorites");
  };

  const [selectedPrices, setProducts] = useState({minPrice:0, maxPrice:300});

  const filteredProducts = selectedPrices.minPrice === 0 && selectedPrices === 400 ? products.allproducts : products.allproducts.filter((product) => product.price >= selectedPrices.minPrice && product.price <= selectedPrices.maxPrice)

  // const filterProducts = () => {
  //   const newFilteredProducts = products.allproducts.filter(
  //     (product) => product.price >= minData && product.price <= maxData
  //   );
  //   setFilteredProducts(newFilteredProducts);
  // };

  // const [minData, setMinData] = useState(0);
  // const [maxData, setMaxData] = useState(400);

  return (
    <div className="flex flex-col pt-[10em] p-[5em] bg-light2 font-montserrat">
      <div className=" flex text-center flex-col gap-6">
        <div className="sm:text-2xl text-lg font-bold tracking-wider">
          Filter Products by Price
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-16 gap-4 place-self-center">
          <div>
            <label
              htmlFor="steps-range"
              className="block mb-2 sm:text-xl font-medium text-gray-900 dark:text-white"
            >
              Minimum Price
            </label>
            <input
              type="range"
              min={0}
              max={150}
              step={10}
              defaultValue={selectedPrices.minPrice}
              onChange={(e) =>
                setProducts((prevState) => ({
                  ...prevState,
                  minPrice: parseInt(e.target.value),
                }))
            }
              className="w-[15em] h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">{selectedPrices.minPrice}</span>
          </div>

          <div>
            <label
              htmlFor="steps-range"
              className="block mb-2 sm:text-xl font-medium text-gray-900 dark:text-white"
            >
              
              Maximum Price
            </label>
            <input
              type="range"
              min={150}
              max={300}
              step={10}
              defaultValue={selectedPrices.maxPrice}
              onChange={(e) =>
                setProducts((prevState) => ({
                  ...prevState,
                  maxPrice: parseInt(e.target.value),
                }))}
              className="w-[15em] h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">{selectedPrices.maxPrice}</span>
          </div>

          {/* <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg sm:text-sm text-xs p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => filterProducts()}>Filter Products</button> */}
        </div>
      </div>

      <div className="flex sm:flex-row flex-col flex-wrap lg:gap-8 gap-4 lg:mt-10 mt-4 font-montserrat justify-center">
        {filteredProducts.map((product, index) => (
          <div key={index}>
            <div className="hover:cursor-pointer flex flex-col w-full lg:max-w-[20em] max-w-[15em] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="place-self-center rounded-lg relative">
                <Link state={product} to="/product">
                  <img
                    className="p-8 object-cover object-center sm:w-[20em] w-[14em] sm:h-[20em] h-[14em] "
                    src={product.img}
                    alt={product.title}
                  />
                </Link>
                <div
                  key={product.id}
                  className="border-2 border-red-500 bg-white rounded-full flex items-center justify-center sm:h-10 sm:w-10 h-8 w-8 text-red-500  sm:text-3xl text-xl absolute top-10 text-center right-10"
                  onClick={() =>
                    setHeartClicked(
                      {
                        id: product.id,
                        orderQuantity: product.orderQuantity,
                        name: product.name,
                        img: product.img,
                        title: product.title,
                        price: product.price,
                        hoverStates: product.hoverStates,
                        isHeartClicked: product.isHeartClicked,
                        heartClass: product.heartClass,
                      },
                      product.id
                    )
                  }
                >
                  {product.isHeartClicked ? (
                    <ion-icon name="heart"></ion-icon>
                  ) : (
                    <ion-icon name="heart-outline"></ion-icon>
                  )}
                </div>
              </div>

              <div className="px-5 pb-5">
                <h5 className="lg:text-xl text-base font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
                <h2 className="lg:text-base text-sm font-normal">
                  {product.name}
                </h2>
                <div className="flex sm:flex-row flex-col gap-2 items-center lg:justify-between justify-evenly pt-4">
                  <span className="lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
                    $ {product.price}
                  </span>
                  <button
                    onClick={() => {
                      dispatch(onAdd(product));
                      toastr.success("Product added to cart");
                    }}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg sm:text-sm text-xs px-5 sm:py-2.5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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