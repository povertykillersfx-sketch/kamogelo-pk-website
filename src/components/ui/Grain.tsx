const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")";

/** Full-page film grain + vignette. Purely decorative, never interactive. */
export function Grain() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-50">
      <div
        className="absolute inset-0 opacity-[0.16] mix-blend-soft-light"
        style={{ backgroundImage: NOISE, backgroundSize: "240px 240px" }}
      />
      <div className="absolute inset-0 [background:radial-gradient(120%_100%_at_50%_50%,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
