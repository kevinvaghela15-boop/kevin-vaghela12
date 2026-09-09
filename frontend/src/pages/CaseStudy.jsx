import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { projects } from "../data/site.js";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24">
        <h1 className="font-display text-3xl text-white">Project not found</h1>
        <Link to="/#projects" className="btn-secondary mt-6 inline-flex">
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-20">
      <Seo title={project.title} description={project.summary} path={`/projects/${project.slug}`} type="article" />
      <p className="text-sm tracking-[0.2em] text-[#6ea8ff]">{project.category}</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-white">{project.title}</h1>
      {project.image ? (
        <img className="mt-8 h-72 w-full rounded-3xl bg-[#0b1020] object-contain p-4 md:h-[30rem]" src={project.image} alt={`${project.title} project preview`} />
      ) : (
        <div className={`mt-8 h-72 rounded-3xl bg-gradient-to-br ${project.accent} md:h-[30rem]`} />
      )}
      <p className="mt-8 text-lg leading-8 text-[#c5d0ea]">{project.summary}</p>
      <p className="mt-4 leading-7 text-[#9aa8c7]">{project.outcome}</p>
      {project.tagline && <p className="mt-6 font-display text-xl text-white">“{project.tagline}”</p>}
      {project.features && (
        <section className="mt-10">
          <h2 className="font-display text-2xl text-white">Key features</h2>
          <ul className="mt-4 grid gap-3 text-sm text-[#c5d0ea] md:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="rounded-xl border border-[var(--color-line)] bg-white/[0.03] px-4 py-3">
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}
      {project.technologies && (
        <section className="mt-10">
          <h2 className="font-display text-2xl text-white">Technologies and tools</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="rounded-full border border-[var(--color-line)] px-3 py-2 text-sm text-[#c5d0ea]">
                {technology}
              </span>
            ))}
          </div>
        </section>
      )}
      <Link to="/#contact" className="btn-primary mt-8 inline-flex">
        Start a similar project
      </Link>
    </article>
  );
}
