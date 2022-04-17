import React from "react";

export default function CartItem({ product }) {
  return (
    <div className="flex my-5 bg-white shadow-lg rounded-lg mt-3 p-4">
      <img
        className="h-44 w-44 object-contain mb-3"
        src={product.image}
      />

      <div className="flex flex-col flex-grow pl-5">
        <div className="h-24 mb-4">
          <p>{product.name}</p>
          <p className="mt-2">
            <small>₹</small>
            <strong>{product.price}</strong>
          </p>
          <div className="flex">
            {Array(product.rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))
            }
          </div>
        </div>

        <div className="w-full h-full mt-7 flex items-end justify-center">
          <button className="w-full h-10 bg-slate-600 rounded-md text-white py-2 px-4 hover:bg-slate-700 transition duration-200">Remove from Cart</button>
        </div>
      </div>
    </div>
  )
}