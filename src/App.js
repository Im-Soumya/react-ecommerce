import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="bg-slate-200">
      <Navbar />
      {/* <Products /> */}
      <Cart />
    </div>
  )
}

export default App;