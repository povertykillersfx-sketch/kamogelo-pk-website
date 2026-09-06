"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  contentCategories,
  contentPieces,
  social,
  type ContentCategory,
  type ContentPiece,
} from "@/content/site";
import { ArrowUpRight, ButtonLink } from "@/components/ui/Button";
import { Frame } from "@/components/ui/Frame";
import { PlayGlyph } from "@/components/ui/PlayGlyph";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/cn";

export function Content() {
  const [active, setActive] = useState<ContentCategory>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? contentPieces
        : contentPieces.filter((piece) => piece.category === active),
    [active],
  );

  return (
    <section
      id="content"
      className="scroll-mt-24 border-t border-hairline bg-ink-soft py-24 md:py-36"
    >
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionLabel index="04">Content</SectionLabel>
            <h2 className="display-lg mt-6 max-w-2xl text-bone">
              Documenting it while it happens.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div
              role="tablist"
              aria-label="Content categories"
              className="flex flex-wrap gap-2"
            >
              {contentCategories.map((category) => {
                const isActive = category === active;
                return (
                  <button
                    key={category}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setActive(category)}
                    className={cn(
                      "relative rounded-full border px-5 py-2.5 font-mono text-[0.62rem] uppercase tracking-[0.18em] transition-colors duration-500",
                      isActive
                        ? "border-bone bg-bone text-ink"
                        : "border-hairline-strong text-bone-dim hover:border-bone/60 hover:text-bone",
                    )}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <motion.div
          layout
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((piece) => (
              <motion.div
                key={piece.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  piece.featured && active === "All"
                    ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                    : undefined,
                )}
              >
                <ContentCard
                  piece={piece}
                  tall={Boolean(piece.featured && active === "All")}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-14 flex flex-col items-start gap-4 border-t border-hairline pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-mute">
            New long-form every week. Short-form almost daily.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              href={social.youtube.href}
              variant="solid"
              size="md"
              icon={<ArrowUpRight />}
            >
              YouTube
            </ButtonLink>
            <ButtonLink
              href={social.instagram.href}
              variant="outline"
              size="md"
              icon={<ArrowUpRight />}
            >
              Instagram
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentCard({ piece, tall }: { piece: ContentPiece; tall: boolean }) {
  const [playing, setPlaying] = useState(false);
  const poster =
    piece.poster ??
    (piece.videoId ? `https://i.ytimg.com/vi/${piece.videoId}/maxresdefault.jpg` : null);

  const media = (
    <Frame
      src={poster}
      alt={piece.title}
      label={piece.category}
      caption={piece.meta}
      sizes={tall ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 640px) 100vw, 33vw"}
      className={cn(
        "w-full rounded-sm",
        tall ? "aspect-video lg:aspect-4/3" : "aspect-video",
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-ink/25 transition-colors duration-700 group-hover:bg-ink/10"
      />
      <span className="absolute inset-0 grid place-items-center">
        <PlayGlyph className={tall ? "h-20 w-20" : undefined} />
      </span>
    </Frame>
  );

  const caption = (
    <div className="mt-5">
      <div className="flex items-center gap-3">
        <span className="eyebrow text-[0.58rem] text-violet-soft/80">
          {piece.category}
        </span>
        <span aria-hidden className="h-px w-5 bg-hairline-strong" />
        <span className="eyebrow text-[0.58rem]">{piece.meta}</span>
      </div>
      <h3
        className={cn(
          "mt-3 font-display font-semibold leading-tight tracking-[-0.02em] text-bone transition-colors duration-500 group-hover:text-white",
          tall ? "text-2xl md:text-3xl" : "text-lg",
        )}
      >
        {piece.title}
      </h3>
    </div>
  );

  if (playing && piece.videoId) {
    return (
      <div className="h-full">
        <div
          className={cn(
            "w-full overflow-hidden rounded-sm bg-black",
            tall ? "aspect-video lg:aspect-4/3" : "aspect-video",
          )}
        >
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${piece.videoId}?autoplay=1&rel=0`}
            title={piece.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        {caption}
      </div>
    );
  }

  if (piece.videoId) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className="group block h-full w-full text-left"
      >
        {media}
        {caption}
        <span className="sr-only">Play video</span>
      </button>
    );
  }

  return (
    <a
      href={piece.href ?? social.youtube.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full w-full"
    >
      {media}
      {caption}
    </a>
  );
}
