import * as motion from "motion/react-client";
import { ArrowUpRight } from "lucide-react";

import { socialIcons } from "@/components/icons/social-icons";
import { Container } from "@/components/layout/container";
import { NewsletterCard } from "@/components/sections/newsletter-card";
import { GridPattern } from "@/components/ui/grid-pattern";
import { MagicCard } from "@/components/ui/magic-card";
import { newsletterContent, socialContent } from "@/config/home";
import { siteConfig } from "@/config/site";
import { inViewFadeUp } from "@/lib/motion";

export function NewsletterSocialSection() {
  return (
    <section id={newsletterContent.id} className="bg-background py-16 md:py-20 lg:py-24">
      <Container className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
        <motion.div {...inViewFadeUp(0, 36)}>
          <NewsletterCard />
        </motion.div>

        <motion.div
          id={socialContent.id}
          {...inViewFadeUp(0.1, 36)}
          className="relative isolate flex flex-col overflow-hidden rounded-[32px] bg-light-orange p-8 sm:p-10"
        >
          <GridPattern
            width={40}
            height={40}
            className="-z-10 fill-transparent stroke-secondary/20 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
          />
          <h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-primary sm:text-4xl">
            {socialContent.heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{socialContent.description}</p>

          <ul className="mt-8 grid flex-1 grid-cols-2 gap-3">
            {siteConfig.social.map((item) => {
              const Icon = socialIcons[item.platform];

              return (
                <li key={item.platform}>
                  <MagicCard
                    className="h-full rounded-2xl shadow-sm"
                    gradientSize={160}
                    gradientFrom="var(--secondary)"
                    gradientTo="var(--accent)"
                    gradientColor="var(--light-orange)"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social flex h-full flex-col justify-between gap-6 p-5 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      <span className="flex items-start justify-between">
                        <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-white transition-colors duration-300 group-hover/social:bg-secondary">
                          <Icon className="size-5" />
                        </span>
                        <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover/social:rotate-45 group-hover/social:text-primary" />
                      </span>
                      <span className="text-base font-semibold text-primary">{item.label}</span>
                    </a>
                  </MagicCard>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
