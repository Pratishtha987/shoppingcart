"use client";
import React from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../hooks/useCart";

const Header = () => {
  const { cart } = useCart();
  return (
    <div className="bg-slate-900">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <Link href="/">
          <div className="ml-5">
            <img src="../logo.png" className="h-14" />
          </div>
        </Link>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <Link href="/">
            <p>Home</p>
          </Link>

          <Link href="/cart">
            <div className="relative">
              <FaCartShopping className="text-2xl" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex
              justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
