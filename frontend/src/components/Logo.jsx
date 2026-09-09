import { Link } from "react-router-dom";

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 text-white no-underline">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#6ea8ff] to-[#8b7cff] text-sm font-bold text-[#07101f]">
        R
      </span>
      <span className="leading-tight">
        <span className="block font-display text-[15px] font-semibold tracking-[0.18em]">Raxio</span>
        {!compact && <span className="block text-[11px] text-[#9aa8c7]">Nexus</span>}
      </span>
    </Link>
  );
}
