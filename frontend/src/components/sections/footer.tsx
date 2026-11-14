import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { SocialLinks } from "@/components/shared/social-links";
import { GridPattern } from "@/components/ui/grid-pattern";
import { footerContent } from "@/config/footer";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">{title}</h3>
      <span aria-hidden className="mt-3 block h-0.5 w-8 rounded-full bg-secondary" />
      <div className="mt-6">{children}</div>
    </div>
  );
}

export function Footer() {
  const { id, brand, quickLinks, focusAreas, contactTitle, socialTitle, copyright, legalLinks } = footerContent;
  const { address, phone, email } = siteConfig.contact;

  const contactItems = [
    { icon: MapPin, ...address, href: undefined },
    { icon: Phone, ...phone, href: `tel:${phone.value.replace(/\s+/g, "")}` },
    { icon: Mail, ...email, href: `mailto:${email.value}` },
  ];

  return (
    <footer id={id} className="relative isolate overflow-hidden bg-primary text-white/70">
      <GridPattern
        width={64}
        height={64}
        className="-z-10 fill-transparent stroke-white/[0.05] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div aria-hidden className="absolute -left-40 -top-40 -z-10 size-[30rem] rounded-full bg-secondary/15 blur-[130px]" />
      <div aria-hidden className="absolute -bottom-40 -right-40 -z-10 size-[30rem] rounded-full bg-accent/20 blur-[130px]" />

      <Container className="grid gap-12 pb-12 pt-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-10 lg:pt-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href={navigation.home}
            aria-label={brand.name}
            className="inline-flex rounded-2xl bg-white p-2 outline-none focus-visible:ring-3 focus-visible:ring-white/50"
          >
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              sizes="120px"
              className="h-18 w-auto"
            />
          </Link>
          <p className="mt-6 text-lg font-bold text-white">{brand.name}</p>
          <p className="mt-3 max-w-sm text-[15px] leading-relaxed">{brand.description}</p>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-white">{socialTitle}</p>
          <SocialLinks className="mt-4" />
        </div>

        <FooterColumn title={quickLinks.title}>
          <ul className="space-y-3">
            {quickLinks.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-[15px] outline-none transition-colors hover:text-white focus-visible:text-white"
                >
                  <ChevronRight className="size-4 text-secondary transition-transform duration-300 group-hover:translate-x-0.5" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title={focusAreas.title}>
          <ul className="space-y-3">
            {focusAreas.items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[15px]">
                <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-secondary" />
                {item}
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title={contactTitle}>
          <ul className="space-y-5">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary ring-1 ring-white/10">
                  <Icon className="size-[18px]" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-0.5 block wrap-break-word text-[15px] text-white/85 transition-colors hover:text-white"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-[15px] text-white/85">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </FooterColumn>
      </Container>

      <Container aria-hidden className="pointer-events-none select-none">
        <svg viewBox="0 0 1200 140" className="block w-full text-white">
          <defs>
            <linearGradient id="footer-wordmark-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.14" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <text
            x="600"
            y="112"
            textAnchor="middle"
            textLength="1190"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#footer-wordmark-fade)"
            className="font-sans text-[124px] font-extrabold"
          >
            {brand.name}
          </text>
        </svg>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-center text-sm sm:flex-row sm:text-left">
          <p>{copyright}</p>
          <ul className="flex items-center gap-3">
            {legalLinks.map((link, index) => (
              <li key={link.label} className="flex items-center gap-3">
                {index > 0 && <span aria-hidden className="h-4 w-px bg-white/20" />}
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
