import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State/Province  is required"),
  postalCode: Yup.string().required("ZIP/Postal code is required"),
});

function OrderPage() {
  //delivery ile payment method butonları arası gecisi tutar
  const [isToggle, setToggle] = useState(true);

  const [{ firstIsChecked, secondIsChecked }, setChecked] = useState({
    firstIsChecked: true,
    secondIsChecked: false,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Valid form data:", values);
      // Diğer işlemleri burada gerçekleştirin
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
    }
    else if(e.target.value === "second"){
      setChecked((prevState) => ({
        ...prevState,
        firstIsChecked: false,
        secondIsChecked: true,
      }));
    }
  }

  const deliveryPart = (
    <div className=" min-w-[65vw] h-auto p-10 bg-white rounded-[1em] shadow-2xl">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col min-w-[60vw] place-self-center w-[30vw] gap-5"
      >
        <div className="flex lg:flex-row flex-col lg:justify-between gap-5 lg:gap-0 ">
          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] lg:min-w-[30em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="name"
              placeholder="First name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500">{formik.errors.name}</p>
            )}
          </div>
          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] lg:min-w-[30em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="lastname"
              placeholder="Last name"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <p className="text-red-500">{formik.errors.lastname}</p>
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
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500">{formik.errors.phone}</p>
            )}
          </div>
          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] lg:min-w-[30em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="phone"
              placeholder="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500">{formik.errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <input
            className="border-2 lg:h-[3em] h-[2em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
            type="text"
            name="address"
            placeholder="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address && (
            <p className="text-red-500">{formik.errors.address}</p>
          )}
        </div>

        <div className="flex lg:flex-row flex-col gap-3">
          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="city"
              placeholder="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.city && formik.errors.city && (
              <p className="text-red-500">{formik.errors.city}</p>
            )}
          </div>

          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="state"
              placeholder="State/Province"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.state && formik.errors.state && (
              <p className="text-red-500">{formik.errors.state}</p>
            )}
          </div>

          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="postalCode"
              placeholder="ZIP/Postal Code"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.postalCode && formik.errors.postalCode && (
              <p className="text-red-500">{formik.errors.postalCode}</p>
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
          className="lg:text-2xl sm:text-xl text-sm font-bold tracking-wider bg-gradient-to-r from-purple-400 to-blue-600 text-transparent text-white py-4 lg:px-10 px-2 rounded tracking-wider lg:mt-6 mt-2 hover:cursor-pointer "
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );

  const paymentPart = <div>hello</div>;

  return (
    <div className="font-montserrat items-center flex flex-col justify-center bg-light1 gap-1 pt-[8em] pb-[2em] lg:h-screen">
      <div className="gap-2 flex sm:flex-row flex-col bg-light3 p-2 rounded-[1em]">
        <button
          onClick={() => setToggle(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold lg:py-3 py-2 lg:px-[2.5em] px-8 rounded lg:text-xl text-sm tracking-widest"
        >
          Delivery Address
        </button>
        <button
          onClick={() => setToggle(false)}
          className="hover:bg-blue-500 hover:text-white border-2 font-bold lg:py-3 py-2 lg:px-[2.5em] px-8 rounded lg:text-xl text-sm tracking-widest"
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
