import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductOfCartPage from "./ProductOfCartPage";
import { useSelector } from "react-redux";


const noProductState = (
  <div className="flex flex-col pt-20 items-center w-screen min-h-[100vh] justify-center font-montserrat bg-light2 gap-4">
    <div className="lg:text-2xl text-xl text-center lg:p-0 p-4">There is no product on your shopping bag yet</div>
    <div className="lg:text-xl text-center lg:p-0 p-4">Do you want to check out all products ?</div>
    <button className="lg:text-2xl font-bold tracking-wider bg-gradient-to-r from-purple-400 to-blue-600 text-transparent font-montserrat  hover:scale-110 duration-500 text-white py-4 lg:px-10 px-2 rounded tracking-wider lg:mt-6 mt-2">
              <Link to="/allproducts">Start to shop now</Link>
            </button>
  </div>
);

function CartPage() {
  //onLoad sayesinde sayfa ilk yüklendiğinde en üstten başlayacak.
  window.onload = function() {
    window.scrollTo(0, 0);
  }

  const navigate = useNavigate();
  const checkout = () => {
    navigate("/order")
  }

  const shopBagProducts = useSelector((state) => state.cartItems);
  const loginStatus = useSelector(state => state.loginStatus)

  // console.log(shopBagProducts.cartItems);


  const showAlert = () => {
    alert("Please login to continue")
  }
 

  return shopBagProducts.cartItem === 0 ? (
    noProductState
  ) : (
    <div className="flex lg:flex-row flex-col lg:pt-20 pt-32 items-center w-screen lg:min-h-[100vh] pb-10 lg:pb-0 justify-center font-montserrat bg-light2">
      <div className="flex lg:flex-row flex-col border rounded-xl p-4 lg:mt-20 sm:p-6 lg:p-8 dark:border-gray-700 shadow-lg bg-white lg:min-w-[90vw]">
        <div className="lg:basis-1/2">
          <div className="lg:text-3xl flex lg:flex-row flex-col lg:justify-between border-b-2 pb-10 font-bold text-center">
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
        <div className="lg:basis-1/2 items-center flex flex-col ">
          <div className="lg:text-3xl text-xl lg:mt-0 mt-6 border-b-2 lg:pb-10 lg:pl-40 lg:pr-40">
            Order Summary
          </div>
          <div className="pt-10 lg:gap-10 gap-5 flex flex-col">
            <div className="flex lg:flex-row flex-col lg:gap-10 gap-5">
              <div className="lg:text-xl lg:uppercase font-black">Total Items in Shopping Bag:</div>
              <div className="lg:text-xl font-bold text-center">{shopBagProducts.cartItem}</div>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-10 gap-3">
              <div className="lg:text-xl lg:uppercase font-black text-center">Total Price:</div>
              <div className="lg:text-xl text-center font-bold">$ {shopBagProducts.totalPrice}</div>
            </div>
          </div>
          <button onClick={loginStatus.loginStatus ? checkout : showAlert} className="lg:text-2xl sm:text-xl text-sm font-bold tracking-wider bg-gradient-to-r from-purple-400 to-blue-600 text-transparent font-montserrat  hover:scale-110 duration-500 text-white py-4 lg:px-10 px-2 rounded tracking-wider lg:mt-6 mt-4">
             Checkout
            </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
