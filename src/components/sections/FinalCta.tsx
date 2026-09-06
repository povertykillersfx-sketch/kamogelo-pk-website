import { finalCta, hero, social } from "@/content/site";
import { ArrowUpRight, ButtonLink } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal, RevealWords } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section
      id="follow"
      className="relative scroll-mt-24 overflow-hidden border-t border-hairline bg-ink-soft"
    >
      <Marquee items={hero.marquee} className="border-b border-hairline" />

      <div className="shell py-24 text-center md:py-36">
        <h2 className="display-xl mx-auto max-w-[16ch] text-bone">
          <RevealWords text={finalCta.headline} />
        </h2>

        <Reveal delay={0.12}>
          <p className="lede mx-auto mt-8 max-w-md text-balance">
            {finalCta.body}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink
              href={social.instagram.href}
              variant="solid"
              icon={<ArrowUpRight />}
            >
              Instagram
            </ButtonLink>
            <ButtonLink
              href={social.youtube.href}
              variant="outline"
              icon={<ArrowUpRight />}
            >
              YouTube
            </ButtonLink>
            <ButtonLink
              href={social.pkfx.href}
              variant="accent"
              icon={<ArrowUpRight />}
            >
              Join PKFX
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
