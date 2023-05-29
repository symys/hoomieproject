import React from "react";
import { Link } from "react-router-dom";
import ProductOfCartPage from "./ProductOfCartPage";
import { useSelector } from "react-redux";
// import chair from "../images/lowimages/blackPlasticChair.jpg"

// const productSample ={image:chair, quantity:2, price:"$100"}
const noProductState = (
  <div className="flex flex-col pt-20 items-center w-screen min-h-[100vh] justify-center font-montserrat bg-light2 gap-4">
    <div className="text-2xl">There is no product on your shopping bag yet</div>
    <div className="text-xl">Do you want to check out all products ?</div>
    <button className="lg:text-2xl text-xl font-bold tracking-wider bg-gradient-to-r from-purple-400 to-blue-600 text-transparent font-montserrat  hover:scale-110 duration-500 text-white py-4 lg:px-10 px-2 rounded tracking-wider lg:mt-6 mt-2">
              <Link to="/allproducts">Start to shop now</Link>
            </button>
  </div>
);

function CartPage() {
  //onLoad sayesinde sayfa ilk yüklendiğin en üstten başlayacak.
  window.onload = function() {
    window.scrollTo(0, 0);
  }

  const shopBagProducts = useSelector((state) => state.cartItems);
  console.log(shopBagProducts.cartItems);
  return shopBagProducts.cartItem === 0 ? (
    noProductState
  ) : (
    <div className="flex lg:flex-row flex-col pt-20 items-center w-screen min-h-[100vh] justify-center font-montserrat bg-light2">
      <div className="flex lg:flex-row flex-col border rounded-xl p-4 lg:mt-20 sm:p-6 lg:p-8 dark:border-gray-700 shadow-lg bg-white min-w-[90vw]">
        <div className="basis-1/2">
          <div className="text-3xl flex lg:flex-row flex-col justify-between border-b-2 pb-10 font-bold">
            <div>Shopping Bag</div>
            <div>{shopBagProducts.cartItem} Products</div>
          </div>
          <div>
            {shopBagProducts.cartItems.map((product) => (
              <ProductOfCartPage
                product={product}
                path={product.img}
                quantity={product.orderQuantity}
                price={product.price}
              />
            ))}
            {/* <ProductOfCartPage image={productSample.image} quantity={productSample.quantity} price={productSample.price}/>
         <ProductOfCartPage image={productSample.image} quantity={productSample.quantity} price={productSample.price}/> */}
          </div>
        </div>
        <div className="basis-1/2 items-center flex flex-col ">
          <div className="text-3xl border-b-2 pb-10 pl-40 pr-40">
            Order Summary
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
