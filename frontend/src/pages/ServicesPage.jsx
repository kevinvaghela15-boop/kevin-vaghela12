import Seo from "../components/Seo.jsx";
import { services } from "../data/site.js";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <Seo
        title="Website Design & Development Services in Ahmedabad and India"
        description="Raxio helps businesses in Ahmedabad and across India with website design, web development, e-commerce websites, website redesign, and SEO foundations for small businesses."
        path="/services"
      />

      <section className="text-center">
        <p className="text-sm tracking-[0.2em] text-[#6ea8ff]">Services</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl">Website design and development for growing businesses</h1>
        <p className="mx-auto mt-5 max-w-3xl leading-7 text-muted">
          Raxio works remotely with businesses in Ahmedabad and across India, building business websites, e-commerce stores,
          redesigns, and search-friendly foundations for small-business websites.
        </p>
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
