import Image from "next/image";
import * as motion from "motion/react-client";

import { Container } from "@/components/layout/container";
import { HighlightText, serifAccent } from "@/components/shared/highlight-text";
import { Eyebrow } from "@/components/shared/section-heading";
import { GridPattern } from "@/components/ui/grid-pattern";
import { footerContent } from "@/config/footer";
import { heroContent } from "@/config/home";
import { inViewFadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

// About page intro, built from the existing hero content and the focus areas list.
export function AboutIntro() {
  const { heading, highlight, description, tagline, image } = heroContent;
  const { title: focusTitle, items: focusItems } = footerContent.focusAreas;

  return (
    <section className="relative isolate overflow-hidden bg-background-secondary py-16 md:py-20 lg:py-24">
      <GridPattern
        width={48}
        height={48}
        className="-z-10 fill-transparent stroke-primary/[0.06] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
      />

      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div {...inViewFadeUp(0)} className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-[36px] bg-secondary" />
          <div className="relative aspect-4/3 overflow-hidden rounded-[36px] ring-1 ring-primary/10">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 600px, 90vw"
              className="object-cover object-[60%_center]"
            />
          </div>
        </motion.div>

        <div>
          <motion.div {...inViewFadeUp(0.05)}>
            <Eyebrow>{tagline}</Eyebrow>
          </motion.div>
          <motion.h2
            {...inViewFadeUp(0.1)}
            className="mt-5 text-[2.15rem] font-bold leading-[1.06] tracking-[-0.035em] text-primary sm:text-5xl"
          >
            {heading.map((line) => (
              <span key={line} className="block">
                <HighlightText text={line} highlight={highlight} className={cn(serifAccent, "text-accent")} />
              </span>
            ))}
          </motion.h2>
          <motion.p {...inViewFadeUp(0.18)} className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </motion.p>
        </div>
      </Container>

      <Container className="mt-14 lg:mt-16">
        <motion.h3 {...inViewFadeUp(0)} className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
          {focusTitle}
        </motion.h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {focusItems.map((item, index) => (
            <motion.li
              key={item}
              {...inViewFadeUp(index * 0.06)}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-primary/5"
            >
              <span aria-hidden className="w-9 font-serif text-3xl italic leading-none text-secondary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-semibold text-primary">{item}</span>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
