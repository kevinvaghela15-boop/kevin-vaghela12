import { reasons } from "../data/site.js";

export default function WhyChoose() {
  return (
    <section id="solutions" className="mx-auto max-w-6xl px-4 py-20">
      <p className="text-sm tracking-[0.2em] text-[#6ea8ff]">Why Raxio</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">Why choose Raxio</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {reasons.map((item) => (
          <article key={item.title} className="card rounded-2xl p-5 lg:min-h-[220px]">
            <h3 className="font-display text-lg text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#9aa8c7]">{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
