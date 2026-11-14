"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { ActivityCard } from "@/components/cards/activity-card";
import { Container } from "@/components/layout/container";
import { PillLink } from "@/components/shared/pill-link";
import { SectionHeading } from "@/components/shared/section-heading";
import { GridPattern } from "@/components/ui/grid-pattern";
import { activitiesContent } from "@/config/home";
import { inViewFadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const smoothEase = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const formatNumber = (index: number) => String(index + 1).padStart(2, "0");

export function ActivitiesSection() {
  const { id, heading, highlight, ctaLabel, items } = activitiesContent;
  const [active, setActive] = useState(0);

  return (
    <section id={id} className="relative isolate overflow-hidden bg-primary py-16 md:py-20 lg:py-24">
      <GridPattern
        width={64}
        height={64}
        className="-z-10 fill-transparent stroke-white/[0.06] [mask-image:radial-gradient(ellipse_70%_60%_at_15%_0%,black,transparent)]"
      />
      <div aria-hidden className="absolute -left-40 top-1/3 -z-10 size-[30rem] rounded-full bg-accent/25 blur-[130px]" />
      <div aria-hidden className="absolute -right-40 -top-24 -z-10 size-[28rem] rounded-full bg-secondary/20 blur-[130px]" />

      <Container>
        <SectionHeading heading={heading} highlight={highlight} tone="dark" />

        {/* Desktop: expanding panels */}
        <motion.div {...inViewFadeUp(0.1)} className="mt-12 hidden h-[30rem] gap-4 lg:flex">
          {items.map((item, index) => {
            const open = index === active;

            return (
              <article
                key={item.href}
                onMouseEnter={() => setActive(index)}
                onFocusCapture={() => setActive(index)}
                className={cn(
                  "group relative isolate min-w-0 basis-0 overflow-hidden rounded-[28px] ring-1 ring-white/10 transition-[flex-grow] duration-700",
                  smoothEase,
                  open ? "grow-[2.4]" : "grow",
                )}
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className={cn(
                    "-z-20 object-cover transition-transform duration-1000 ease-out",
                    open ? "scale-105" : "scale-100",
                  )}
                />
                <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-primary via-primary/60 to-primary/10" />

                <div className="absolute inset-x-0 bottom-0 p-7 xl:p-8">
                  <span aria-hidden className="font-serif text-4xl italic leading-none text-secondary">
                    {formatNumber(index)}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-white xl:text-[1.7rem]">{item.title}</h3>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-700",
                      smoothEase,
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/75">{item.description}</p>
                      <PillLink href={item.href} label={ctaLabel} variant="white" size="sm" className="mt-6" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </motion.div>

        {/* Mobile & tablet: swipeable cards */}
        <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:hidden [&::-webkit-scrollbar]:hidden">
          {items.map((item, index) => (
            <div key={item.href} className="w-[85%] shrink-0 snap-start sm:w-[60%] md:w-[45%]">
              <ActivityCard {...item} number={formatNumber(index)} ctaLabel={ctaLabel} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
