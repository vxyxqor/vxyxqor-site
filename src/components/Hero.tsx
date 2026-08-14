import { useState } from "react";
import { tools, categories } from "../data/tools";

export default function Hero() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const filtered = query.trim()
    ? tools.filter(
        (t) =>
          t.name.toLowerCase().includes(query.toLowerCase()) ||
          t.tagline.toLowerCase().includes(query.toLowerCase()) ||
          t.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950" />
      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Independent AI Reviews — Updated Weekly
        </div>

        <h1 className="mb-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Find the right AI
          <br />
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            for the job.
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
          Discover AI tools that actually help you get things done. No fluff. No hype. Just what works — with honest reviews and transparent affiliate links.
        </p>

        <div className="mx-auto mb-8 max-w-xl">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search AI tools..."
              className="w-full rounded-xl border border-slate-700 bg-slate-900/80 py-4 pl-12 pr-4 text-white placeholder-slate-500 shadow-lg backdrop-blur transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {query.trim() && filtered.length > 0 && (
            <div className="mt-2 rounded-xl border border-slate-700 bg-slate-900/95 p-2 text-left shadow-2xl backdrop-blur">
              {filtered.slice(0, 6).map((t) => (
                <a
                  key={t.id}
                  href={`/tools/${t.slug}`}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition hover:bg-slate-800"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-sm font-bold text-indigo-400">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-white">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.category} · {t.tagline.slice(0, 50)}...</div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.slice(0, 6).map((cat) => (
            <a
              key={cat}
              href={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onMouseEnter={() => setActiveCat(cat)}
              onMouseLeave={() => setActiveCat(null)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeCat === cat
                  ? "border-indigo-500 bg-indigo-500/20 text-indigo-300"
                  : "border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-500 hover:text-white"
              }`}
            >
              {cat}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
