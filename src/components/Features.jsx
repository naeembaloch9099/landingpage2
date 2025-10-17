import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

export default function Features() {
  const features = [
    {
      kicker: "Start From $50",
      title: "New Arrival From Creative Clock Collections",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc.",
      img: "https://picsum.photos/seed/clock/640/420",
    },
    {
      kicker: "Start From $49",
      title: "New Summer Collections For Man's Fashion",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc.",
      img: "https://picsum.photos/seed/sunglasses/640/420",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid gap-20">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className={`grid items-center gap-12 md:grid-cols-2 ${
              i % 2 === 1 ? "md:grid-flow-col-dense md:auto-cols-fr" : ""
            }`}
          >
            {/* Image on alternating sides */}
            {i % 2 === 0 ? (
              <>
                <motion.div
                  className="space-y-5 md:pr-12"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sm text-blue-600 font-semibold tracking-wide uppercase">
                    {f.kicker}
                  </div>

                  <motion.h3
                    className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-md dark:text-slate-100 dark:bg-[none]"
                    initial={{ rotateY: 45, opacity: 0 }}
                    whileInView={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {f.title}
                  </motion.h3>

                  <p className="text-base text-slate-500 dark:text-slate-300 leading-relaxed max-w-md">
                    {f.text}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-5 inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    View All Items
                  </motion.button>
                </motion.div>

                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform-gpu hover:rotate-1 hover:scale-105 transition-all duration-500 bg-white dark:bg-[var(--surface)]"
                  initial={{ opacity: 0, x: 60, rotateY: 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={f.img}
                    alt="feature"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform-gpu hover:-rotate-1 hover:scale-105 transition-all duration-500 order-2 md:order-1 bg-white dark:bg-[var(--surface)]"
                  initial={{ opacity: 0, x: -60, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={f.img}
                    alt="feature"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </motion.div>

                <motion.div
                  className="space-y-5 order-1 md:order-2 md:pl-12"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sm text-blue-600 font-semibold tracking-wide uppercase">
                    {f.kicker}
                  </div>

                  <motion.h3
                    className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 drop-shadow-md dark:text-slate-100 dark:bg-[none]"
                    initial={{ rotateY: -45, opacity: 0 }}
                    whileInView={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {f.title}
                  </motion.h3>

                  <p className="text-base text-slate-500 dark:text-slate-300 leading-relaxed max-w-md">
                    {f.text}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-5 inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    View All Items
                  </motion.button>
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
