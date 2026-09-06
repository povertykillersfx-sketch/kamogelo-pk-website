import { nav, site, social } from "@/content/site";
import { ArrowUpRight } from "@/components/ui/Button";

const links = [
  { label: social.instagram.label, href: social.instagram.href, external: true },
  { label: social.youtube.label, href: social.youtube.href, external: true },
  { label: social.telegram.label, href: social.telegram.href, external: true },
  {
    label: "Business Inquiries",
    href: `mailto:${site.email}`,
    external: false,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-4xl font-extrabold uppercase leading-none tracking-[-0.04em] text-bone md:text-5xl">
              Kamo PK
            </p>
            <p className="eyebrow mt-5 text-[0.62rem]">
              {site.roleList.join(" · ")}
            </p>
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-mute">
              {site.statement}
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="eyebrow text-[0.58rem]">Navigate</p>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-bone-dim transition-colors duration-300 hover:text-bone"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="eyebrow text-[0.58rem]">Connect</p>
            <ul className="mt-6 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : null)}
                    className="group inline-flex items-center gap-2 text-sm text-bone-dim transition-colors duration-300 hover:text-bone"
                  >
                    {link.label}
                    <ArrowUpRight className="h-2.5 w-2.5 opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mute">
            © {new Date().getFullYear()} {site.name} — {site.location}
          </p>
          <a
            href="#top"
            className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mute transition-colors duration-300 hover:text-bone"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
