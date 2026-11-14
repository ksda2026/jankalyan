import * as motion from "motion/react-client";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/sections/contact-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { SocialLinks } from "@/components/shared/social-links";
import { GridPattern } from "@/components/ui/grid-pattern";
import { footerContent } from "@/config/footer";
import { contactContent } from "@/config/home";
import { siteConfig } from "@/config/site";
import { inViewFadeUp } from "@/lib/motion";

export function ContactSection() {
  const { id, eyebrow, heading, highlight, description } = contactContent;
  const { address, phone, email } = siteConfig.contact;

  const details = [
    { icon: MapPin, ...address, href: undefined },
    { icon: Phone, ...phone, href: `tel:${phone.value.replace(/\s+/g, "")}` },
    { icon: Mail, ...email, href: `mailto:${email.value}` },
  ];

  return (
    <section id={id} className="relative isolate overflow-hidden bg-light-blue py-16 md:py-20 lg:py-24">
      <GridPattern
        width={48}
        height={48}
        className="-z-10 fill-transparent stroke-primary/[0.07] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]"
      />

      <Container>
        <SectionHeading
          align="center"
          eyebrow={eyebrow}
          heading={heading}
          highlight={highlight}
          description={description}
        />

        <motion.div
          {...inViewFadeUp(0.1, 40)}
          className="mt-10 grid overflow-hidden rounded-[32px] bg-white shadow-2xl shadow-primary/10 ring-1 ring-primary/5 lg:mt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <aside className="relative isolate flex flex-col overflow-hidden bg-primary p-8 text-white sm:p-10">
            <GridPattern
              width={40}
              height={40}
              className="-z-10 fill-transparent stroke-white/[0.07] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]"
            />
            <div aria-hidden className="absolute -bottom-28 -right-24 -z-10 size-72 rounded-full bg-secondary/30 blur-[100px]" />

            <p className="text-2xl font-bold leading-snug">{siteConfig.name}</p>
            <span aria-hidden className="mt-4 block h-1 w-12 rounded-full bg-secondary" />

            <ul className="mt-8 space-y-4">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-white">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 block wrap-break-word text-base font-medium text-white transition-colors hover:text-secondary"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-base font-medium text-white">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 lg:mt-auto lg:pt-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">{footerContent.socialTitle}</p>
              <SocialLinks className="mt-4" />
            </div>
          </aside>

          <div className="p-6 sm:p-10">
            <ContactForm />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
