import React from "react";

export default function Subtotal({ cart }) {
  return (
    <div className="flex flex-col justify-evenly mt-20 ml-5 w-96 h-56 p-4 bg-white rounded-lg">
      <p className="ml-3">Subtotal ({cart.total_items} items): {cart.subtotal.formatted_with_symbol}</p>
      <small className="ml-3">
        <input type="checkbox" />This is a gift
      </small>
      <button
        className="w-full h-10 bg-teal-600 rounded-md text-white py-2 px-4 hover:bg-teal-700 transition duration-200"
      >
        Proceed to checkout
      </button>
    </div>
  )
}