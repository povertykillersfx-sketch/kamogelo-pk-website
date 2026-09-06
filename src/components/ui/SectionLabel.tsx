import { cn } from "@/lib/cn";

/** Small mono section marker: "02 — Journey" with a hairline rule. */
export function SectionLabel({
  index,
  children,
  className,
}: {
  index: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="eyebrow text-violet-soft/80">{index}</span>
      <span aria-hidden className="h-px w-8 bg-hairline-strong" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}
