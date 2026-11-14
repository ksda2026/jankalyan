import Image from "next/image";
import type { ReactNode } from "react";
import * as motion from "motion/react-client";
import { HeartHandshake } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PillLink } from "@/components/shared/pill-link";
import { SectionHeading } from "@/components/shared/section-heading";
import { ctaContent } from "@/config/home";
import { inViewFadeUp } from "@/lib/motion";

type DetailViewProps = {
  description: string;
  image: { src: string; alt: string };
  category?: string;
  moreTitle: string;
  more: ReactNode;
};

// Body of a project / activity / event detail page (title & breadcrumbs live in the PageHero).
export function DetailView({ description, image, category, moreTitle, more }: DetailViewProps) {
  const { primaryAction, secondaryAction } = ctaContent;
  const moreHighlight = moreTitle.split(" ").pop();

  return (
    <>
      <section className="bg-background py-16 md:py-20 lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <motion.div
            {...inViewFadeUp(0)}
            className="relative aspect-4/3 overflow-hidden rounded-[32px] bg-light-blue shadow-2xl shadow-primary/10 ring-1 ring-primary/5"
          >
            <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 720px, 100vw" className="object-cover" />
          </motion.div>

          <motion.div {...inViewFadeUp(0.1)}>
            {category && (
              <span className="inline-flex rounded-full bg-light-orange px-3.5 py-1.5 text-xs font-semibold text-primary">
                {category}
              </span>
            )}
            <p className="mt-5 text-lg leading-relaxed text-foreground sm:text-xl">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillLink
                href={primaryAction.href}
                label={primaryAction.label}
                icon={HeartHandshake}
                rotateIcon={false}
                shine
              />
              <PillLink href={secondaryAction.href} label={secondaryAction.label} variant="outline" />
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-background-secondary py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeading heading={moreTitle} highlight={moreHighlight} />
          <div className="mt-10 lg:mt-12">{more}</div>
        </Container>
      </section>
    </>
  );
}
