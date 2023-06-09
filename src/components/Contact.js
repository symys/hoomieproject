import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toastr } from "react-redux-toastr";
import {useNavigate} from "react-router-dom"

const thanksProps="Thank you, we will get back to you as soon as possible"

const contactValidationSchema = Yup.object().shape({
  name: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  usermessage: Yup.string().required("Please write your message here")

});

function Contact() {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      usermessage: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values) => {
      console.log("Valid form data:", values);
      toastr.success("Your message is saved!")
      navigate("/thankyou", {state:thanksProps})
    },
  });
  
  return (
    <div className="lg:mt-10 pt-40 pb-40 items-center justify-center flex flex-col font-montserrat gap-4 p-2 bg-light2">
      <div className="lg:text-5xl text-3xl font-bold">Contact us</div>
      <div className="lg:text-3xl text-xl font-medium">
        We'd love to talk about how we can help you.
      </div>
      <div className="border rounded-xl p-4 lg:mt-10 sm:p-6 lg:p-8 dark:border-gray-700 shadow-lg bg-white">
        {/* <div className="text-left lg:text-xl text-base font-medium">Fill in the form</div> */}
        <form
        onSubmit={formik.handleSubmit}>
        <div className="gap-6 flex flex-col">
          <div className="flex lg:flex-row flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="First name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
             
              id="hs-firstname-contacts-1"
              className="py-3 px-4 block w-full border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            />{formik.touched.name && formik.errors.name && (
              <p className="text-red-500">{formik.errors.name}</p>
            )}
            <input
              type="text"
              name="lastname"
              placeholder="Last name"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="hs-lastname-contacts-1"
              className="py-3 px-4 block w-full border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            />{formik.touched.lastname && formik.errors.lastname && (
              <p className="text-red-500">{formik.errors.lastname}</p>
            )}
          </div>
          <div className="flex lg:flex-row flex-col gap-6 ">
          <input
              className="py-3 px-4 block w-full border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
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
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="hs-lastname-contacts-1"
              className="py-3 px-4 block w-full border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            />{formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500">{formik.errors.phone}</p>
            )}
          </div>
          <div>
          <textarea 
          type="text"
          name="usermessage"
       
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="hs-about-contacts-1" rows="4" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Please write your message here"></textarea>{formik.touched.usermessage && formik.errors.usermessage && (
            <p className="text-red-500">{formik.errors.usermessage}</p>
          )}
          </div>
          <div className="self-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold lg:py-3 py-2 lg:px-20 px-8 rounded lg:text-xl text-sm tracking-widest">
          Submit
          </button>
          </div>
        </div></form>
      </div>
    </div>
  );
} 

export default Contact;
