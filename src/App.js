import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { commerce } from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState("")

  const getProducts = async () => {
    const response = await commerce.products.list()
    setProducts(response.data)
  }

  const getCart = async () => {
    const response = await commerce.cart.retrieve()
    setCart(response)
  }

  const addItem = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity)
    setCart(response.cart)
  }

  const removeItem = async (productId) => {
    const response = await commerce.cart.remove(productId)
    setCart(response.cart)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()
    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      refreshCart()
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
      setOrder(incomingOrder)
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  useEffect(() => {
    getProducts()
    getCart()
  }, [])

  return (
    <Router>
      <div className="bg-slate-200">
        <Routes>
          <Route path="/checkout" element={<><Navbar cart={cart} /><Checkout order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} cart={cart} /></>} />
          <Route path="/cart" element={<><Navbar cart={cart} /><Cart removeItem={removeItem} cart={cart} /></>} />
          <Route path="/" element={<><Navbar cart={cart} /><Products addItem={addItem} products={products} /></>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;