import { comparisons, tools } from "../data/tools";

export default function Comparisons() {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold sm:text-3xl">⚡ AI Comparisons</h2>
          <p className="mt-1 text-slate-400">Side-by-side breakdowns so you pick the winner.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => {
            const left = tools.find((t) => t.id === c.left)!;
            const right = tools.find((t) => t.id === c.right)!;
            return (
              <a
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-700 bg-slate-800/40 p-5 transition hover:border-indigo-500/40 hover:bg-slate-800/70"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 text-sm font-bold text-indigo-400">
                      {left.name[0]}
                    </div>
                    <span className="font-bold text-white">{left.name}</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">vs</span>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-white">{right.name}</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/20 text-sm font-bold text-violet-400">
                      {right.name[0]}
                    </div>
                  </div>
                </div>

                <p className="mb-4 flex-1 text-sm text-slate-400">
                  {left.category === right.category
                    ? `Two heavyweights in ${left.category}. We tested both on speed, output quality, and value for money.`
                    : `Different approaches to the same problem. See which one fits your workflow.`}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{left.category}</span>
                  <span className="text-sm font-medium text-indigo-400 group-hover:text-indigo-300">
                    Read comparison →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
