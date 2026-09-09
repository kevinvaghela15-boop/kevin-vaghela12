import { Link } from "react-router-dom";
import { projects } from "../data/site.js";

export default function Portfolio() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
      <p className="text-sm tracking-[0.2em] text-[#6ea8ff]">Work</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">Featured projects</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="card overflow-hidden rounded-3xl">
            {project.image ? (
              <img className="h-56 w-full bg-[#0b1020] object-contain p-3 md:h-64" src={project.image} alt={`${project.title} project preview`} />
            ) : (
              <div className={`h-56 bg-gradient-to-br ${project.accent} md:h-64`} />
            )}
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[#6ea8ff]">{project.category}</p>
              <h3 className="mt-2 font-display text-2xl text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#9aa8c7]">{project.summary}</p>
              <Link to={`/projects/${project.slug}`} className="btn-secondary mt-5 text-sm">
                Case Study
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
