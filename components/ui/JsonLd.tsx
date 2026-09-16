import { IDENTITY, SOCIALS, STACK_GROUPS } from "@/lib/portfolio-data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function PersonJsonLd() {
  const sameAs = [SOCIALS.github, SOCIALS.linkedin].filter(Boolean);
  const knowsAbout = STACK_GROUPS.flatMap((group) => group.items);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: IDENTITY.name,
    url: BASE_URL,
    jobTitle: IDENTITY.role,
    ...(IDENTITY.location ? { address: { "@type": "PostalAddress", addressLocality: IDENTITY.location } } : {}),
    ...(SOCIALS.email ? { email: SOCIALS.email } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    knowsAbout,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${IDENTITY.name} — Portfolio`,
    url: BASE_URL,
    description: `${IDENTITY.name}'s personal portfolio featuring software projects, skills, and selected work.`,
    author: { "@type": "Person", name: IDENTITY.name },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
