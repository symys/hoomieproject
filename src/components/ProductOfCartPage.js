import React from "react";
import { useDispatch } from "react-redux";
import { onAdd, onDelete, onRemove } from "../cartItemsSlice.js";
import { toastr } from 'react-redux-toastr';

function ProductOfCartPage({ path, quantity, price, product }) {
  const dispatch = useDispatch();

  const totalPrice = price * quantity;

  return (
    <div className="p-4 font-montserrat">
      <div className="rounded-[1em] shadow-xl duration-200 hover:bg-light2">
      <div className="pt-2 pl-4 font-bold lg:text-lg">{product.title} - {product.name}</div>
        <div className=" flex flex-row pr-6">
          <img
            className="max-w-[10em] rounded-[1em] p-2"
            src={path}
            alt="product"
          />
          <div className="flex lg:flex-row flex-col lg:gap-[10em] gap-[1em] items-center">
            <div className="flex flex-row gap-2 items-center">
              <div className="lg:text-3xl text-2xl hover:cursor-pointer">
                <ion-icon
                  onClick={() => {dispatch(onDelete(product)); toastr.error('Product removed from cart')}}
                  name="remove-outline"
                ></ion-icon>
              </div>
              <div className="lg:text-3xl text-xl">{quantity}</div>
              <div className="lg:text-3xl text-2xl hover:cursor-pointer ">
                <ion-icon
                  onClick={() => {dispatch(onAdd(product)); toastr.success('Product added to cart'); }}
                  name="add-outline"
                ></ion-icon>
              </div>
            </div>
            <div className="lg:text-3xl text-xl flex items-center">$ {totalPrice}</div>
            <div className="lg:text-4xl text-2xl items-center flex  hover:cursor-pointer ">
              <ion-icon
                onClick={() => {dispatch(onRemove(product)); toastr.error('Product removed from cart')}}
                name="trash-outline"
              ></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOfCartPage;
