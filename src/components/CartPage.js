import React from "react";
import ProductOfCartPage from "./ProductOfCartPage";
import { useSelector } from "react-redux";
// import chair from "../images/lowimages/blackPlasticChair.jpg"

// const productSample ={image:chair, quantity:2, price:"$100"}

function CartPage() {
  const shopBagProducts = useSelector(state => state.cartItems)
  console.log(shopBagProducts.cartItems)
  return (
    <div className="flex lg:flex-row flex-col items-center h-screen justify-center font-montserrat bg-light2">
      <div className="flex lg:flex-row flex-col border rounded-xl p-4 lg:mt-10 sm:p-6 lg:p-8 dark:border-gray-700 shadow-lg bg-white min-w-[90vw]">
        <div className="basis-1/2">
          <div className="text-3xl flex lg:flex-row flex-col justify-between border-b-2 pb-10 font-bold">
            <div>Shopping Bag</div>
            <div>{shopBagProducts.cartItem} Products</div>
          </div>
          <div>
            {shopBagProducts.cartItems.map(product => <ProductOfCartPage product={product} path={product.img} quantity={product.orderQuantity} price={product.price}/>)}
            {/* <ProductOfCartPage image={productSample.image} quantity={productSample.quantity} price={productSample.price}/>
            <ProductOfCartPage image={productSample.image} quantity={productSample.quantity} price={productSample.price}/> */}
          </div>
        </div>
        <div className="basis-1/2 items-center flex flex-col ">
          <div className="text-3xl border-b-2 pb-10 pl-40 pr-40">Order Summary</div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
