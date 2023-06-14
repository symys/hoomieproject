import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleHeartClick } from "../cartItemsSlice.js";
import { toastr } from "react-redux-toastr";

function Favorites() {
  const favoriteProducts = useSelector((state) => state.cartItems);
  console.log(JSON.stringify(favoriteProducts.favorites));

  const dispatch = useDispatch();

  const noFavoriteState = (
    <div className="flex flex-col pt-20 items-center w-screen min-h-[100vh] justify-center font-montserrat bg-light2 gap-4">
      <div className="lg:text-2xl text-xl text-center lg:p-0 p-4">
        There is no favorite product on your list yet
      </div>
      <div className="lg:text-xl text-center lg:p-0 p-4">
        Do you want to check out all products ?
      </div>
      <button className="lg:text-2xl font-bold tracking-wider bg-gradient-to-r from-purple-400 to-blue-600 text-transparent font-montserrat  hover:scale-110 duration-500 text-white py-4 lg:px-10 px-2 rounded tracking-wider lg:mt-6 mt-2">
        <Link to="/allproducts">Check out now</Link>
      </button>
    </div>
  );
  const favoriteStatusHolder = favoriteProducts.isThereFavorites

  return favoriteStatusHolder === false ? (
    noFavoriteState
  ) : (
    <div className="flex flex-col pt-20 items-center w-screen min-h-[100vh] justify-center font-montserrat bg-light2 gap-4">
      <div className="flex lg:flex-row flex-col border rounded-xl p-4 lg:mt-20 sm:p-6 lg:p-8 dark:border-gray-700 shadow-lg bg-white lg:min-w-[90vw]">
        <div className="lg:basis-1/2">
          <div className="lg:text-3xl flex lg:flex-row flex-col lg:justify-between border-b-2 pb-10 font-bold text-center">
            <div>Favorites</div>
            <div> Products</div>
          </div>
          <div>
            {favoriteProducts.favorites.map((product) => (
              <div className="p-4 font-montserrat">
                <div className="rounded-[1em] shadow-xl duration-200 hover:bg-light2">
                  <div className="pt-2 pl-4 font-bold lg:text-lg">
                    {product.title} - {product.name}
                  </div>
                  <div className=" flex flex-row pr-6">
                    <img
                      className="max-w-[10em] rounded-[1em] p-2"
                      src={product.img}
                      alt="product"
                    />
                    <div className="flex lg:flex-row flex-col lg:gap-[10em] gap-[1em] items-center">
                      <div className="lg:text-4xl text-2xl items-center flex  hover:cursor-pointer ">
                        <ion-icon
                          onClick={() => {
                            dispatch(handleHeartClick(product));
                            toastr.warning("Product removed from favorites");
                          }}
                          name="trash-outline"
                        ></ion-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <ProductOfCartPage image={productSample.image} quantity={productSample.quantity} price={productSample.price}/>
         <ProductOfCartPage image={productSample.image} quantity={productSample.quantity} price={productSample.price}/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
