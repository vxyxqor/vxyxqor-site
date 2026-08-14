import { featuredTools } from "../data/tools";

export default function TrendingTools() {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">🔥 Trending AI Tools</h2>
            <p className="mt-1 text-slate-400">The ones people are actually buying right now.</p>
          </div>
          <a href="/tools" className="hidden text-sm font-medium text-indigo-400 hover:text-indigo-300 sm:block">
            View all 30 →
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <article
              key={tool.id}
              className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-slate-600 hover:bg-slate-800/60"
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-bold text-white shadow-lg">
                  {tool.name[0]}
                </div>
                <div className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-400">
                  ⭐ {tool.rating}
                </div>
              </div>

              <h3 className="mb-1 text-lg font-bold text-white">{tool.name}</h3>
              <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-500">{tool.category}</p>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">{tool.tagline}</p>

              <div className="mb-4 flex items-baseline gap-1.5">
                <span className="text-lg font-bold text-white">{tool.price}</span>
                <span className="text-xs text-slate-500">{tool.priceNote}</span>
              </div>

              <div className="flex gap-2">
                <a
                  href={`/tools/${tool.slug}`}
                  className="flex-1 rounded-lg border border-slate-600 bg-slate-800 py-2.5 text-center text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  Review →
                </a>
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex-1 rounded-lg bg-indigo-600 py-2.5 text-center text-sm font-bold text-white transition hover:bg-indigo-500"
                >
                  Try {tool.name} →
                </a>
              </div>

              <div className="mt-3 text-center text-[11px] text-slate-600">
                We earn a commission if you buy — at no extra cost to you.
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
