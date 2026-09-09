import Seo from "../components/Seo.jsx";
import { SITE } from "../data/site.js";

export default function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20">
      <Seo title="Privacy Policy" description="How Raxio collects and uses inquiry data." path="/privacy" />
      <h1 className="font-display text-4xl font-semibold text-white">Privacy Policy</h1>
      <p className="mt-6 leading-7 text-[#9aa8c7]">
        {SITE.name} collects the information you submit through our contact form (name, email, company, project type,
        and message) so we can respond to your inquiry. We do not sell personal data.
      </p>
      <p className="mt-4 leading-7 text-[#9aa8c7]">
        Inquiries are stored securely in our database and may be emailed to our team. You can request deletion of your
        inquiry data by writing to {SITE.email}.
      </p>
    </article>
  );
}
