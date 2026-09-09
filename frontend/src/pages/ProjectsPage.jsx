import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { projects } from "../data/site.js";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <Seo title="Projects" description="See select work from Raxio across SaaS, operations, mobile, and custom software delivery." path="/projects" />

      <section className="text-center">
        <p className="text-sm tracking-[0.2em] text-[#6ea8ff]">Projects</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl">Selected client work</h1>
      </section>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="card overflow-hidden rounded-3xl">
            {project.image ? (
              <img className="h-56 w-full bg-[#0b1020] object-contain p-3 md:h-64" src={project.image} alt={`${project.title} project preview`} />
            ) : (
              <div className={`h-56 bg-gradient-to-br ${project.accent} md:h-64`} />
            )}
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[#6ea8ff]">{project.category}</p>
              <h2 className="mt-2 font-display text-2xl text-white">{project.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#9aa8c7]">{project.summary}</p>
              <Link to={`/projects/${project.slug}`} className="btn-secondary mt-5 text-sm">
                Case Study
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
