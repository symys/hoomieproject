import React from "react";

function CartPage() {
  return (
    <div className="flex lg:flex-row flex-col items-center h-screen justify-center font-montserrat">
      <div className="flex lg:flex-row flex-col border rounded-xl p-4 lg:mt-10 sm:p-6 lg:p-8 dark:border-gray-700 shadow-lg bg-white min-w-[90vw]">
        <div className="basis-1/2">
          <div className="text-3xl flex lg:flex-row flex-col justify-between border-b-2 pb-10 font-bold">
            <div>Shopping Bag</div>
            <div>2 Items</div>
          </div>
          <div>products</div>
        </div>
        <div className="basis-1/2 items-center flex flex-col ">
          <div className="text-3xl border-b-2 pb-10 pl-40 pr-40">Order Summary</div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
