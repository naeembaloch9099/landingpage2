import React from "react";
import {
  FaApple,
  FaGooglePlay,
  FaPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion as Motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[var(--bg)] dark:border-t dark:border-slate-700 border-t border-slate-200 pt-14 pb-6 shadow-inner transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
        {/* 1️⃣ Brand Section */}
        <Motion.div
          whileHover={{ scale: 1.05, rotateY: 6 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="text-blue-600 text-3xl font-extrabold drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">
              P
            </span>
            Planet
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed">
            <FaMapMarkerAlt className="inline text-blue-600 mr-2" />
            Shop 009A, Level 4, Block A, Demo Park, Ottawa
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-300">
            <FaPhone className="inline text-blue-600 mr-2" />
            +1-613-555-0182
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-300">
            <FaEnvelope className="inline text-blue-600 mr-2" />
            contact@yourmail.com
          </p>
        </Motion.div>

        {/* 2️⃣ My Account */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h4 className="font-semibold text-slate-900 dark:text-slate-100">
            My Account
          </h4>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-300">
            {[
              "My Profile",
              "My Order History",
              "Order Tracking",
              "Shopping Cart",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 transition-transform hover:translate-x-1 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </Motion.div>

        {/* 3️⃣ Shop Departments */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h4 className="font-semibold text-slate-900 dark:text-slate-100">
            Shop Departments
          </h4>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-300">
            {[
              "Computers & Accessories",
              "Smartphones & Tablets",
              "TV, Video & Audio",
              "Cameras, Photo & Video",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 transition-transform hover:translate-x-1 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </Motion.div>

        {/* 4️⃣ App Download */}
        <Motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="space-y-4"
        >
          <h4 className="font-semibold text-slate-900 dark:text-slate-100">
            Download App
          </h4>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3">
            <button className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg shadow-md hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform">
              <FaApple className="text-2xl text-white" />
              <div className="text-left text-xs">
                <div className="text-slate-300">Download on</div>
                <div className="text-sm font-medium text-white">App Store</div>
              </div>
            </button>

            <button className="flex items-center gap-3 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105 transition-transform">
              <FaGooglePlay className="text-2xl" />
              <div className="text-left text-xs">
                <div className="text-slate-200">Get it on</div>
                <div className="text-sm font-medium">Google Play</div>
              </div>
            </button>
          </div>
        </Motion.div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-slate-200 dark:border-slate-700 pt-6 text-center space-y-4">
        <div className="flex justify-center gap-6 text-slate-500 dark:text-slate-300 text-2xl">
          {[FaPaypal, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover].map(
            (Icon, i) => (
              <Motion.div
                key={i}
                whileHover={{
                  scale: 1.2,
                  rotateY: 10,
                  color: "#2563eb",
                  textShadow: "0 0 15px rgba(59,130,246,0.8)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Icon />
              </Motion.div>
            )
          )}
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-300">
          © 2024 <span className="font-semibold text-blue-600">TailGrids</span>.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
