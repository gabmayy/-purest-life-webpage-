import React, { useState } from "react";
import { NavBar } from "./NavBar.jsx";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/cart/Cart.jsx";
import { Shop } from "./pages/shop/Shop.jsx";
import { ShopContextProvider } from "./context/ShopContext.jsx";

export function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
