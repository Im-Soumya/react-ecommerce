import React from "react";
import Product from "./Product";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Adidas Men's Elate M Running Shoe",
      price: " 2,499.00",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/81CeFvY0M6L._UL1500_.jpg",
    },
    {
      id: 2,
      name: "Apple Macbook Pro",
      price: "84,990.00",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
    },
    {
      id: 3,
      name: `Samsung LC34J791WTWXXL 34" Wide 3 Curved Monitor 3440 x 1440`,
      price: "84,590.00",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/91-hWcNu2yL._SL1500_.jpg",
    },
    {
      id: 4,
      name: "Apple iPhone 13 (128GB) - Midnight",
      price: "74900",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61VuVU94RnL._SL1500_.jpg"
    },
    {
      id: 4,
      name: "Apple iPhone 13 (128GB) - Midnight",
      price: "74900",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61VuVU94RnL._SL1500_.jpg"
    },
    {
      id: 4,
      name: "Apple iPhone 13 (128GB) - Midnight",
      price: "74900",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61VuVU94RnL._SL1500_.jpg"
    },
    {
      id: 4,
      name: "Apple iPhone 13 (128GB) - Midnight",
      price: "74900",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61VuVU94RnL._SL1500_.jpg"
    },
  ]
  return (
    <div className="grid mt-5 lg:grid-cols-4 md:grid-cols-2 gap-9 px-7">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  )
}