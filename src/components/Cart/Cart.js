import React from "react";
import CartItem from "./CartItem";
import Subtotal from "./Subtotal";
import { Link } from "react-router-dom";

export default function Cart({ cart, removeItem }) {

  return (
    <>
      {
        cart ? (
          <div>
            {
              cart.total_items === 0 ? (
                <div className="text-3xl text-center mt-10">
                  <h2>Your shopping cart looks empty, </h2>
                  <Link to="/">
                    <span className="text-blue-700 hover:border-b-2 border-blue-700">start adding some!</span>
                  </Link>
                </div>
              ) : (
                <>
                  <div className="flex p-5 bg-gray-200 w-full h-max">
                    <div className="w-full">
                      {/* <img 
                      className="w-full mb-3"
                      src="" alt=""
                    /> */}
                      <h3 className="text-lg font-semibold">Hello user!</h3>
                      <h2 className="mr-3 pb-3 font-semibold text-2xl border-b-2 border-gray-900">Your shopping cart...</h2>
                      {cart.line_items?.map((item, index) => (
                        <CartItem key={index} item={item} removeItem={removeItem} />
                      ))}
                    </div>

                    <div>
                      <Subtotal cart={cart} />
                    </div>
                  </div>
                </>
              )
            }
          </div>
        ) : (<></>)
      }
    </>
  )
}