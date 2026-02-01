import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

function App() {
  // ✅ Product data
  const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 99.99,
      image: "https://placehold.co/600x400",
      description: "Comes with noise cancellation and high sound quality.",
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      price: 59.99,
      image: "https://placehold.co/600x400",
      description: "A small, portable speaker that can satisfy your music needs.",
    },
    {
      id: 3,
      name: "Laptop",
      price: 599.99,
      image: "https://placehold.co/600x400",
      description: "A portable, sleek device ready for work and play.",
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 20.99,
      image: "https://placehold.co/600x400",
      description: "Hard-plastic adjustable laptop stand.",
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: 50.99,
      image: "https://placehold.co/600x400",
      description: "A mechanical keyboard that has hotswappable switches!",
    },
    {
      id: 6,
      name: "Mouse",
      price: 49.99,
      image: "https://placehold.co/600x400",
      description: "A quick, plug-and-play wireless mouse.",
    },
  ];

  // ✅ Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // ✅ Remove from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // ✅ Cart total
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <BrowserRouter>
      <Header storeName="ComponentCorner" cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              cartTotal={cartTotal}
            />
          }
        />
      </Routes>

      <Footer
        storeName="ComponentCorner"
        email="support@componentcorner.com"
        phone="(999) 432-5927"
      />
    </BrowserRouter>
  );
}

export default App;
