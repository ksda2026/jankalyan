import Image from "next/image";
import * as motion from "motion/react-client";

import { TeamMemberCard } from "@/components/cards/team-member-card";
import { Container } from "@/components/layout/container";
import { HighlightText, serifAccent } from "@/components/shared/highlight-text";
import { GridPattern } from "@/components/ui/grid-pattern";
import { teamContent } from "@/config/home";
import { inViewFadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function TeamSection() {
  const { id, heading, highlight, items } = teamContent;

  return (
    <section id={id} className="bg-background py-16 md:py-20 lg:py-24">
      <Container className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <motion.div
          {...inViewFadeUp(0)}
          className="relative isolate flex flex-col justify-between gap-10 overflow-hidden rounded-[28px] bg-primary p-7 text-white md:col-span-3 md:flex-row md:items-end lg:col-span-1 lg:flex-col lg:items-start lg:p-8"
        >
          <GridPattern
            width={40}
            height={40}
            className="-z-10 fill-transparent stroke-white/[0.07] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]"
          />
          <div aria-hidden className="absolute -bottom-24 -right-24 -z-10 size-64 rounded-full bg-secondary/30 blur-[90px]" />

          <h2 className="text-[2.15rem] font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[3.1rem]">
            <HighlightText text={heading} highlight={highlight} className={cn(serifAccent, "text-secondary")} />
          </h2>

          <ul className="space-y-3 border-white/10 lg:w-full lg:border-t lg:pt-6">
            {items.map((member, index) => (
              <li key={member.image.src} className="flex items-center gap-3 text-sm font-medium text-white/80">
                <span aria-hidden className="w-7 font-serif text-xl italic text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {member.designation}
              </li>
            ))}
          </ul>

          <div className="flex -space-x-3">
            {items.map((member) => (
              <span
                key={member.image.src}
                className="relative size-12 overflow-hidden rounded-full ring-2 ring-primary"
              >
                <Image src={member.image.src} alt="" fill sizes="48px" className="object-cover" />
              </span>
            ))}
          </div>
        </motion.div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 md:col-span-3 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
          {items.map((member, index) => (
            <motion.div
              key={member.image.src}
              className="w-[78%] shrink-0 snap-start sm:w-[55%] md:w-auto"
              {...inViewFadeUp(0.1 + index * 0.08)}
            >
              <TeamMemberCard {...member} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
