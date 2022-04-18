import React from "react";
import Product from "./Product";

export default function Products({ products, addItem }) {

  return (
    <>
      {products ? (
        <div className="grid mt-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-9 px-7">
          {products.map((product, index) => (
            <Product key={index} product={product} addItem={addItem} />
          ))}
        </div>
      ) : (<></>)}
    </>
  )
}