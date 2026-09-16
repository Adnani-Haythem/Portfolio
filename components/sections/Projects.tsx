"use client";

import { useState } from "react";
import { ArrowUpRight, Code2, ExternalLink, Github } from "lucide-react";
import { SectionAccent } from "@/components/ui/SectionAccent";
import { ALL_PROJECTS } from "@/lib/portfolio-data";

export function Projects() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-20 lg:px-20">
      <SectionAccent label="// projects" position="top-right" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100">Selected Projects</h2>
          <div className="h-1 w-20 bg-[#94b8d4]" />
          <p className="mt-2 max-w-2xl font-mono text-sm text-slate-400">
            Selected work across AI security, cybersecurity automation, applied machine learning, and networked systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ALL_PROJECTS.map((project, index) => {
            const open = active === project.slug;
            return (
              <article key={project.slug} className="group relative min-h-[390px] rounded-2xl border border-[#7b8fa8]/20 bg-[#10141c]/80 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#94b8d4]/50 to-transparent" />
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#94b8d4]">{project.category}</span>
                  <span className="font-mono text-xs text-slate-500">{project.year}</span>
                </div>

                <div className="relative mb-6 aspect-video overflow-hidden rounded-xl border border-[#7b8fa8]/20 bg-[#0b0e13]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(105,183,255,0.18),transparent_35%),linear-gradient(135deg,rgba(105,183,255,0.06),transparent_45%)]" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-20 w-20 place-items-center rounded-2xl border border-[#94b8d4]/25 bg-[#94b8d4]/5 text-[#94b8d4] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
                      <Code2 size={34} strokeWidth={1.3} />
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">PROJECT / {String(index + 1).padStart(2, "0")}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-100">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{open ? project.fullDesc : project.shortDesc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="rounded-full border border-[#7b8fa8]/20 bg-[#7b8fa8]/10 px-2.5 py-1 font-mono text-[10px] text-[#94b8d4]">{tag}</span>)}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#7b8fa8]/15 pt-4">
                  <button type="button" onClick={() => setActive(open ? null : project.slug)} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 transition-colors hover:text-[#94b8d4]">
                    {open ? "Show summary" : "Project details"} <ArrowUpRight size={13} />
                  </button>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-[#94b8d4]">
                      <Github size={14} /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-[#94b8d4]">
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
