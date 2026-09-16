import { GraduationCap, MapPin } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionAccent } from "@/components/ui/SectionAccent";
import { EDUCATION } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden px-6 py-20 lg:px-20">
      <SectionAccent label="// education" position="top-right" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-[#94b8d4]">Academic path</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100">Education</h2>
        </div>

        <div className="relative space-y-5 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-px before:bg-[#7b8fa8]/20 sm:before:left-[23px]">
          {EDUCATION.map((item, index) => (
            <FadeIn key={`${item.school}-${item.degree}`} delay={index * 0.08} className="relative pl-14 sm:pl-16">
              <div className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-[#94b8d4]/30 bg-[#0d0f14] text-[#94b8d4] sm:h-12 sm:w-12">
                <GraduationCap size={19} />
              </div>
              <div className="rounded-2xl border border-[#7b8fa8]/20 bg-[#10141c]/70 p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{item.degree}</h3>
                    <p className="mt-1 text-sm text-[#94b8d4]">{item.school}</p>
                  </div>
                  <div className="shrink-0 font-mono text-xs text-slate-500">
                    <div>{item.period}</div>
                    <div className="mt-1 inline-flex items-center gap-1"><MapPin size={12} /> {item.location}</div>
                  </div>
                </div>
                {item.details && (
                  <div className="mt-4 space-y-2 border-t border-[#7b8fa8]/15 pt-4">
                    {item.details.map((detail) => (
                      <p key={detail} className="text-sm leading-relaxed text-slate-400">{detail}</p>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
