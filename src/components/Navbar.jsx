import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaUser,
  FaHeart,
  FaShoppingBasket,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCatsOpen, setMobileCatsOpen] = useState(false);
  const categories = [
    "Accessories",
    "Bags",
    "Electronics",
    "Shoes",
    "Watches",
    "Sunglasses",
    "Wallets",
    "Home Decor",
    "Beauty",
    "Sports",
  ];

  return (
    <nav className="w-full bg-white dark:bg-[var(--surface)] dark:border-b dark:border-slate-700 shadow-sm py-4 px-6 md:px-10 flex justify-between items-center relative transition-colors duration-300">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 w-5 h-8 rounded-r-md"></div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Planet
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-slate-900 dark:text-slate-200 font-medium">
        <li className="cursor-pointer hover:text-blue-600">Home</li>
        <li className="cursor-pointer hover:text-blue-600">Shop</li>

        {/* Products dropdown (desktop) */}
        <li className="relative">
          <div className="flex items-center cursor-pointer hover:text-blue-600 group">
            Products <IoMdArrowDropdown className="ml-1" />
          </div>

          <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 origin-top-left absolute left-0 mt-3 w-48 bg-white dark:bg-[var(--surface)] border border-slate-100 dark:border-slate-700 rounded-lg shadow-lg py-2 z-20">
            {categories.map((c) => (
              <a
                key={c}
                href="#"
                className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                {c}
              </a>
            ))}
          </div>
        </li>

        <li className="cursor-pointer hover:text-blue-600">Accessories</li>
        <li className="cursor-pointer hover:text-blue-600">Contact</li>
      </ul>

      {/* Right Side */}
      <div className="hidden md:flex items-center gap-6">
        {/* Help Section */}
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 dark:bg-slate-700 p-2 rounded-full">
            <FaPhoneAlt className="text-gray-700 dark:text-slate-200" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-medium text-gray-700 dark:text-slate-300">
              Need Help?
            </p>
            <p className="text-sm font-semibold text-gray-900 dark:text-slate-100">
              +001 123 456 789
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* User */}
          <div className="bg-gray-100 dark:bg-slate-700 p-3 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors">
            <FaUser className="text-gray-800 dark:text-slate-200" />
          </div>

          {/* Heart */}
          <div className="relative bg-gray-100 dark:bg-slate-700 p-3 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors">
            <FaHeart className="text-gray-800 dark:text-slate-200" />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full px-1.5">
              3
            </span>
          </div>

          {/* Cart */}
          <div className="relative bg-gray-100 dark:bg-slate-700 p-3 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors">
            <FaShoppingBasket className="text-gray-800 dark:text-slate-200" />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full px-1.5">
              1
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 dark:text-slate-200 text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-[var(--surface)] border-t shadow-md z-10 md:hidden transition-colors duration-300">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-900 dark:text-slate-200 font-medium">
            <li className="w-full text-center cursor-pointer hover:text-blue-600">
              Home
            </li>
            <li className="w-full text-center cursor-pointer hover:text-blue-600">
              Shop
            </li>

            <li className="w-full text-center">
              <button
                onClick={() => setMobileCatsOpen((s) => !s)}
                className="w-full flex items-center justify-center gap-2 py-2 hover:text-blue-600"
              >
                Products
                <span className="ml-1">{mobileCatsOpen ? "▲" : "▼"}</span>
              </button>

              {mobileCatsOpen && (
                <div className="mt-2 grid grid-cols-2 gap-2 px-4">
                  {categories.map((c) => (
                    <a
                      key={c}
                      href="#"
                      className="block text-sm text-slate-700 dark:text-slate-200 py-2 px-2 rounded hover:bg-slate-50 dark:hover:bg-slate-700 text-center"
                    >
                      {c}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li className="w-full text-center cursor-pointer hover:text-blue-600">
              Accessories
            </li>
            <li className="w-full text-center cursor-pointer hover:text-blue-600">
              Contact
            </li>
          </ul>

          {/* Mobile Icons */}
          <div className="flex justify-center gap-6 pb-4">
            <ThemeToggle />
            <FaUser className="text-gray-800 dark:text-slate-200 text-xl cursor-pointer" />
            <div className="relative">
              <FaHeart className="text-gray-800 dark:text-slate-200 text-xl cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5">
                3
              </span>
            </div>
            <div className="relative">
              <FaShoppingBasket className="text-gray-800 dark:text-slate-200 text-xl cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5">
                1
              </span>
            </div>
          </div>

          {/* Mobile Help Section */}
          <div className="flex justify-center items-center gap-2 pb-4">
            <div className="bg-gray-100 p-2 rounded-full">
              <FaPhoneAlt className="text-gray-700" />
            </div>
            <div className="text-center leading-tight">
              <p className="text-sm font-medium text-gray-700">Need Help?</p>
              <p className="text-sm font-semibold text-gray-900">
                +001 123 456 789
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
