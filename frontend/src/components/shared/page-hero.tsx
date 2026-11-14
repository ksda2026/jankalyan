import * as motion from "motion/react-client";

import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { serifAccent } from "@/components/shared/highlight-text";
import { GridPattern } from "@/components/ui/grid-pattern";
import { breadcrumbsContent } from "@/config/breadcrumbs";
import type { Trail } from "@/config/pages";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: easeOut },
});

type PageHeroProps = {
  title: string;
  description?: string;
  trail: Trail;
};

// Inner page banner: breadcrumbs, title (last word accented) and optional description.
export function PageHero({ title, description, trail }: PageHeroProps) {
  const words = title.split(" ");
  const lastWord = words.pop();
  const leadWords = words.join(" ");

  return (
    <section className="relative isolate overflow-hidden bg-primary text-white">
      <GridPattern
        width={64}
        height={64}
        className="-z-10 fill-transparent stroke-white/[0.07] [mask-image:radial-gradient(ellipse_80%_90%_at_80%_0%,black,transparent)]"
      />
      <div aria-hidden className="absolute -right-32 -top-40 -z-10 size-[30rem] rounded-full bg-secondary/25 blur-[130px]" />
      <div aria-hidden className="absolute -bottom-48 -left-32 -z-10 size-[28rem] rounded-full bg-accent/25 blur-[130px]" />

      <Container className="py-14 sm:py-16 lg:py-20">
        <motion.div {...fadeUp(0)}>
          <Breadcrumbs
            items={trail}
            label={breadcrumbsContent.label}
            tone="dark"
            className="inline-flex rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur"
          />
        </motion.div>

        <motion.h1
          {...fadeUp(0.08)}
          className="mt-6 max-w-4xl text-[2.6rem] font-bold leading-[1.04] tracking-[-0.04em] text-balance sm:text-6xl lg:text-[4rem]"
        >
          {leadWords && `${leadWords} `}
          <span className={cn(serifAccent, "text-secondary")}>{lastWord}</span>
        </motion.h1>

        {description && (
          <motion.p {...fadeUp(0.16)} className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
