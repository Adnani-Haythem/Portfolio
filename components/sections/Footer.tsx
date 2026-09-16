import { IDENTITY, SOCIALS } from "@/lib/portfolio-data";

export function Footer() {
  const links = [
    SOCIALS.resume && { label: "Download CV", href: SOCIALS.resume, download: true },
    SOCIALS.github && { label: "GitHub", href: SOCIALS.github },
    SOCIALS.linkedin && { label: "LinkedIn", href: SOCIALS.linkedin },
    SOCIALS.email && { label: "Email", href: `mailto:${SOCIALS.email}` },
  ].filter(Boolean) as { label: string; href: string; download?: boolean }[];

  return (
    <footer className="border-t border-slate-700/20 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex items-center gap-3 text-[#94b8d4]">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-[#94b8d4]/30 font-mono text-xs">{IDENTITY.initials}</span>
            <h2 className="text-slate-100 text-lg font-bold">{IDENTITY.name}</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs text-center md:text-left">
            {IDENTITY.role}. Building, learning, and turning ideas into useful software.
          </p>
        </div>

        {links.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a key={link.label} href={link.href} download={link.download} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-slate-400 hover:text-[#94b8d4] transition-colors text-sm">
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div className="text-slate-500 text-sm font-mono">© {new Date().getFullYear()} HAYTHEM_ADNANI</div>
      </div>
    </footer>
  );
}
