import type { Metadata } from "next";
import { ArrowRight, ButtonLink } from "@/components/ui/Button";
import { Grain } from "@/components/ui/Grain";
import { Wordmark } from "@/components/site/Wordmark";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] flex-col justify-between py-12">
      <Grain />
      <div className="shell">
        <Wordmark className="text-bone" />
      </div>

      <div className="shell">
        <p className="eyebrow">Error 404</p>
        <h1 className="display-xl mt-6 max-w-[14ch] text-bone">
          This one doesn&apos;t exist yet.
        </h1>
        <p className="lede mt-6 max-w-md">
          Still building. Head back to the start and follow the journey from
          there.
        </p>
        <div className="mt-10">
          <ButtonLink href="/" variant="solid" icon={<ArrowRight />}>
            Back home
          </ButtonLink>
        </div>
      </div>

      <div className="shell">
        <span className="eyebrow text-[0.6rem]">Kamo PK</span>
      </div>
    </main>
  );
}
