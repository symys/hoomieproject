import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAdd, handleHeartClick} from "../cartItemsSlice.js";
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

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Arama terimi:", searchTerm);
    // Burada arama terimini kullanarak yapmak istediğiniz işlemleri gerçekleştirebilirsiniz
    // const filterProduct = 
  };

 
  const setHeartClicked = (productObj, index) => {
    // const newHoverStates = [...isHeartClicked];
    // newHoverStates[index] = !(newHoverStates[index]);
    // setHeartClickStatus(newHoverStates);
    dispatch(handleHeartClick(productObj));
    // console.log("hello product from products component: " + JSON.stringify(productObj));
    !(products.allproducts[index].isHeartClicked)
      ? toastr.info("Product added to favorites")
      : toastr.warning("Product removed from favorites");
  };

  return (
    <div className="flex flex-col pt-[10em] p-[5em] bg-light2">
       <div className="max-w-xs mx-auto">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Ara
        </button>
      </form>
    </div>
      <div className="flex sm:flex-row flex-col flex-wrap lg:gap-8 gap-4 lg:mt-10 mt-4 font-montserrat">
        {products.allproducts.map((product, index) => (
          <div key={index}>
            <div class=" hover:cursor-pointer flex flex-col w-full lg:max-w-[20em] max-w-[15em] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="place-self-center rounded-lg relative">
              <Link state={product} to="/product">
                <img
                  class="p-8 object-cover object-center sm:w-[20em] w-[14em] sm:h-[20em] h-[14em] "
                  src={product.img}
                  alt={product.title}
                />
              </Link>
              <div
                key={product.id}
                className="border-2 border-red-500 bg-white rounded-full flex items-center justify-center sm:h-10 sm:w-10 h-8 w-8 text-red-500  sm:text-3xl text-xl absolute top-10 text-center right-10"
           
                onClick={() =>
                  setHeartClicked({
                    id: product.id,
                    orderQuantity: product.orderQuantity,
                    name: product.name,
                    img: product.img,
                    title: product.title,
                    price: product.price,
                    hoverStates: product.hoverStates,
                    isHeartClicked: product.isHeartClicked,
                    heartClass: product.heartClass,
                  }, index)
                }
              >
                {product.isHeartClicked ? <ion-icon name="heart"></ion-icon> : <ion-icon name="heart-outline"></ion-icon>}
              </div>
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
