import { SectionAccent } from "@/components/ui/SectionAccent";
import { STACK_GROUPS } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-20 lg:px-20">
      <SectionAccent label="// stack" position="top-right" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-slate-100 text-3xl font-bold tracking-tight">Technical Stack</h2>
          <p className="text-slate-400 mt-2 font-mono text-sm">Tools and technologies I use across cybersecurity, AI, backend engineering, networking, and applied research.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STACK_GROUPS.map((group) => (
            <div key={group.title} className="rounded-2xl glass-card p-6">
              <div className="text-sm font-semibold text-[#94b8d4] mb-4">{group.title}</div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full border border-[#7b8fa8]/25 bg-[#7b8fa8]/8 text-sm text-[#94b8d4]">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
