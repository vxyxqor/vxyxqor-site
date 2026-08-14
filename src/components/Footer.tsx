export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="text-xl font-extrabold text-white">vxyxqor</span>
              <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">Beta</span>
            </div>
            <p className="text-sm leading-relaxed">
              Independent AI tool reviews for people who want to get work done faster. No hype. No fluff.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Discover</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/tools" className="hover:text-white">All AI Tools</a></li>
              <li><a href="/compare" className="hover:text-white">Comparisons</a></li>
              <li><a href="/workflows" className="hover:text-white">Workflows</a></li>
              <li><a href="/category/ai-writing" className="hover:text-white">AI Writing</a></li>
              <li><a href="/category/ai-seo" className="hover:text-white">AI SEO</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Transparency</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/disclosure" className="hover:text-white">Affiliate Disclosure</a></li>
              <li><a href="/methodology" className="hover:text-white">Review Methodology</a></li>
              <li><a href="/about" className="hover:text-white">About vxyxqor</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs">
          <p className="mb-2">
            <span className="font-semibold text-slate-300">Affiliate Disclosure:</span> vxyxqor earns a commission when you click some links and make a purchase. This does not affect our reviews or recommendations. We only recommend tools we have tested or thoroughly researched.
          </p>
          <p>© 2026 vxyxqor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
