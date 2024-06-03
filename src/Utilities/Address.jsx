import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateAddressDetails } from '../Redux Store/addressStore';
import axios from 'axios';
// import { X } from 'lucide-react'
export function CheckoutTwo({setShowAddress,total}) {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

//   const handleSubmit = (e,) => {
//     e.preventDefault();
//   const isFormDataEmpty = Object.values(formData).some(value => value === '');

//   if (!isFormDataEmpty) {
//     dispatch(updateAddressDetails(formData));
//     console.log(formData);
//   } else {
//     console.log('Form data fields are empty. Not dispatching action.');
//   }
// }

const checkoutHandler = async (amount) => {
  try {
    // Fetch key
    const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");

    // Perform checkout
    const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", { amount });

    // Configure options for Razorpay
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Anubrata Chanda",
      description: "Tutorial of RazorPay",
      image: "https://avatars.githubusercontent.com/u/143244849?v=4",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Anubrata Chanda",
        email: "anubrata@example.com",
        contact: "9999999999"
      },
      notes: {
        "address": "Razorpay Corporate Office"
      },
      theme: {
        "color": "#121212"
      }
    };

    // Create and open Razorpay
    const razor = new window.Razorpay(options);
    razor.open();
  } catch (error) {
    console.error("Error during checkout:", error);
    // Handle error appropriately
  }
};

const handleSubmit = (e,) => {
  e.preventDefault();
const isFormDataEmpty = Object.values(formData).some(value => value === '');

if (!isFormDataEmpty) {
  dispatch(updateAddressDetails(formData));
  console.log(formData);
  checkoutHandler(total)
} else {
  console.log('Form data fields are empty. Not dispatching action.');
}
}

  return (
    <div className="mx-auto my-4 max-w-2xl md:my-6 bg-slate-200">
      <div className="overflow-hidden  rounded-xl shadow">
        <div className="grid grid-cols-1 md:grid-cols-1">
          {/* Contact Info */}
          <div className="px-5 py-6 text-gray-900 md:px-8">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6">
                  <form>
                    <div className="mx-auto max-w-3xl  ml-0 px-4 lg:max-w-2xl lg:px-0 lg:ml-10">
                      <div>
                        <h3
                          id="contact-info-heading"
                          className="text-lg font-semibold text-gray-900"
                        >
                          Contact information
                        </h3>

                        <div className="mt-4 w-full">
                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="name"
                          >
                            Full Name
                          </label>
                          <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your name"
                            
                            id="name"
                            name='name'
                            onChange={handleChange}
                          ></input>
                        </div>
                      </div>
                
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900">Shipping address</h3>

                        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Address
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="address"
                                name="address"
                                autoComplete="street-address"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                onChange={handleChange}
                             />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              City
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="city"
                                name="city"
                                autoComplete="address-level2"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="region"
                              className="block text-sm font-medium text-gray-700"
                            >
                              State / Province
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="region"
                                name="state"
                                autoComplete="address-level1"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="postal-code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Postal code
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="postal-code"
                                name="postalCode"
                                autoComplete="postal-code"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-8" />
                      <div className=' w-full flex justify-between'>
                      <div className="-mt-8 flex justify-end border-t border-gray-200 pt-3">
                        <button
                          type="button"
                          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                          onClick={()=>setShowAddress(true)}
                        >
                          Back
                        </button>
                      </div>
                      
                      <div className="-mt-8 flex justify-end border-t border-gray-200 pt-3">
                        <button
                          type="button"
                          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                          onClick={handleSubmit}
                        >
                          Make payment
                        </button>
                      </div>
                      </div>
                      
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Product List */}
          
        </div>
      </div>
    </div>
  )
}
