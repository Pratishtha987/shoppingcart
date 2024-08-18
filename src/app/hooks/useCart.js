"use client";

import { createContext, useContext, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-hot-toast";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success("Product added to cart!");
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    toast.remove("Product removed from cart!");
  };

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };
  const start = () => {
    setCart((prevCart) => []);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        isInCart,
        getTotalAmount,
        start,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
