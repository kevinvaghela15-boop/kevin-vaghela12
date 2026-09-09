export default function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="card flex flex-col items-start justify-between gap-6 rounded-3xl p-8 md:flex-row md:items-center md:p-12">
        <div>
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Have an idea? Let's turn it into technology.
          </h2>
          <p className="mt-3 max-w-xl text-[#9aa8c7]">
            Share the problem, timeline, and outcome you want. We'll reply with a clear next step.
          </p>
        </div>
        <a href="#contact" className="btn-primary shrink-0">
          Start a Project
        </a>
      </div>
    </section>
  );
}
