import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toastr } from "react-redux-toastr";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { clearCart } from "../cartItemsSlice.js";

const deliveryValidationSchema = Yup.object().shape({
  name: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State/Province  is required"),
  postalCode: Yup.string().required("ZIP/Postal code is required"),

});

const paymentValidationSchema = Yup.object().shape({
  cartnumber: Yup.string().required("Credit Cart Number is required"),
  date: Yup.string().required("Month and year is required"),
  ccv: Yup.string().required("CVS/CVV is required"),
});

function OrderPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  //delivery ile payment method butonları arası gecisi tutar
  const [isToggle, setToggle] = useState(true);
  //delivery methoddaki radio butonlar icin
  const [{ firstIsChecked, secondIsChecked }, setChecked] = useState({
    firstIsChecked: true,
    secondIsChecked: false,
  });
  //payment methoddaki radio buttonlar icin
  const [{ visaChecked, masterChecked }, setCart] = useState({
    visaChecked: true,
    masterChecked: false,
  });

  const deliveryFormik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      // cartnumber: "",
      // date: "",
      // ccv: "",
    },
    validationSchema: deliveryValidationSchema,
    onSubmit: (values) => {
    
        console.log("Valid form data:", values);

     setToggle(false)
      toastr.success("Delivery Address saved!")
      // Diğer işlemleri burada gerçekleştirin
    },
  });

  const paymentFormik = useFormik({
    initialValues: {
      cartnumber: "",
      date: "",
      ccv: "",
    },
    validationSchema: paymentValidationSchema,
    onSubmit: async (values) => {
      toastr.success("Your order has been prepared!");
      dispatch(clearCart())
      navigate("/thankyou")
      console.log("Valid form data:", values);
    },
  });

  function updateCheckStates(e) {
    // console.log(e.target.value)
    if (e.target.value === "first") {
      setChecked((prevState) => ({
        ...prevState,
        firstIsChecked: true,
        secondIsChecked: false,
      }));
    } else if (e.target.value === "second") {
      setChecked((prevState) => ({
        ...prevState,
        firstIsChecked: false,
        secondIsChecked: true,
      }));
    }
  }

  function updateCart(e) {
    // console.log(e.target.value)
    if (e.target.value === "visa") {
      setCart((prevState) => ({
        ...prevState,
        visaChecked: true,
        masterChecked: false,
      }));
    } else if (e.target.value === "master") {
      setCart((prevState) => ({
        ...prevState,
        visaChecked: false,
        masterChecked: true,
      }));
    }
  }

  const deliveryPart = (
    <div className=" min-w-[65vw] h-auto p-10 bg-white rounded-[1em] shadow-2xl">
      <form
        onSubmit={deliveryFormik.handleSubmit}
        className="flex flex-col min-w-[60vw] place-self-center w-[30vw] gap-5"
      >
        <div className="flex lg:flex-row flex-col lg:justify-between gap-5 lg:gap-0 ">
          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] lg:min-w-[30em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="name"
              placeholder="First name"
              value={deliveryFormik.values.name}
              onChange={deliveryFormik.handleChange}
              onBlur={deliveryFormik.handleBlur}
            />
            {deliveryFormik.touched.name && deliveryFormik.errors.name && (
              <p className="text-red-500">{deliveryFormik.errors.name}</p>
            )}
          </div>
          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] lg:min-w-[30em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="lastname"
              placeholder="Last name"
              value={deliveryFormik.values.lastname}
              onChange={deliveryFormik.handleChange}
              onBlur={deliveryFormik.handleBlur}
            />
            {deliveryFormik.touched.lastname && deliveryFormik.errors.lastname && (
              <p className="text-red-500">{deliveryFormik.errors.lastname}</p>
            )}
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-between gap-5 lg:gap-0 ">
          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] lg:min-w-[30em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="email"
              placeholder="Email"
              value={deliveryFormik.values.email}
              onChange={deliveryFormik.handleChange}
              onBlur={deliveryFormik.handleBlur}
            />
            {deliveryFormik.touched.email && deliveryFormik.errors.email && (
              <p className="text-red-500">{deliveryFormik.errors.email}</p>
            )}
          </div>
          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] lg:min-w-[30em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="phone"
              placeholder="Phone"
              value={deliveryFormik.values.phone}
              onChange={deliveryFormik.handleChange}
              onBlur={deliveryFormik.handleBlur}
            />
            {deliveryFormik.touched.phone && deliveryFormik.errors.phone && (
              <p className="text-red-500">{deliveryFormik.errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <input
            className="border-2 lg:h-[3em] h-[2em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
            type="text"
            name="address"
            placeholder="Address"
            value={deliveryFormik.values.address}
            onChange={deliveryFormik.handleChange}
            onBlur={deliveryFormik.handleBlur}
          />
          {deliveryFormik.touched.address && deliveryFormik.errors.address && (
            <p className="text-red-500">{deliveryFormik.errors.address}</p>
          )}
        </div>

        <div className="flex lg:flex-row flex-col gap-3">
          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="city"
              placeholder="City"
              value={deliveryFormik.values.city}
              onChange={deliveryFormik.handleChange}
              onBlur={deliveryFormik.handleBlur}
            />
            {deliveryFormik.touched.city && deliveryFormik.errors.city && (
              <p className="text-red-500">{deliveryFormik.errors.city}</p>
            )}
          </div>

          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="state"
              placeholder="State/Province"
              value={deliveryFormik.values.state}
              onChange={deliveryFormik.handleChange}
              onBlur={deliveryFormik.handleBlur}
            />
            {deliveryFormik.touched.state && deliveryFormik.errors.state && (
              <p className="text-red-500">{deliveryFormik.errors.state}</p>
            )}
          </div>

          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="postalCode"
              placeholder="ZIP/Postal Code"
              value={deliveryFormik.values.postalCode}
              onChange={deliveryFormik.handleChange}
              onBlur={deliveryFormik.handleBlur}
            />
            {deliveryFormik.touched.postalCode && deliveryFormik.errors.postalCode && (
              <p className="text-red-500">{deliveryFormik.errors.postalCode}</p>
            )}
          </div>
        </div>

        <div className="gap-3 flex sm:flex-row flex-col">
          <div class="flex">
            <div class="flex items-center h-5">
              <input
                id="helper-radio"
                aria-describedby="helper-radio-text"
                type="radio"
                value="first"
                checked={firstIsChecked}
                onClick={(e) => updateCheckStates(e)}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div class="ml-2 text-sm">
              <label
                for="helper-radio"
                class="font-medium text-gray-900 dark:text-gray-300"
              >
                Standart shipping - $30
              </label>
              <p
                id="helper-radio-text"
                class="text-xs font-normal text-gray-500 dark:text-gray-300"
              >
                14 - 21 days
              </p>
            </div>
          </div>

          <div class="flex">
            <div class="flex items-center h-5">
              <input
                id="helper-radio"
                aria-describedby="helper-radio-text"
                type="radio"
                value="second"
                checked={secondIsChecked}
                onClick={(e) => updateCheckStates(e)}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div class="ml-2 text-sm">
              <label
                for="helper-radio"
                class="font-medium text-gray-900 dark:text-gray-300"
              >
                Express shipping - $100
              </label>
              <p
                id="helper-radio-text"
                class="text-xs font-normal text-gray-500 dark:text-gray-300"
              >
                7 - 10 days
              </p>
            </div>
          </div>
        </div>

        <input
          className="lg:text-2xl sm:text-xl text-sm font-bold tracking-wider bg-gradient-to-r from-purple-400 to-blue-600 text-transparent text-white py-4 lg:px-10 px-2 rounded tracking-wider lg:mt-6 mt-2 hover:cursor-pointer text-center"
         type="submit"
          value="Choose the payment method"
        />
      </form>
    </div>
  );

  const paymentPart = (
    <div className=" min-w-[65vw] h-auto p-10 bg-white rounded-[1em] shadow-2xl">
      <form
        onSubmit={paymentFormik.handleSubmit}
        className="flex flex-col min-w-[60vw] place-self-center w-[30vw] gap-5"
      >
        <div className="gap-6 flex sm:flex-row flex-col">
          <div class="flex">
            <div class="flex items-center h-5">
              <input
                id="helper-radio"
                aria-describedby="helper-radio-text"
                type="radio"
                value="visa"
                checked={visaChecked}
                onClick={(e) => updateCart(e)}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div class="ml-2 text-lg">
              <label
                for="helper-radio"
                class="font-medium text-gray-900 dark:text-gray-300"
              >
                VISA
              </label>
            </div>
          </div>

          <div class="flex">
            <div class="flex items-center h-5">
              <input
                id="helper-radio"
                aria-describedby="helper-radio-text"
                type="radio"
                value="master"
                checked={masterChecked}
                onClick={(e) => updateCart(e)}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div class="ml-2 text-lg">
              <label
                for="helper-radio"
                class="font-medium text-gray-900 dark:text-gray-300"
              >
                Mastercard
              </label>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-between gap-5 lg:gap-0 ">
          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] lg:min-w-[40em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="cartnumber"
              placeholder="Credit Cart Number (XXXX XXXX XXXX XXXX)"
              value={paymentFormik.values.cartnumber}
              onChange={paymentFormik.handleChange}
              onBlur={paymentFormik.handleBlur}
            />
            {paymentFormik.touched.cartnumber && paymentFormik.errors.cartnumber && (
              <p className="text-red-500">{paymentFormik.errors.cartnumber}</p>
            )}
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-between gap-5 lg:gap-0 ">
          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] lg:min-w-[30em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="date"
              placeholder="MM/YY"
              value={paymentFormik.values.date}
              onChange={paymentFormik.handleChange}
              onBlur={paymentFormik.handleBlur}
            />
            {paymentFormik.touched.date && paymentFormik.errors.date && (
              <p className="text-red-500">{paymentFormik.errors.date}</p>
            )}
          </div>
          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] lg:min-w-[30em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="ccv"
              placeholder="CVS/CVV"
              value={paymentFormik.values.ccv}
              onChange={paymentFormik.handleChange}
              onBlur={paymentFormik.handleBlur}
            />
            {paymentFormik.touched.ccv && paymentFormik.errors.ccv && (
              <p className="text-red-500">{paymentFormik.errors.ccv}</p>
            )}
          </div>
        </div>

        <input
          className="lg:text-2xl sm:text-xl text-sm font-bold tracking-wider bg-gradient-to-r from-purple-400 to-blue-600 text-transparent text-white py-4 lg:px-10 px-2 rounded tracking-wider lg:mt-6 mt-2 hover:cursor-pointer "
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );

  //delivery ve payment butonlarının gorunumunu etkileyen className
  const toggledButtonClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold lg:py-3 py-2 lg:px-[2.5em] px-8 rounded lg:text-xl text-sm tracking-widest" 
  const otherButtonClass = "hover:bg-blue-500 hover:text-white border-2 font-bold lg:py-3 py-2 lg:px-[2.5em] px-8 rounded lg:text-xl text-sm tracking-widest"

  return (
    <div className="font-montserrat items-center flex flex-col justify-center bg-light1 gap-1 pt-[8em] pb-[2em] lg:h-screen">
      <div className="gap-2 flex sm:flex-row flex-col bg-light3 p-2 rounded-[1em]">
        <button
          onClick={() => setToggle(true)}
          className={isToggle ? toggledButtonClass : otherButtonClass}
        >
          Delivery Address
        </button>
        <button
          onClick={() => setToggle(false)}
          className= {isToggle ? otherButtonClass : toggledButtonClass}
        >
          Payment Method
        </button>
      </div>
      {isToggle ? deliveryPart : paymentPart}
    </div>
  );
}

export default OrderPage;

// import React from 'react'
// import { cartSchema } from '../Validations/CardValidation';

// function OrderPage() {
//   const createCardSubmit = async (e) => {
//     e.preventDefault();
//     let formData = {
//       name: e.target[0].value,
//       email: e.target[1].value,
//       password: e.target[2].value
//     }
//     // console.log(formData)
//     const isValid = await cartSchema.isValid(formData)
//     console.log(isValid)
//   }

//   return (
//     <div className='mt-60'>
//       <form onSubmit={createCardSubmit}>
//         <input className='border-2 ' type="text" placeholder='First name' />
//         <input className='border-2 ' type="text" placeholder='email@email.com' />
//         <input className='border-2 ' type="text" placeholder='password' />
//         <input className='border-2 ' type="submit" placeholder='First name' />
//       </form>
//     </div>
//   )
// }

// export default OrderPage
