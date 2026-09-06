import { cn } from "@/lib/cn";

function MarqueeTrack({
  items,
  separator,
  duplicate,
}: {
  items: readonly string[];
  separator: string;
  duplicate?: boolean;
}) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center gap-10">
          <span className="display-lg text-bone/85">{item}</span>
          <span className="text-sm text-violet-soft/60">{separator}</span>
        </span>
      ))}
    </div>
  );
}

/**
 * Slow horizontal ticker. The track is duplicated so the -50% translate
 * loops seamlessly; the duplicate is hidden from assistive tech.
 */
export function Marquee({
  items,
  className,
  separator = "✦",
}: {
  items: readonly string[];
  className?: string;
  separator?: string;
}) {
  return (
    <div className={cn("edge-fade-x overflow-hidden py-8", className)}>
      <div className="animate-marquee flex w-max">
        <MarqueeTrack items={items} separator={separator} />
        <MarqueeTrack items={items} separator={separator} duplicate />
      </div>
    </div>
  );
}
