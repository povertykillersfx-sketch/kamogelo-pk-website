import { about, journey, pkfx, site, social } from "@/content/site";

/**
 * Person + WebSite + Organization graph so search engines understand that
 * KAMO PK is the primary entity and PKFX is one of the things he founded.
 */
export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.legalName,
        alternateName: site.name,
        jobTitle: site.roleList.join(", "),
        description: about.paragraphs[0],
        url: site.url,
        email: `mailto:${site.email}`,
        nationality: "South African",
        address: {
          "@type": "PostalAddress",
          addressCountry: "ZA",
          addressLocality: site.location.split(",")[0],
        },
        knowsAbout: [
          "Financial markets",
          "Trading",
          "Entrepreneurship",
          "Content creation",
        ],
        sameAs: [
          social.instagram.href,
          social.youtube.href,
          social.telegram.href,
          social.pkfx.href,
        ],
        founder: { "@id": `${site.url}/#pkfx` },
      },
      {
        "@type": "Organization",
        "@id": `${site.url}/#pkfx`,
        name: pkfx.name,
        alternateName: pkfx.short,
        description: pkfx.body,
        url: pkfx.cta.href,
        founder: { "@id": `${site.url}/#person` },
        areaServed: "ZA",
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: `${site.name} — ${site.role}`,
        description: site.description,
        inLanguage: "en-ZA",
        publisher: { "@id": `${site.url}/#person` },
        about: { "@id": `${site.url}/#person` },
        mainEntity: {
          "@type": "ItemList",
          name: "Journey",
          itemListElement: journey.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: `${item.age} — ${item.title}`,
            description: item.body,
          })),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Content is authored in-repo, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
