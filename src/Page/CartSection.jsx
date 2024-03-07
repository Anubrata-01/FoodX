import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utilities/Firebase";
import { Trash } from "lucide-react";
import { CDN_url } from "../constant";
// import { ShimmerEffectForResWithFoodDelivery } from "../Utilities/ShimmerEffectForResWithFoodDelivery"; // Assuming ShimmerEffectForResWithFoodDelivery is exported from Utilities
import { removeUserDetails, setUserDetails } from "../Redux Store/restaurantSlice";
import { removeItem, updateQuantity } from "../Redux Store/cartSlice";

export const CartSection = ({ Navbar }) => {
  const [sign, setSign] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName } = user;
        dispatch(setUserDetails({ email, uid, displayName }));
        setSign(false);
      } else {
        dispatch(removeUserDetails());
        setSign(true);
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const FoodItems = useSelector((store) => store?.cart?.cartStore) || [];
  const total = useSelector((store) => store?.cart?.cartValue) || 0;

  const handlePlus = useCallback(
    (itemId, quantity) => {
      if (quantity >= 1) {
        dispatch(updateQuantity({ itemId, quantity }));
      }
    },
    []
  );

  const handleMinus = useCallback(
    (itemId, quantity) => {
      if (quantity > 1) {
        dispatch(updateQuantity({ itemId, quantity }));
      }
    },
    []
  );

  if (!FoodItems) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className="mx-auto mt-8 max-w-4xl px-2 lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <form className="mt-5 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="rounded-lg bg-white lg:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              <ul className="divide-gray-200">
                {FoodItems.map((product) => (
                  <li key={product.id} className="flex py-6 sm:py-6">
                    <div className="flex-shrink-0">
                      <img
                        src={CDN_url + product.imageId}
                        alt={product.name}
                        className="sm:h-30 sm:w-28 h-24 w-24 rounded-md object-cover"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between mt-2 w-60">
                            <h3 className="text-sm">
                              <span className="font-semibold text-black">
                                {product.name}
                              </span>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-sm text-gray-500">
                              {product?.catrgory}
                            </p>
                          </div>
                          <div className="mt-1 flex items-end">
                            <p className="text-sm font-medium text-gray-900">
                              &nbsp;&nbsp;
                              {product.price
                                ? Math.floor(product?.price / 100)
                                : Math.floor(product?.defaultPrice / 100)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 flex flex-col gap-9">
                      <div className="min-w-24 flex">
                        <button
                          type="button"
                          className="h-7 w-7"
                          onClick={() =>
                            handleMinus(product?.id, product?.cartQuantity - 1)
                          }
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="mx-1 h-7 w-9 rounded-md border text-center"
                          value={product?.cartQuantity}
                          readOnly
                        />
                        <button
                          type="button"
                          className="flex h-7 w-7 items-center justify-center"
                          onClick={() =>
                            handlePlus(product?.id, product?.cartQuantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <div className="ml-6 flex text-sm">
                        <button
                          type="button"
                          className="flex items-center space-x-1 px-2 py-1 pl-0"
                          onClick={() => dispatch(removeItem(product.id))}
                        >
                          <Trash size={12} className="text-red-500" />
                          <span className="text-xs font-medium text-red-500">
                            Remove
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2
                id="summary-heading"
                className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
              >
                Price Details
              </h2>
              <div>
                <dl className="space-y-1 px-2 py-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-800">
                      Price ({FoodItems.length} item)
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ₹ {Math.floor(total / 100)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <dt className="flex items-center text-sm text-gray-800">
                      <span>Discount</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">
                      - ₹ 3,431
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="flex text-sm text-gray-800">
                      <span>Delivery Charges</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">
                      Free
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-y border-dashed py-4">
                    <dt className="text-base font-medium text-gray-900">
                      Total Amount
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ₹ {Math.floor(total / 100)}
                    </dd>
                  </div>
                </dl>
                <div className="px-2 pb-4 font-medium text-green-700">
                  You will save ₹ 3,431 on this order
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};
