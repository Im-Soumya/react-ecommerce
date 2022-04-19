import React from "react";
import CheckoutItem from "./CheckoutItem";

export default function Review({ checkoutToken }) {
  return (
    <div>
      {
        checkoutToken ? (
          <div>
            <h2 className="flex items-start text-3xl mx-7 mt-5">Order summary:</h2>
            <div className="grid mt-5 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-9 px-7">
              {checkoutToken.live.line_items?.map((item, index) => (
                <CheckoutItem key={index} item={item} />
              ))}
            </div>

          </div>
        ) : (<></>)
      }
    </div>
  )
}