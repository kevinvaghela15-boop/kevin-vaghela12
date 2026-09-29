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
        title="Website Design & Development Company in India"
        description="Raxio is a website design and development company in India, building business websites, web platforms, mobile apps, and custom software for startups and SMEs."
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
