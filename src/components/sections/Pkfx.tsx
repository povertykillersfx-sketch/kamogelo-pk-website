import { pkfx } from "@/content/site";
import { ArrowUpRight, ButtonLink } from "@/components/ui/Button";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Pkfx() {
  return (
    <section
      id="pkfx"
      className="relative scroll-mt-24 overflow-hidden border-t border-hairline bg-surface py-24 md:py-36"
    >
      {/* One restrained ambient wash — the only coloured light on the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl [background:radial-gradient(circle,rgba(157,0,255,0.42)_0%,transparent_68%)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-14 left-0 select-none font-display text-[26vw] font-extrabold leading-none tracking-[-0.06em] text-white/[0.028]"
      >
        PKFX
      </span>

      <div className="shell relative grid gap-16 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="05">{pkfx.eyebrow}</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-violet/40 font-mono text-[0.6rem] tracking-[0.08em] text-violet-soft">
                PK
              </span>
              <div>
                <p className="font-display text-xl font-bold uppercase leading-none tracking-[-0.02em] text-bone">
                  {pkfx.name}
                </p>
                <p className="eyebrow mt-2 text-[0.58rem]">
                  Trading ecosystem · South Africa
                </p>
              </div>
            </div>
          </Reveal>

          <h2 className="display-xl mt-10 max-w-[14ch] text-bone">
            <RevealWords text={pkfx.headline} />
          </h2>

          <Reveal delay={0.1}>
            <p className="lede mt-8 max-w-md">{pkfx.body}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10">
              <ButtonLink
                href={pkfx.cta.href}
                variant="accent"
                icon={<ArrowUpRight />}
              >
                {pkfx.cta.label}
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-4">
          <div className="grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
            {pkfx.features.map((feature, index) => (
              <Reveal
                key={feature.title}
                delay={index * 0.07}
                className="h-full"
              >
                <article className="group flex h-full flex-col justify-between bg-surface p-8 transition-colors duration-700 hover:bg-surface-raised md:p-10">
                  <span className="eyebrow text-[0.58rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-16">
                    <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-bone md:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-mute">
                      {feature.body}
                    </p>
                    <span
                      aria-hidden
                      className="mt-6 block h-px w-6 bg-hairline-strong transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-14 group-hover:bg-violet-soft"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
