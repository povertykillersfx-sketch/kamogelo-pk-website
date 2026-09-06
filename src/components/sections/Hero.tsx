"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { hero, site } from "@/content/site";
import { ArrowRight, ButtonLink } from "@/components/ui/Button";
import { Frame } from "@/components/ui/Frame";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-10 pt-28"
    >
      {/* Media layer */}
      <motion.div
        aria-hidden={!hero.media.image && !hero.media.video}
        style={reduced ? undefined : { y: mediaY, scale: mediaScale }}
        className="absolute inset-0 -z-10"
      >
        {hero.media.video ? (
          <video
            className="h-full w-full object-cover contrast-[1.05] saturate-[0.9]"
            autoPlay
            muted
            loop
            playsInline
            poster={hero.media.image ?? undefined}
          >
            <source src={hero.media.video} type="video/mp4" />
          </video>
        ) : (
          <Frame
            src={hero.media.image}
            alt={hero.media.alt}
            priority
            sizes="100vw"
            className="h-full w-full"
          />
        )}
      </motion.div>

      {/* Scrims keep the type legible over any future footage */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background:linear-gradient(180deg,rgba(5,4,7,0.86)_0%,rgba(5,4,7,0.28)_38%,rgba(5,4,7,0.92)_92%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background:linear-gradient(90deg,rgba(5,4,7,0.72)_0%,transparent_58%)]"
      />

      <motion.div
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
        className="shell relative w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-violet-soft" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-soft" />
          </span>
          <span className="eyebrow text-bone-dim">{site.location}</span>
        </motion.div>

        <h1 className="display-hero text-bone">
          {hero.headline.split(" ").map((word, index) => (
            <span
              key={word}
              className="inline-block overflow-hidden pb-[0.06em] align-bottom"
            >
              <motion.span
                className="inline-block"
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.25, delay: 0.2 + index * 0.1, ease: EASE }}
              >
                {word}
                {index === 0 ? "\u00A0" : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: EASE }}
          className="mt-8 grid gap-8 border-t border-hairline pt-8 md:grid-cols-12 md:items-start"
        >
          <div className="md:col-span-5">
            <h2 className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.72rem] uppercase tracking-[0.28em] text-bone sm:text-[0.8rem]">
              {site.roleList.map((role, index) => (
                <span key={role} className="flex items-center gap-3">
                  {role}
                  {index < site.roleList.length - 1 ? (
                    <span aria-hidden className="text-violet-soft/70">
                      /
                    </span>
                  ) : null}
                </span>
              ))}
            </h2>
          </div>

          <p className="lede max-w-xl text-balance md:col-span-7 md:justify-self-end md:text-right">
            {hero.supporting}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: EASE }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <ButtonLink
            href={hero.primaryCta.href}
            variant="solid"
            icon={<ArrowRight />}
          >
            {hero.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="outline">
            {hero.secondaryCta.label}
          </ButtonLink>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="shell mt-14 flex items-end justify-between gap-6"
      >
        <div className="flex items-center gap-4">
          <span aria-hidden className="relative block h-10 w-px bg-white/15">
            <span className="animate-scroll-cue absolute inset-0 block bg-violet-soft" />
          </span>
          <span className="eyebrow text-[0.6rem]">Scroll</span>
        </div>
        <span className="eyebrow hidden text-[0.6rem] sm:block">
          Est. 2023 — Still building
        </span>
      </motion.div>
    </section>
  );
}
