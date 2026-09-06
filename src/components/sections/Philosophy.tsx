import { philosophy } from "@/content/site";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="shell scroll-mt-24 border-t border-hairline py-28 md:py-44"
    >
      <Reveal>
        <SectionLabel index="06">{philosophy.eyebrow}</SectionLabel>
      </Reveal>

      <h2 className="mt-16 text-bone">
        {philosophy.headline.map((line, index) => (
          <span key={line} className="block">
            <RevealWords
              text={line}
              delay={index * 0.1}
              className="display-xl"
              wordClassName={index === 2 ? "text-violet-soft" : undefined}
            />
          </span>
        ))}
      </h2>

      <div className="mt-24 grid gap-px overflow-hidden border-t border-hairline bg-hairline md:grid-cols-3">
        {philosophy.principles.map((principle, index) => (
          <Reveal key={principle.title} delay={index * 0.08} className="h-full">
            <div className="h-full bg-ink py-10 md:p-10">
              <span className="eyebrow text-[0.58rem] text-violet-soft/70">
                {principle.index}
              </span>
              <h3 className="display-md mt-6 max-w-[16ch] text-bone">
                {principle.title}
              </h3>
              <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-mute">
                {principle.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
