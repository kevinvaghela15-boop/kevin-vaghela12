import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/site.js";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <Logo />
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-[#c5d0ea] hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary px-4 py-2 text-sm">
              Let's Talk
            </Link>
          </div>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--color-line)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </nav>
      </div>
      {open && (
        <div id="mobile-nav" className="glass mx-4 mt-2 rounded-2xl p-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="rounded-xl px-3 py-2 text-[#d7e0f5]">
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary">
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
