import Seo from "../components/Seo.jsx";
import { reasons } from "../data/site.js";

export default function SolutionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <Seo title="Solutions" description="Product strategy, software delivery, and scalable systems for modern teams." path="/solutions" />

      <section className="card rounded-3xl p-8 md:p-10">
        <p className="text-sm tracking-[0.2em] text-[#6ea8ff]">Solutions</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl">Practical systems for teams moving fast</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#c5d0ea]">
          Whether you need a sharper customer experience, a reliable internal system, or a product roadmap that turns priorities
          into outcomes, we create the structure and execution model to move you forward.
        </p>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {reasons.map((item) => (
          <article key={item.title} className="card rounded-2xl p-5">
            <h2 className="font-display text-xl text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#9aa8c7]">{item.copy}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
