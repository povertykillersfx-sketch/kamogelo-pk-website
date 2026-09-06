import Image from "next/image";
import { cn } from "@/lib/cn";

type FrameProps = {
  src?: string | null;
  alt: string;
  /** Text shown inside an empty slot so the layout still reads as art direction. */
  label?: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
};

/**
 * Every photography / video slot on the site goes through this component.
 * When an asset exists it is graded and cropped; when it doesn't, the slot
 * renders as a deliberate cinematic still rather than a broken image.
 */
export function Frame({
  src,
  alt,
  label,
  caption,
  className,
  imageClassName,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  children,
}: FrameProps) {
  return (
    <div className={cn("still group/frame", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-cover contrast-[1.06] saturate-[0.92] transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/frame:scale-[1.04]",
            imageClassName,
          )}
        />
      ) : (
        <EmptyStill label={label} caption={caption} />
      )}

      <CornerTicks />
      {children}
    </div>
  );
}

function EmptyStill({ label, caption }: { label?: string; caption?: string }) {
  return (
    <div aria-hidden className="absolute inset-0">
      <div className="absolute inset-0 [background:repeating-linear-gradient(115deg,transparent_0px,transparent_9px,rgba(255,255,255,0.022)_9px,rgba(255,255,255,0.022)_10px)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="font-display text-[clamp(1.6rem,4vw,3rem)] font-extrabold uppercase leading-none tracking-[-0.04em] text-white/[0.07]">
          {label ?? "KAMO PK"}
        </span>
        {caption ? (
          <span className="eyebrow text-[0.6rem] text-white/25">{caption}</span>
        ) : null}
      </div>
    </div>
  );
}

function CornerTicks() {
  return (
    <div aria-hidden className="absolute inset-0">
      <span className="absolute left-4 top-4 h-4 w-px bg-white/20" />
      <span className="absolute left-4 top-4 h-px w-4 bg-white/20" />
      <span className="absolute bottom-4 right-4 h-4 w-px bg-white/20" />
      <span className="absolute bottom-4 right-4 h-px w-4 bg-white/20" />
    </div>
  );
}
