import { cn } from "@/lib/cn";

export function PlayGlyph({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative grid h-16 w-16 place-items-center rounded-full border border-white/25 bg-black/25 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-white group-hover:bg-white",
        className,
      )}
    >
      <svg
        viewBox="0 0 14 16"
        aria-hidden
        className="ml-0.5 h-4 w-4 fill-white transition-colors duration-500 group-hover:fill-ink"
      >
        <path d="M0 1.2A1 1 0 0 1 1.53.36l11 6.8a1 1 0 0 1 0 1.7l-11 6.8A1 1 0 0 1 0 14.8V1.2Z" />
      </svg>
    </span>
  );
}
