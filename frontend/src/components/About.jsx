const stats = [
  { value: "40+", label: "Products shipped" },
  { value: "12+", label: "Industries served" },
  { value: "98%", label: "Client retention" },
  { value: "24/7", label: "Support cadence" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm tracking-[0.2em] text-[#6ea8ff]">Company</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">About Raxio</h2>
          <p className="mt-5 max-w-2xl text-[#9aa8c7] leading-7">
            Raxio is a technology studio focused on building software that looks refined and performs under real
            business pressure. We help founders and operators turn product ideas into reliable digital systems.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="card rounded-2xl p-5">
              <h3 className="font-display text-lg text-white">Mission</h3>
              <p className="mt-2 text-sm leading-6 text-[#9aa8c7]">
                Make ambitious software accessible: clear process, honest scope, and delivery that compounds.
              </p>
            </article>
            <article className="card rounded-2xl p-5">
              <h3 className="font-display text-lg text-white">Vision</h3>
              <p className="mt-2 text-sm leading-6 text-[#9aa8c7]">
                Become the long-term technology partner for businesses that want to grow without rebuilding every year.
              </p>
            </article>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((item) => (
            <div key={item.label} className="card rounded-2xl p-5">
              <p className="font-display text-3xl text-white">{item.value}</p>
              <p className="mt-1 text-sm text-[#9aa8c7]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
