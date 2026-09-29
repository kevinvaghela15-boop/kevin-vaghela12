import Seo from "../components/Seo.jsx";
import { services } from "../data/site.js";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <Seo
        title="Web Development, Website Design & UI/UX Services in India"
        description="Explore website design, web development, UI/UX design, website redesign, custom software, mobile app, and automation services from Raxio in India."
        path="/services"
      />

      <section className="text-center">
        <p className="text-sm tracking-[0.2em] text-[#6ea8ff]">Services</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl">Built around your next stage of growth</h1>
      </section>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <article key={service.id} className="card rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6ea8ff]">0{index + 1}</p>
            <h2 className="mt-3 font-display text-2xl text-white">{service.title}</h2>
            <p className="mt-3 leading-7 text-[#9aa8c7]">{service.copy}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
