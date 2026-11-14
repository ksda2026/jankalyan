import Image from "next/image";
import * as motion from "motion/react-client";
import { HeartHandshake } from "lucide-react";

import { Container } from "@/components/layout/container";
import { HighlightText, serifAccent } from "@/components/shared/highlight-text";
import { PillLink } from "@/components/shared/pill-link";
import { BorderBeam } from "@/components/ui/border-beam";
import { GridPattern } from "@/components/ui/grid-pattern";
import { ctaContent } from "@/config/home";
import { easeOut, inViewFadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function CtaBanner() {
  const { id, heading, highlight, description, primaryAction, secondaryAction, image } = ctaContent;

  return (
    <section id={id} className="bg-background py-16 md:py-20 lg:py-24">
      <Container>
        <motion.div
          {...inViewFadeUp(0, 40)}
          className="relative isolate overflow-hidden rounded-[36px] bg-primary px-6 py-16 text-center sm:px-12 lg:py-24"
        >
          <motion.div
            aria-hidden
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: easeOut }}
            className="absolute inset-0 -z-30"
          >
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1290px) 1290px, 100vw" className="object-cover" />
          </motion.div>
          <div aria-hidden className="absolute inset-0 -z-20 bg-primary/85" />
          <GridPattern
            width={56}
            height={56}
            className="-z-10 fill-transparent stroke-white/[0.07] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />
          <div aria-hidden className="absolute -bottom-40 left-1/2 -z-10 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-secondary/35 blur-[120px]" />
          <BorderBeam size={300} duration={12} borderWidth={2} colorFrom="var(--secondary)" colorTo="var(--accent)" />

          <div className="mx-auto max-w-3xl">
            <motion.div
              {...inViewFadeUp(0.05)}
              className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-secondary text-white shadow-xl shadow-secondary/30"
            >
              <HeartHandshake className="size-6" />
            </motion.div>
            <motion.h2
              {...inViewFadeUp(0.1)}
              className="mt-7 text-[2.2rem] font-bold leading-[1.06] tracking-[-0.035em] text-balance text-white sm:text-5xl lg:text-6xl"
            >
              <HighlightText text={heading} highlight={highlight} className={cn(serifAccent, "text-secondary")} />
            </motion.h2>
            <motion.p
              {...inViewFadeUp(0.2)}
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              {description}
            </motion.p>
            <motion.div {...inViewFadeUp(0.3)} className="mt-9 flex flex-wrap justify-center gap-3 sm:gap-4">
              <PillLink
                href={primaryAction.href}
                label={primaryAction.label}
                icon={HeartHandshake}
                rotateIcon={false}
                shine
              />
              <PillLink href={secondaryAction.href} label={secondaryAction.label} variant="glass" />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
