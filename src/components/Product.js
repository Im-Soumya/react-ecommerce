import React from "react";

export default function Product({ product, addItem }) {
  return (
    <>
      {
        product ? (
          <div className="flex flex-col items-start justify-start bg-white shadow-lg rounded-lg mt-3 p-4">
            <div className=" h-24 mb-4">
              <p className="text-md">{product.name}</p>
              <p className="mt-2 text-lg">
                <small>$</small>
                <strong>{product.price.formatted}</strong>
              </p>
            </div>
            <img
              className=" max-h-48 w-full object-contain mb-3"
              src={product.image.url}
            />
            <div className="w-full h-full mt-7 flex items-end justify-center">
              <button
                onClick={() => addItem(product.id, 1)}
                className="w-full h-10 font-semibold text-md bg-slate-600 rounded-md text-white py-2 px-4 hover:bg-slate-700 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ) : (<></>)
      }
    </>
  )
}