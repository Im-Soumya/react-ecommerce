import React from "react";

export default function CartItem({ item, removeItem }) {
  return (
    <div className="flex w-full my-5 bg-white shadow-lg rounded-lg mt-3 p-4 mr-2">
      <img
        className="h-44 w-44 object-contain mb-3 ml-2 mr-3"
        src={item.image.url}
      />

      <div className="flex flex-col flex-grow pl-5 mr-2">
        <div className="h-24 mb-4">
          <p>{item.name}</p>
          <p className="mt-2">
            <small>₹</small>
            <strong>{item.line_total.formatted_with_symbol}</strong>
          </p>
        </div>

        <div className="w-full h-full mt-7 flex items-end justify-center">
          <button
            onClick={() => removeItem(item.id)}
            className=" w-3/5 h-10 bg-slate-600 rounded-md text-white py-2 px-4 hover:bg-slate-700 transition duration-200"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  )
}