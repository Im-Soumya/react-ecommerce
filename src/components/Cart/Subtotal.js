import React from "react";
import { useNavigate } from "react-router-dom";

export default function Subtotal({ cart }) {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-evenly mt-20 ml-5 w-96 h-56 p-4 bg-white rounded-lg shadow-xl">
      <p className="ml-3">Subtotal ({cart.total_items} items): {cart.subtotal.formatted_with_symbol}</p>
      <small className="ml-3">
        <input type="checkbox" />  This is a gift
      </small>
      <button
        onClick={() => navigate("/checkout")}
        className="w-full h-10 bg-teal-600 rounded-md text-white py-2 px-4 hover:bg-teal-700 transition duration-200"
      >
        Proceed to checkout
      </button>
    </div>
  )
}