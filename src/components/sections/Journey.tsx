"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { journey } from "@/content/site";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const HEADER = {
  index: "02",
  label: "Journey",
  title: "Eight years, one direction.",
  intro:
    "Every milestone here started as something I wrote down before I had any proof it was possible.",
};

export function Journey() {
  const reduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop && !reduced) return <HorizontalJourney />;
  return <VerticalJourney />;
}

/* -------------------------------------------------------------------------- */
/* Desktop — scroll-driven horizontal track                                    */
/* -------------------------------------------------------------------------- */

function HorizontalJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const smoothX = useSpring(x, { stiffness: 120, damping: 26, mass: 0.4 });
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative scroll-mt-0 border-t border-hairline"
      style={{ height: `calc(100svh + ${distance}px)` }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden pt-28">
        <div className="shell flex items-end justify-between gap-10">
          <div>
            <SectionLabel index={HEADER.index}>{HEADER.label}</SectionLabel>
            <h2 className="display-lg mt-6 max-w-lg text-bone">{HEADER.title}</h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-relaxed text-mute xl:block">
            {HEADER.intro}
          </p>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x: smoothX }}
          className="my-auto flex w-max items-stretch pb-10 will-change-transform"
        >
          <div className="w-[max(1.25rem,calc((100vw-88rem)/2+4rem))] shrink-0" />
          {journey.map((item, index) => (
            <TrackCard key={item.age} item={item} index={index} />
          ))}
          <div className="w-[20vw] shrink-0" />
        </motion.div>

        <div className="shell pb-10">
          <div className="relative h-px w-full bg-hairline">
            <motion.span
              style={{ scaleX: progressScale }}
              className="absolute inset-0 block origin-left bg-violet-soft"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="eyebrow text-[0.6rem]">
              {journey[0].age} — {journey[journey.length - 1].age}
            </span>
            <span className="eyebrow text-[0.6rem]">Keep scrolling</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrackCard({
  item,
  index,
}: {
  item: (typeof journey)[number];
  index: number;
}) {
  const isLast = index === journey.length - 1;

  return (
    <article className="group relative w-[26rem] shrink-0 pr-14">
      {/* Continuous timeline rule with a node per milestone */}
      <span
        aria-hidden
        className="absolute left-0 right-0 top-[7.5rem] h-px bg-hairline"
      />
      <span
        aria-hidden
        className={`absolute left-0 top-[7.5rem] block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-500 ${
          isLast ? "bg-gold" : "bg-violet-soft"
        }`}
      />

      <div className="flex h-[7.5rem] items-end pb-6">
        <span className="font-display text-[7rem] font-extrabold leading-[0.7] tracking-[-0.06em] text-white/10 transition-colors duration-700 group-hover:text-white/25">
          {item.age}
        </span>
      </div>

      <div className="pt-10">
        <span className="eyebrow text-[0.6rem] text-violet-soft/80">
          {item.year}
        </span>
        <h3 className="display-md mt-4 max-w-[18ch] text-bone">{item.title}</h3>
        <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-mute">
          {item.body}
        </p>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* Mobile / reduced motion — vertical timeline                                 */
/* -------------------------------------------------------------------------- */

function VerticalJourney() {
  return (
    <section
      id="journey"
      className="shell scroll-mt-24 border-t border-hairline py-24 md:py-32"
    >
      <Reveal>
        <SectionLabel index={HEADER.index}>{HEADER.label}</SectionLabel>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="display-lg mt-6 max-w-xl text-bone">{HEADER.title}</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-mute">
          {HEADER.intro}
        </p>
      </Reveal>

      <ol className="relative mt-16 border-l border-hairline">
        {journey.map((item, index) => (
          <Reveal
            as="li"
            key={item.age}
            delay={index * 0.05}
            className="relative pb-14 pl-8 last:pb-0 sm:pl-12"
          >
            <span
              aria-hidden
              className={`absolute left-0 top-2 block h-2 w-2 -translate-x-1/2 rounded-full ${
                index === journey.length - 1 ? "bg-gold" : "bg-violet-soft"
              }`}
            />
            <div className="flex items-baseline gap-4">
              <span className="font-display text-5xl font-extrabold leading-none tracking-[-0.05em] text-white/25 sm:text-6xl">
                {item.age}
              </span>
              <span className="eyebrow text-[0.6rem] text-violet-soft/80">
                {item.year}
              </span>
            </div>
            <h3 className="display-md mt-5 text-bone">{item.title}</h3>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-mute">
              {item.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
