import React, { useRef } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

function useTilt() {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = -(py - 0.5) * 6;
    const ry = (px - 0.5) * 10;
    const inner = el.querySelector(".tilt-inner");
    if (inner) inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    const inner = el.querySelector(".tilt-inner");
    if (inner) inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return { ref, handleMove, handleLeave };
}

export default function Hero() {
  const leftTilt = useTilt();
  const rightTilt = useTilt();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* LEFT MAIN PROMO */}
        <div
          ref={leftTilt.ref}
          onMouseMove={leftTilt.handleMove}
          onMouseLeave={leftTilt.handleLeave}
          className="col-span-2 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl p-10 md:p-16 flex flex-col justify-center relative overflow-hidden shadow-md transition-all duration-500 tilt dark:bg-[var(--surface)] dark:from-transparent dark:via-[var(--surface)] dark:to-transparent"
        >
          <div className="tilt-inner relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight transition-colors duration-300">
              Mega Sale Up To{" "}
              <span className="text-blue-600 dark:text-blue-400">50% Off</span>{" "}
              For All
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-xl">
              Shop your favorite items now at discounted prices! Exclusive deals
              available this week only.
            </p>
            <button className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 hover:shadow-lg transition">
              Grab The Offer <HiOutlineArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Decorative image */}
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=60&auto=format&fit=crop"
            alt="decor"
            className="absolute right-0 bottom-0 w-48 sm:w-56 md:w-64 opacity-30 md:opacity-50 pointer-events-none select-none z-0 anim-float hidden sm:block"
          />
        </div>

        {/* RIGHT SMALL PROMOS */}
        <div
          ref={rightTilt.ref}
          onMouseMove={rightTilt.handleMove}
          onMouseLeave={rightTilt.handleLeave}
          className="flex flex-col gap-6 tilt"
        >
          {/* Card 1 */}
          <article className="bg-white dark:bg-[var(--surface)] rounded-xl p-5 shadow-md hover:shadow-lg transition-colors duration-300 h-1/2 flex items-center gap-4 tilt-inner">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=60&auto=format&fit=crop"
              alt="travel"
              className="w-28 h-24 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 transition-colors duration-300">
                Summer Travel Collection
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                Discover Now
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-white dark:bg-[var(--surface)] rounded-xl p-5 shadow-md hover:shadow-lg transition-colors duration-300 h-1/2 flex items-center gap-4 tilt-inner">
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=60&auto=format&fit=crop"
              alt="iphone"
              className="w-28 h-24 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 transition-colors duration-300">
                Get 30% Off On iPhone
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                Shop Now
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
