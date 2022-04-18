import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMall from "@mui/icons-material/LocalMall";

export default function Navbar({ cart }) {
  return (
    <div
      className="flex items-center bg-gray-800 h-16 top-0 z-100"
    >
      <Link to="/">
        <div className="flex">
          <LocalMall className="w-24 ml-5 mr-2 text-white" />
          <p className="logo text-white text-lg font-semibold mr-5">the.Commerce</p>
        </div>
      </Link>
      <div className="flex flex-1 items-center rounded-3xl mr-2">
        <input
          type="text"
          className="h-4 w-full p-5 border-0 rounded-l-md"
        />
        <div className="w-12 h-10 bg-slate-500 cursor-pointer rounded-r-md text-center hover:bg-slate-600 transition duration-200">
          <SearchIcon
            className="text-white mt-2"
          />
        </div>
      </div>

      <div className="flex justify-evenly">
        <div className="flex flex-col mx-3 text-white">
          <span className="text-xs">Hello User</span>
          <span className="text-md font-semibold">Sign out</span>
        </div>

        <Link to="/orders">
          <div className="flex flex-col mx-3 text-white">
            <span className="text-xs">Returns</span>
            <span className="text-md font-semibold">Orders</span>
          </div>
        </Link>

        <Link to="/cart">
          <div>
            <ShoppingCartIcon className="text-white" />
            <span className="text-white mr-4 ml-1">{cart.total_items}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}