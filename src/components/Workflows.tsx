import { workflows, tools } from "../data/tools";

export default function Workflows() {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold sm:text-3xl">🏗️ AI Workflows</h2>
          <p className="mt-1 text-slate-400">End-to-end sequences that solve real tasks — not just one tool.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {workflows.map((wf) => {
            const wfTools = wf.tools.map((id) => tools.find((t) => t.id === id)!);
            return (
              <a
                key={wf.id}
                href={`/workflows/${wf.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-800/60"
              >
                <h3 className="mb-2 text-lg font-bold text-white">{wf.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">{wf.description}</p>

                <div className="mb-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Tools in this workflow</p>
                  <div className="flex flex-wrap gap-2">
                    {wfTools.map((t) => (
                      <span
                        key={t.id}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="text-sm font-medium text-indigo-400 group-hover:text-indigo-300">
                  See the full workflow →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
