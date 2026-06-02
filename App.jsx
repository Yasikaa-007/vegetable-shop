import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./react/Redux/Home";
import Product from "./react/Redux/Product";
import CartPage from "./react/Redux/CartPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <nav className="navbar">
          <Link to="/">Home</Link>

          <Link to="/product">Products</Link>

          <Link to="/cart">Cart</Link>
        </nav>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/product"
            element={<Product />}
          />

          <Route
            path="/cart"
            element={<CartPage />}
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;