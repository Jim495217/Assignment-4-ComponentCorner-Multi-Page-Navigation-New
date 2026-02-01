import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

function App() {
  const products = [
    { id: 1, name: "Wireless Earbuds", price: 99.99, image: "https://placehold.co/600x400", description: "Noise cancelling earbuds." },
    { id: 2, name: "Bluetooth Speaker", price: 59.99, image: "https://placehold.co/600x400", description: "Portable speaker." },
    { id: 3, name: "Laptop", price: 599.99, image: "https://placehold.co/600x400", description: "Portable computer." },
    { id: 4, name: "Laptop Stand", price: 20.99, image: "https://placehold.co/600x400", description: "Ergonomic stand." },
    { id: 5, name: "Mechanical Keyboard", price: 50.99, image: "https://placehold.co/600x400", description: "Hot-swappable keyboard." },
    { id: 6, name: "Mouse", price: 49.99, image: "https://placehold.co/600x400", description: "Wireless mouse." }
  ];

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <BrowserRouter>
      <Header storeName="ComponentCorner" cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage products={products} addToCart={addToCart} />} />
        <Route path="/products/:id" element={<ProductDetailsPage products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} cartTotal={cartTotal} />} />
      </Routes>

      <Footer storeName="ComponentCorner" email="support@componentcorner.com" phone="(999) 432-5927" />
    </BrowserRouter>
  );
}

export default App;
