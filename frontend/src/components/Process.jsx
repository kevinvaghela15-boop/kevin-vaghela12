import { processSteps } from "../data/site.js";

export default function Process() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <p className="text-sm tracking-[0.2em] text-[#6ea8ff]">Process</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">How we build</h2>
      <ol className="mt-10 grid gap-4 md:grid-cols-5">
        {processSteps.map((item) => (
          <li key={item.step} className="card rounded-2xl p-5">
            <p className="text-xs text-[#6ea8ff]">{item.step}</p>
            <h3 className="mt-3 font-display text-lg text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#9aa8c7]">{item.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
