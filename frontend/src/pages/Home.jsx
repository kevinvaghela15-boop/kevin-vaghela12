import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Hero from "../components/Hero.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Process from "../components/Process.jsx";
import Seo from "../components/Seo.jsx";
import Services from "../components/Services.jsx";
import WhyChoose from "../components/WhyChoose.jsx";

export default function Home() {
  return (
    <>
      <Seo
        description="Raxio builds custom software, web platforms, mobile apps, UI/UX, and automation for startups, SMEs, and enterprises."
        path="/"
      />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Process />
      <Portfolio />
      <CtaBand />
      <Contact />
    </>
  );
}
