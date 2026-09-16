import { Award, Languages as LanguagesIcon, Presentation, Users } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionAccent } from "@/components/ui/SectionAccent";
import { ACTIVITIES, CERTIFICATIONS, CONFERENCE, LANGUAGES } from "@/lib/portfolio-data";

export function Credentials() {
  return (
    <section id="credentials" className="relative overflow-hidden px-6 py-20 lg:px-20">
      <SectionAccent label="// credentials" position="top-right" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-[#94b8d4]">Beyond coursework</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100">Credentials & Activities</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn className="rounded-2xl border border-[#7b8fa8]/20 bg-[#10141c]/80 p-6">
            <div className="mb-5 flex items-center gap-3">
              <Award className="text-[#94b8d4]" size={20} />
              <h3 className="text-lg font-semibold text-slate-100">Certifications & Development</h3>
            </div>
            <div className="space-y-4">
              {CERTIFICATIONS.map((item) => (
                <div key={item.name} className="border-b border-[#7b8fa8]/15 pb-4 last:border-0 last:pb-0">
                  <div className="flex gap-4 justify-between">
                    <div>
                      <p className="font-medium text-slate-200">{item.name}</p>
                      <p className="mt-1 text-sm text-slate-400">{item.issuer}</p>
                    </div>
                    <span className="shrink-0 font-mono text-[10px] text-slate-500">{item.date}</span>
                  </div>
                  {item.note && <p className="mt-2 text-xs leading-relaxed text-slate-500">{item.note}</p>}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="rounded-2xl border border-[#7b8fa8]/20 bg-[#10141c]/80 p-6">
            <div className="mb-5 flex items-center gap-3">
              <Presentation className="text-[#94b8d4]" size={20} />
              <h3 className="text-lg font-semibold text-slate-100">Conference & Presentation</h3>
            </div>
            <p className="font-medium text-slate-200">{CONFERENCE.name}</p>
            <p className="mt-1 font-mono text-xs text-[#94b8d4]">{CONFERENCE.venue} · {CONFERENCE.date}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">{CONFERENCE.description}</p>

            <div className="mt-8 border-t border-[#7b8fa8]/15 pt-6">
              <div className="mb-4 flex items-center gap-3">
                <LanguagesIcon className="text-[#94b8d4]" size={20} />
                <h3 className="text-lg font-semibold text-slate-100">Languages</h3>
              </div>
              <div className="space-y-3">
                {LANGUAGES.map((item) => (
                  <div key={item.language} className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-slate-300">{item.language}</span>
                    <span className="font-mono text-xs text-slate-500">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} className="mt-6 rounded-2xl border border-[#7b8fa8]/20 bg-[#10141c]/80 p-6">
          <div className="mb-6 flex items-center gap-3">
            <Users className="text-[#94b8d4]" size={20} />
            <h3 className="text-lg font-semibold text-slate-100">Extracurricular Activities</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {ACTIVITIES.map((item) => (
              <div key={`${item.organization}-${item.title}`} className="rounded-xl border border-[#7b8fa8]/15 bg-[#0b0e13]/55 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-slate-200">{item.title}</p>
                    <p className="mt-1 text-sm text-[#94b8d4]">{item.organization}</p>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] text-slate-500">{item.period}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
