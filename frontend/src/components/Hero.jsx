import { SITE } from "../data/site.js";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-16 md:pt-24">
      <div className="pointer-events-none absolute inset-0 grid-fade" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal">
          <p className="mb-4 inline-flex rounded-full border border-[var(--color-line)] px-3 py-1 text-xs tracking-[0.18em] text-[#9aa8c7]">
            {SITE.name} · {SITE.title}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
            Software that feels premium.
            <span className="block bg-gradient-to-r from-[#6ea8ff] to-[#b7a8ff] bg-clip-text text-transparent">
              Built to grow with you.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#9aa8c7] md:text-lg">
            {SITE.name} partners with startups, SMEs, and enterprises to design custom software, web platforms,
            mobile apps, and automation — with a clear path from idea to production.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Start a Project
            </a>
            <a href="#solutions" className="btn-secondary">
              Explore Solutions
            </a>
          </div>
        </div>
        <div className="relative mx-auto h-[340px] w-full max-w-md lg:h-[420px]" aria-hidden="true">
          <div className="absolute inset-8 rounded-full border border-[var(--color-line)] orbit" />
          <div className="absolute inset-16 rounded-full border border-dashed border-[#6ea8ff]/35 orbit-rev" />
          <div className="card absolute inset-x-10 top-1/2 -translate-y-1/2 rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9aa8c7]">Delivery stack</p>
            <p className="mt-3 font-display text-2xl text-white">Discover → Launch</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-[#c5d0ea]">
              <span className="rounded-xl bg-white/4 px-3 py-2">Web apps</span>
              <span className="rounded-xl bg-white/4 px-3 py-2">Mobile</span>
              <span className="rounded-xl bg-white/4 px-3 py-2">Automation</span>
              <span className="rounded-xl bg-white/4 px-3 py-2">Consulting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
