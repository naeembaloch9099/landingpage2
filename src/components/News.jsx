import React from "react";
import { FaCalendarAlt, FaTruck, FaLock, FaExchangeAlt } from "react-icons/fa";

const posts = [
  {
    date: "Dec 22, 2023",
    title: "Meet AutoManage, the best AI management tools",
    img: "https://picsum.photos/seed/blog1/640/360",
  },
  {
    date: "Mar 15, 2023",
    title: "How to earn more money as a wellness coach",
    img: "https://picsum.photos/seed/blog2/640/360",
  },
  {
    date: "Jan 05, 2023",
    title: "The no-fuss guide to upselling and cross selling",
    img: "https://picsum.photos/seed/blog3/640/360",
  },
];

const services = [
  {
    title: "Free delivery",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: FaTruck,
  },
  {
    title: "Online Payment",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: FaLock,
  },
  {
    title: "Easy Return",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: FaExchangeAlt,
  },
];

export default function News() {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-50 dark:bg-[var(--bg)] transition-colors duration-300">
      {/* Inline animation styles */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .fade-up { animation: fadeUp 0.9s ease both; }

        .text-3d {
          color: #0f172a;
          text-shadow: 2px 2px 0 #1d4ed8, 4px 4px 8px rgba(59,130,246,0.4);
          transform: perspective(600px) rotateX(8deg);
          transition: all 0.4s ease;
        }
        .text-3d:hover {
          transform: perspective(600px) rotateX(0deg) scale(1.05);
          text-shadow: 1px 1px 0 #2563eb, 3px 3px 10px rgba(96,165,250,0.6);
        }

        .card-float {
          transition: all 0.6s ease;
          transform: translateY(0);
        }
        .card-float:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 35px rgba(59,130,246,0.15);
        }

        .icon-float {
          animation: floatIcon 3s ease-in-out infinite;
        }
        @keyframes floatIcon {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center fade-up">
        <div className="mb-4 text-sm text-blue-600 font-medium">Our Blogs</div>

        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-3d text-slate-900 dark:text-slate-100">
          Our Recent News
        </h2>

        <p className="text-base text-slate-500 dark:text-slate-300 max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>

        {/* Blog cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <article
              key={i}
              className="bg-white dark:bg-[var(--surface)] rounded-xl overflow-hidden shadow-sm card-float fade-up transition-colors duration-300"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <div className="flex items-center gap-2 text-xs text-blue-600 mb-2">
                  <FaCalendarAlt /> {p.date}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-16 border-t border-slate-200 pt-12 fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="text-center p-8 bg-white dark:bg-[var(--surface)] rounded-xl shadow-sm hover:shadow-md transition-all duration-500 card-float"
                  style={{ animationDelay: `${i * 0.2 + 0.4}s` }}
                >
                  <div className="mx-auto w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 icon-float">
                    <Icon className="text-blue-600 text-2xl" />
                  </div>
                  <h4 className="font-medium text-slate-900 dark:text-slate-100 text-lg">
                    {s.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-300 mt-2 leading-relaxed">
                    {s.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
