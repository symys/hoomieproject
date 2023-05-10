import React from "react";
import { Link} from 'react-router-dom';

const thanksProps="thank you"

function Contact() {
  


  return (
    <div className="lg:mt-10 mt-40 items-center justify-center flex flex-col h-screen font-montserrat gap-4 p-2">
      <div className="lg:text-5xl text-3xl font-bold">Contact us</div>
      <div className="lg:text-3xl text-xl font-medium">
        We'd love to talk about how we can help you.
      </div>
      <div className="border rounded-xl p-4 lg:mt-10 sm:p-6 lg:p-8 dark:border-gray-700 shadow-lg">
        <div className="text-left lg:text-xl text-base font-medium">Fill in the form</div>
        <div className="gap-6 flex flex-col">
          <div className="flex lg:flex-row flex-col gap-6">
            <input
              type="text"
              name="hs-firstname-contacts-1"
              placeholder="First Name"
              id="hs-firstname-contacts-1"
              className="py-3 px-4 block w-full border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            />
            <input
              type="text"
              name="hs-lastname-contacts-1"
              placeholder="Last Name"
              id="hs-lastname-contacts-1"
              className="py-3 px-4 block w-full border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            />
          </div>
          <div className="flex lg:flex-row flex-col gap-6 ">
            <input
              type="text"
              name="hs-email-contacts-1"
              placeholder="Email"
              id="hs-email-contacts-1"
              className="py-3 px-4 block w-full border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            />
            <input
              type="text"
              name="hs-phone-contacts-1"
              placeholder="Phone"
              id="hs-lastname-contacts-1"
              className="py-3 px-4 block w-full border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            />
          </div>
          <div>
          <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Please write your message here"></textarea>
          </div>
          <div className="self-center">
          <Link to="/thankyou" state={thanksProps}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold lg:py-3 py-2 lg:px-20 px-8 rounded lg:text-xl text-sm tracking-widest">
          Submit
        </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
