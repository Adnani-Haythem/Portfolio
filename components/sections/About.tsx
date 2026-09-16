"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers3, Lightbulb } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ABOUT_SUMMARY, EXPERTISE } from "@/lib/portfolio-data";

const ICONS = [Code2, Layers3, Lightbulb];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const orbit = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rise = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={ref} className="relative flex flex-col justify-center overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <motion.div aria-hidden style={{ rotate: orbit }} className="pointer-events-none absolute -right-16 top-10 h-52 w-52 rounded-full border border-paper/10">
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-accent/70" />
      </motion.div>
      <motion.div aria-hidden style={{ y: rise }} className="pointer-events-none absolute left-6 top-1/3 h-28 w-28 rounded-2xl border border-paper/10 [background:repeating-linear-gradient(45deg,rgba(215,226,234,0.04)_0_6px,transparent_6px_12px)]" />
      <div aria-hidden className="pointer-events-none absolute bottom-6 right-1/4 font-mono text-5xl text-paper/[0.04]">{"{ }"}</div>

      <div className="mx-auto w-full max-w-5xl">
        <h2 data-text="About" className="hero-heading text-[clamp(2rem,5.5vw,3.75rem)] font-black uppercase leading-[0.95] tracking-tight">About</h2>
        <div className="mt-6 max-w-3xl">
          <p className="text-base leading-relaxed text-paper/75 sm:text-lg">{ABOUT_SUMMARY}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {EXPERTISE.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <FadeIn key={item.title} delay={i * 0.1} className="surface-card flex flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <Icon size={20} className="text-accent-soft" />
                  <span className="font-mono text-[10px] text-paper/30">{item.number}</span>
                </div>
                <h3 className="font-semibold text-paper">{item.title}</h3>
                <p className="text-sm leading-relaxed text-paper/60">{item.description}</p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
