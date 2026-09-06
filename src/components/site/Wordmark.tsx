import { cn } from "@/lib/cn";

export function Wordmark({
  className,
  dotClassName,
}: {
  className?: string;
  dotClassName?: string;
}) {
  return (
    <span
      className={cn(
        "font-display text-[0.95rem] font-extrabold uppercase leading-none tracking-[-0.02em]",
        className,
      )}
    >
      Kamo
      <span
        aria-hidden
        className={cn("mx-1 inline-block text-violet-soft", dotClassName)}
      >
        ·
      </span>
      PK
    </span>
  );
}
