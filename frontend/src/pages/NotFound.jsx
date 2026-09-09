import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      <Seo title="Page not found" description="The requested Raxio page does not exist." path="/404" />
      <h1 className="font-display text-4xl text-white">Page not found</h1>
      <p className="mt-4 text-[#9aa8c7]">The page you requested is not available.</p>
      <Link to="/" className="btn-primary mt-6 inline-flex">
        Back home
      </Link>
    </div>
  );
}
