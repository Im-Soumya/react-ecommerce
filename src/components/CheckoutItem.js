import React from "react";

export default function CheckoutItem({ item }) {
  return (
    <div>
      {
        item ? (
          <>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg">
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
              </div>
            </div>
          </>
        ) : (
          <></>
        )
      }
    </div>
  )
}