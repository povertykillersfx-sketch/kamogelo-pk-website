import { pillars } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="shell scroll-mt-24 border-t border-hairline py-24 md:py-36"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <SectionLabel index="03">What I do</SectionLabel>
          <h2 className="display-lg mt-6 max-w-xl text-bone">
            Three lanes. One compounding effort.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-sm text-sm leading-relaxed text-mute">
            Everything I do feeds something else. The trading funds the
            building, the building creates the story, the story brings the
            people.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline lg:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 0.08}>
            <article className="group relative flex h-full flex-col bg-ink p-8 transition-colors duration-700 hover:bg-surface md:p-10">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-violet-soft transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />

              <div className="flex items-start justify-between">
                <span className="eyebrow text-[0.6rem]">{pillar.index}</span>
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-white/15 transition-colors duration-700 group-hover:bg-violet-soft"
                />
              </div>

              <h3 className="display-lg mt-16 text-bone md:mt-24">
                {pillar.title}
              </h3>

              <p className="mt-6 max-w-[34ch] text-sm leading-relaxed text-bone-dim">
                {pillar.summary}
              </p>

              <ul className="mt-10 space-y-3 border-t border-hairline pt-6">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-mute"
                  >
                    <span
                      aria-hidden
                      className="h-px w-4 bg-hairline-strong transition-all duration-500 group-hover:w-7 group-hover:bg-violet-soft"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
