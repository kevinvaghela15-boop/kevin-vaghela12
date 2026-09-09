import Seo from "../components/Seo.jsx";
import { SITE } from "../data/site.js";

export default function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20">
      <Seo title="Terms & Conditions" description="Website terms for Raxio." path="/terms" />
      <h1 className="font-display text-4xl font-semibold text-white">Terms & Conditions</h1>
      <p className="mt-6 leading-7 text-[#9aa8c7]">
        This website is provided by {SITE.name} for informational and inquiry purposes. Project work is governed by a
        separate proposal or agreement.
      </p>
      <p className="mt-4 leading-7 text-[#9aa8c7]">
        Content is provided as-is. We may update services, pricing, and these terms without prior notice. For questions,
        contact {SITE.email}.
      </p>
    </article>
  );
}
