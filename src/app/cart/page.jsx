"use client";
import React, { useState } from "react";
import Link from "next/link";
import CartItem from "../components/CartItem";
import Offer from "../components/Offer";
import { useCart } from "../hooks/useCart";
import { Fireworks } from "@fireworks-js/react";
import { CheckCircle } from "lucide-react";

const Cart = () => {
  const { cart, getTotalAmount } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    setOrderPlaced(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      {orderPlaced ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
            <Fireworks
              options={{ opacity: 0.5 }}
              style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                background: "transparent",
              }}
            />
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />

            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Order Successfully Placed!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your order will be processed shortly.
            </p>
            <Link href="/">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      ) : cart.length > 0 ? (
        <div className="flex flex-col items-center">
          {/* Cart Items */}
          <div className="w-full max-w-3xl mb-8">
            {cart.map((item, index) => (
              <CartItem item={item} key={item.id} itemIndex={index} />
            ))}
          </div>

          {/* Summary and Offer */}
          <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col gap-4 mb-6">
              <h2 className="font-semibold text-2xl text-green-800 text-center">
                Your Cart
              </h2>
              <h3 className="font-semibold text-4xl text-green-700 text-center">
                Summary
              </h3>
              <p className="text-xl text-center">
                <span className="text-gray-700 font-semibold">
                  Total Items: {cart.length}
                </span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex-1">
                <p className="text-xl font-bold text-center md:text-left">
                  <span className="text-gray-700 font-semibold">
                    Total Amount: ${getTotalAmount()}
                  </span>
                </p>
              </div>
              <div className="flex-1 flex justify-center md:justify-end">
                <Offer totalAmount={parseFloat(getTotalAmount())} />
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={handleCheckout}
                className="w-full bg-green-700 hover:bg-green-600 rounded-lg text-white transition duration-300 ease-linear border-2 border-green-600 font-bold p-3 text-xl"
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col justify-center items-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <Link href="/">
            <button className="uppercase bg-green-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider hover:bg-green-500 duration-300 transition-all ease-in">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
