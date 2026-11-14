import Image from "next/image";
import * as motion from "motion/react-client";
import { HeartHandshake } from "lucide-react";

import { Container } from "@/components/layout/container";
import { HighlightText, serifAccent } from "@/components/shared/highlight-text";
import { PillLink } from "@/components/shared/pill-link";
import { BorderBeam } from "@/components/ui/border-beam";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Spotlight } from "@/components/ui/spotlight-new";
import { heroContent, projectsContent } from "@/config/home";
import { siteConfig } from "@/config/site";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: easeOut },
});

// Floating category chips around the hero image (categories come from the projects content).
const chipStyles = [
  { position: "right-2 top-6 sm:-right-5 sm:top-10", dot: "bg-secondary" },
  { position: "-left-2 top-[44%] sm:-left-7", dot: "bg-accent" },
  { position: "right-3 bottom-24 sm:-right-6", dot: "bg-primary" },
];

export function Hero() {
  const { id, heading, highlight, description, tagline, primaryAction, secondaryAction, image } = heroContent;
  const chips = projectsContent.items.slice(0, chipStyles.length).map((item) => item.category);

  return (
    <section id={id} className="relative isolate overflow-hidden bg-primary text-white">
      <GridPattern
        width={64}
        height={64}
        className="-z-10 fill-transparent stroke-white/[0.07] [mask-image:radial-gradient(ellipse_80%_70%_at_70%_15%,black,transparent)]"
      />
      <div aria-hidden className="absolute -right-32 -top-40 -z-10 size-[34rem] rounded-full bg-secondary/25 blur-[130px]" />
      <div aria-hidden className="absolute -bottom-56 -left-40 -z-10 size-[32rem] rounded-full bg-accent/30 blur-[130px]" />
      <Spotlight />

      <Container className="relative grid items-center gap-16 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-24 lg:pt-20 xl:gap-20">
        <div>
          <motion.p
            {...fadeUp(0.05)}
            className="inline-flex items-center gap-2.5 rounded-full bg-white/10 py-1.5 pl-1.5 pr-4 text-sm font-medium text-white/90 ring-1 ring-white/15 backdrop-blur-md"
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-secondary text-white">
              <HeartHandshake className="size-3.5" />
            </span>
            {tagline}
          </motion.p>

          <h1 className="mt-7 text-[2.65rem] font-bold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-[3.4rem] xl:text-[4rem]">
            {heading.map((line, index) => (
              <motion.span key={line} {...fadeUp(0.15 + index * 0.1)} className="block">
                <HighlightText
                  text={line}
                  highlight={highlight}
                  className={cn(serifAccent, "text-secondary")}
                />
              </motion.span>
            ))}
          </h1>

          <motion.p {...fadeUp(0.35)} className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </motion.p>

          <motion.div {...fadeUp(0.45)} className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: easeOut }}
          className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute inset-0 translate-x-3 translate-y-3 rotate-[5deg] rounded-[40px] bg-secondary sm:translate-x-5 sm:translate-y-5"
          />
          <div
            aria-hidden
            className="absolute inset-0 -translate-x-3 -translate-y-3 -rotate-[4deg] rounded-[40px] bg-accent/70 sm:-translate-x-4 sm:-translate-y-4"
          />

          <div className="relative aspect-4/5 overflow-hidden rounded-[40px] ring-1 ring-white/20 sm:aspect-square lg:aspect-[4/4.4]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover object-[60%_center]"
            />
            <div aria-hidden className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent" />
            <BorderBeam
              size={220}
              duration={9}
              borderWidth={2}
              colorFrom="var(--secondary)"
              colorTo="var(--light-orange)"
            />
          </div>

          {chips.map((chip, index) => (
            <div key={chip} className={cn("absolute z-10", chipStyles[index].position)}>
              <div className="animate-float" style={{ animationDelay: `${index * -2}s` }}>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary shadow-xl shadow-black/20 sm:text-sm">
                  <span aria-hidden className={cn("size-2 rounded-full", chipStyles[index].dot)} />
                  {chip}
                </span>
              </div>
            </div>
          ))}

          <div className="absolute -bottom-7 left-1/2 z-10 w-max -translate-x-1/2">
            <div className="flex items-center gap-3 rounded-2xl bg-white/95 p-2 pr-5 text-primary shadow-2xl shadow-black/25 backdrop-blur">
              <span className="flex rounded-xl bg-white px-1 ring-1 ring-border">
                <Image
                  src={siteConfig.logo.src}
                  alt=""
                  width={siteConfig.logo.width}
                  height={siteConfig.logo.height}
                  sizes="72px"
                  className="h-11 w-auto"
                />
              </span>
              <span className="max-w-[11rem] text-sm font-bold leading-tight">{siteConfig.name}</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
