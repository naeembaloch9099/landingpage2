import React from "react";

const cats = [
  {
    title: "Accessories",
    count: 8,
    img: "https://i0.wp.com/watchcentre.pk/wp-content/uploads/2022/04/curren-8371-skin-color-leather-strap-blue-dial-mens-watch.jpg?fit=800%2C800&ssl=1",
  },
  { title: "Bags", count: 4, img: "https://picsum.photos/seed/bag/320/220" },
  {
    title: "Electronics",
    count: 12,
    img: "https://picsum.photos/seed/electro/320/220",
  },
  {
    title: "Shoes",
    count: 24,
    img: "https://picsum.photos/seed/shoes/320/220",
  },
];

export default function Categories() {
  return (
    <section className="bg-slate-50 dark:bg-[var(--bg)] py-20 relative overflow-hidden transition-colors duration-300">
      {/* Inline animation styles */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(25px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .fade-up { animation: fadeUp 1s ease both; }

        .text-3d {
          color: #0f172a;
          text-shadow: 2px 2px 0 #1d4ed8, 4px 4px 6px rgba(59,130,246,0.4);
          transform: perspective(500px) rotateX(10deg);
          transition: all 0.4s ease;
        }
        .text-3d:hover {
          transform: perspective(600px) rotateX(0deg) scale(1.05);
          text-shadow: 1px 1px 0 #2563eb, 3px 3px 10px rgba(96,165,250,0.6);
        }

        .card-pop {
          transition: all 0.5s ease;
          transform: perspective(700px) rotateX(0deg) rotateY(0deg);
        }
        .card-pop:hover {
          transform: perspective(700px) rotateX(3deg) rotateY(3deg) scale(1.05);
          box-shadow: 0 15px 30px rgba(59,130,246,0.2);
        }

        .btn-pop {
          transition: all 0.3s ease;
          transform: translateY(0);
        }
        .btn-pop:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 20px rgba(59,130,246,0.4);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-3d mb-3 text-slate-900 dark:text-slate-100">
          Shop By Category
        </h2>
        <p className="text-base text-slate-500 dark:text-slate-300 max-w-2xl mx-auto fade-up">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {cats.map((c, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[var(--surface)] rounded-xl p-5 text-center shadow-sm card-pop transition-colors duration-300"
              style={{
                animationDelay: `${i * 0.2}s`,
                animation: "fadeUp 1s ease both",
              }}
            >
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-lg text-3d">
                {c.title}
              </h3>
              <div className="text-sm text-slate-400 dark:text-slate-400 mt-1">
                {c.count} Products Available
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 fade-up">
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded btn-pop">
            Explore All Category
          </button>
        </div>
      </div>
    </section>
  );
}
