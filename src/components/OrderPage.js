import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State/Province  is required"),
  postalCode: Yup.string().required("ZIP/Postal code is required"),
});

function OrderPage() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
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

  return (
    <div className="font-montserrat items-center flex flex-col justify-center h-screen bg-light1 gap-1">
      <div className="gap-2 flex lg:flex-row flex-col bg-light3 p-2 rounded-[1em]">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold lg:py-3 py-2 lg:px-[2.5em] px-8 rounded lg:text-xl text-sm tracking-widest">
          Delivery Address
        </button>
        <button className="hover:bg-blue-500 hover:text-white border-2 font-bold lg:py-3 py-2 lg:px-[2.5em] px-8 rounded lg:text-xl text-sm tracking-widest">
          Payment Method
        </button>
      </div>
      <div className=" min-w-[80vw] h-auto p-10 bg-white rounded-[1em] shadow-2xl">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col min-w-[60vw] justify-center w-[30vw] gap-5"
        >
          <div className="flex lg:flex-row flex-col justify-between">
            <div>
              <input
                className="border-2 lg:h-[3em] h-[2em] min-w-[30em] placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
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
                className="border-2 lg:h-[3em] h-[2em] min-w-[30em]  placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
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

          <div>
            <input
              className="border-2 lg:h-[3em] h-[2em] w-full placeholder:tracking-wider placeholder:pl-4 placeholder:text-sm"
              type="text"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
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

          <input
            className="lg:text-2xl sm:text-xl text-sm font-bold tracking-wider bg-gradient-to-r from-purple-400 to-blue-600 text-transparent text-white py-4 lg:px-10 px-2 rounded tracking-wider lg:mt-6 mt-2 hover:cursor-pointer "
            type="submit"
            value="Submit"
          />
        </form>
      </div>
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
