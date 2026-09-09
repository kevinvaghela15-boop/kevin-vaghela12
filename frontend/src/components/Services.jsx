import { services } from "../data/site.js";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20">
      <p className="text-sm tracking-[0.2em] text-[#6ea8ff]">Services</p>
      <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-white md:text-4xl">
        Technology services built around outcomes
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <article key={service.id} className="card rounded-2xl p-6 transition duration-200">
            <p className="text-xs text-[#6ea8ff]">0{index + 1}</p>
            <h3 className="mt-3 font-display text-xl text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#9aa8c7]">{service.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
