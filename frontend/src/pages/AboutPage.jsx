import Seo from "../components/Seo.jsx";
import { reasons, services, SITE } from "../data/site.js";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <Seo title="About" description="Learn more about Raxio and how we build software for growth." path="/about" />

      <section className="card rounded-3xl p-8 md:p-10">
        <p className="text-sm tracking-[0.2em] text-[#6ea8ff]">About</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl">A product-led studio for ambitious businesses</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#c5d0ea]">
          {SITE.name} helps founders, operators, and teams turn ideas into dependable software systems. We blend strategy,
          design, engineering, and delivery so every build is aligned with business goals rather than just technical novelty.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="card rounded-3xl p-7">
          <h2 className="font-display text-2xl text-white">Our mission</h2>
          <p className="mt-3 leading-7 text-[#9aa8c7]">
            Make quality digital execution accessible to growing businesses that need momentum, clarity, and long-term value.
          </p>
        </article>
        <article className="card rounded-3xl p-7">
          <h2 className="font-display text-2xl text-white">Our approach</h2>
          <p className="mt-3 leading-7 text-[#9aa8c7]">
            We keep the process practical: understand the problem, define the right product surface, build with discipline,
            and keep improving after launch.
          </p>
        </article>
      </section>

      <section className="mt-16">
        <p className="text-sm tracking-[0.2em] text-[#6ea8ff]">Why teams choose us</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {reasons.map((item) => (
            <article key={item.title} className="card rounded-2xl p-5">
              <h3 className="font-display text-lg text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#9aa8c7]">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <p className="text-sm tracking-[0.2em] text-[#6ea8ff]">Capabilities</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="card rounded-2xl p-6">
              <h3 className="font-display text-xl text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#9aa8c7]">{service.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
