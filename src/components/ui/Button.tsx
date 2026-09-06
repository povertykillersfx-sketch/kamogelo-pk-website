import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "accent";
type Size = "md" | "lg";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
};

const base =
  "group relative inline-flex select-none items-center justify-center gap-3 overflow-hidden rounded-full font-mono uppercase tracking-[0.18em] transition-[color,border-color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:-translate-y-0.5";

const sizes: Record<Size, string> = {
  md: "px-6 py-3.5 text-[0.66rem]",
  lg: "px-8 py-4.5 text-[0.7rem] sm:px-10",
};

const variants: Record<Variant, { shell: string; sweep: string }> = {
  solid: {
    shell: "bg-bone text-ink hover:text-ink",
    sweep: "bg-white",
  },
  outline: {
    shell:
      "border border-hairline-strong text-bone hover:border-bone hover:text-ink",
    sweep: "bg-bone",
  },
  accent: {
    shell:
      "border border-violet/45 text-bone hover:border-violet hover:text-white",
    sweep: "bg-violet",
  },
};

export function ButtonLink({
  children,
  variant = "outline",
  size = "lg",
  icon,
  className,
  ...props
}: ButtonLinkProps) {
  const styles = variants[variant];
  const external = props.href?.startsWith("http");

  return (
    <a
      {...props}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : null)}
      className={cn(base, sizes[size], styles.shell, className)}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 -z-0 translate-y-full rounded-full transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0",
          styles.sweep,
        )}
      />
      <span className="relative z-10 whitespace-nowrap">{children}</span>
      {icon ? (
        <span className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
          {icon}
        </span>
      ) : null}
    </a>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={cn("h-3 w-3", className)}
    >
      <path
        d="M1 8h13M9 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={cn("h-3 w-3", className)}
    >
      <path
        d="M4 12L12 4M12 4H5.5M12 4v6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
