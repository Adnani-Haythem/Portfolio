import { BriefcaseBusiness, MapPin } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionAccent } from "@/components/ui/SectionAccent";
import { EXPERIENCE } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-20 lg:px-20">
      <SectionAccent label="// experience" position="top-right" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-[#94b8d4]">Applied work</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100">Research & Internship Experience</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
            Building practical systems at the intersection of software engineering, AI, and cybersecurity.
          </p>
        </div>

        <div className="space-y-6">
          {EXPERIENCE.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08} className="rounded-2xl border border-[#7b8fa8]/20 bg-[#10141c]/80 p-6 sm:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-[#94b8d4]">
                    <BriefcaseBusiness size={18} />
                    <span className="font-mono text-xs uppercase tracking-[0.18em]">{item.role}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-300">{item.organization}</p>
                </div>
                <div className="flex flex-wrap gap-3 font-mono text-xs text-slate-500 lg:justify-end">
                  <span>{item.period}</span>
                  <span className="inline-flex items-center gap-1"><MapPin size={13} /> {item.location}</span>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#69b7ff]" />
                    <p>{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-[#7b8fa8]/15 pt-5">
                {item.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-[#7b8fa8]/20 bg-[#7b8fa8]/10 px-2.5 py-1 font-mono text-[10px] text-[#94b8d4]">{tech}</span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
