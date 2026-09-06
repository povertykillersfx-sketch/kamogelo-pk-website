import { about, site } from "@/content/site";
import { Frame } from "@/components/ui/Frame";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  return (
    <section
      id="about"
      className="shell scroll-mt-24 border-t border-hairline py-24 md:py-36"
    >
      <Reveal>
        <SectionLabel index="01">{about.eyebrow}</SectionLabel>
      </Reveal>

      <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <Frame
              src={about.portrait.src}
              alt={about.portrait.alt}
              label="Portrait"
              caption={site.locationShort}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-4/5 w-full rounded-sm lg:sticky lg:top-28"
            />
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <h2 className="display-xl text-bone">
            <RevealWords text={about.headlineLead} />{" "}
            <RevealWords
              text={about.headlineAccent}
              delay={0.12}
              wordClassName="font-editorial font-normal normal-case italic tracking-[-0.02em] text-violet-soft"
            />
          </h2>

          <div className="mt-10 max-w-2xl space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={index * 0.06}>
                <p className="lede">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-3">
            {about.stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.08}
                className="bg-ink px-6 py-8"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-5xl font-extrabold leading-none tracking-[-0.04em] text-bone">
                    {stat.value}
                  </span>
                  <span className="mt-4 block font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.18em] text-mute">
                    {stat.label}
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
