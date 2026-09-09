import Seo from "../components/Seo.jsx";
import Contact from "../components/Contact.jsx";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <Seo title="Contact" description="Tell Raxio about your project and next milestone." path="/contact" />
      <Contact />
    </div>
  );
}
