import { Link } from "react-router-dom";
import { navLinks, SITE } from "../data/site.js";
import Logo from "./Logo.jsx";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "GitHub", href: "https://github.com" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--color-line)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-6 text-[#9aa8c7]">{SITE.description}</p>
          <p className="mt-4 text-sm text-[#c5d0ea]">
            {SITE.email}
            <br />
            {SITE.phone}
            <br />
            {SITE.location}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Navigate</p>
          <div className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-[#9aa8c7] hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Company</p>
          <div className="mt-4 flex flex-col gap-2">
            <Link to="/privacy" className="text-sm text-[#9aa8c7] hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-[#9aa8c7] hover:text-white">
              Terms & Conditions
            </Link>
            {socials.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="text-sm text-[#9aa8c7] hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-line)] py-5 text-center text-xs text-[#7d8bab]">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
