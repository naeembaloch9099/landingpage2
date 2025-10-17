import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion as Motion } from "framer-motion";
import QRModal from "./QRModal";

const products = [
  { title: "Stylish Women Bag", price: "£75.00", tag: "Hot" },
  {
    title: "Stylish Watch For Man",
    price: "£75.00",
    sale: "£150.00",
    tag: "-50%",
  },
  { title: "Polo T-shirt For Man", price: "£25.00", rating: 5 },
  { title: "Luxury Wallet For Male", price: "£95.00", tag: "New" },
];

export default function Recommendations() {
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const [index, setIndex] = useState(products.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [modalData, setModalData] = useState(null);
  const items = [...products, ...products, ...products];

  function go(delta) {
    clearInterval(timerRef.current);
    setIndex((i) => i + delta);
    timerRef.current = setInterval(() => setIndex((i) => i + 1), 3000);
  }

  function handleCardMove(e) {
    const container = e.currentTarget;
    const inner = container.querySelector(".tilt-inner");
    if (!inner) return;
    const rect = container.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 14;
    const rotateX = (0.5 - py) * 10;
    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`;
  }

  function handleCardLeave(e) {
    const inner = e.currentTarget.querySelector(".tilt-inner");
    if (inner) inner.style.transform = "";
  }

  useEffect(() => {
    timerRef.current = setInterval(() => setIndex((i) => i + 1), 3000);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((i) => i + 1), 3000);
    return () => clearInterval(timerRef.current);
  }, [index]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    function onTransEnd() {
      const n = products.length;
      if (index >= n * 2) {
        setIsTransitioning(false);
        setIndex((i) => i - n);
      } else if (index < n) {
        setIsTransitioning(false);
        setIndex((i) => i + n);
      }
    }
    el.addEventListener("transitionend", onTransEnd);
    return () => el.removeEventListener("transitionend", onTransEnd);
  }, [index]);

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setIsTransitioning(true))
      );
    }
  }, [isTransitioning]);

  let slide = 0;
  if (trackRef.current && trackRef.current.children.length) {
    const card = trackRef.current.children[0];
    const cardRect = card.getBoundingClientRect();
    const computed = getComputedStyle(trackRef.current);
    const gap = parseFloat(computed.gap) || 24;
    slide = -index * (cardRect.width + gap);
  }

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      {/* QR modal rendered when add-to-cart clicked */}
      <QRModal
        open={!!modalData}
        onClose={() => setModalData(null)}
        data={modalData || {}}
      />
      {/* Animated Heading */}
      <div className="text-center mb-8 perspective-[1000px]">
        <Motion.h2
          initial={{ rotateX: 90, opacity: 0, scale: 0.5 }}
          animate={{ rotateX: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg dark:text-slate-100"
        >
          You may also like
        </Motion.h2>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-slate-500 dark:text-slate-300 text-sm mt-3"
        >
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </Motion.p>
      </div>

      {/* Product Carousel */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className={`flex items-stretch gap-6 ${
              isTransitioning ? "transition-transform duration-700" : ""
            }`}
            style={{ transform: `translateX(${slide}px)` }}
          >
            {items.map((p, i) => (
              <div
                key={`${i}-${p.title}`}
                className="card-3d tilt min-w-[280px] bg-white dark:bg-[var(--surface)] p-4 rounded-lg shadow-sm transition-colors duration-300"
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
              >
                <div
                  className="tilt-inner lift anim-fade-up"
                  style={{ animationDelay: `${(i % products.length) * 80}ms` }}
                >
                  <div className="relative rounded-md overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/p${i}/300/220`}
                      alt={p.title}
                      className="w-full h-44 object-cover rounded-md transform-gpu"
                    />
                    {p.tag && (
                      <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="font-medium text-slate-900 dark:text-slate-100">
                      {p.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <div>
                        <div className="text-slate-900 dark:text-slate-100 font-semibold">
                          {p.price}{" "}
                          {p.sale && (
                            <span className="text-sm text-slate-400 dark:text-slate-500 line-through ml-2">
                              {p.sale}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-yellow-500 mt-1 flex gap-1">
                          {Array.from({ length: p.rating || 4 }).map((_, k) => (
                            <FaStar key={k} />
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          // create some dummy order data and open modal
                          const order = {
                            id: `ORD-${Date.now()}`,
                            product: p.title,
                            price: p.price,
                            qty: 1,
                            date: new Date().toISOString(),
                          };
                          setModalData(order);
                        }}
                        className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <button
            onClick={() => go(-1)}
            className="w-10 h-10 rounded-full border bg-white dark:bg-[var(--surface)] hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
          >
            ◀
          </button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <button
            onClick={() => go(1)}
            className="w-10 h-10 rounded-full border bg-white dark:bg-[var(--surface)] hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
