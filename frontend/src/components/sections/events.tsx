import * as motion from "motion/react-client";

import { EventRow } from "@/components/cards/event-row";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { GridPattern } from "@/components/ui/grid-pattern";
import { eventsContent } from "@/config/home";
import { inViewFadeUp } from "@/lib/motion";

export function EventsSection() {
  const { id, heading, highlight, ctaLabel, items } = eventsContent;

  return (
    <section id={id} className="relative isolate overflow-hidden bg-light-orange py-16 md:py-20 lg:py-24">
      <GridPattern
        width={48}
        height={48}
        className="-z-10 fill-transparent stroke-secondary/15 [mask-image:radial-gradient(ellipse_60%_80%_at_100%_0%,black,transparent)]"
      />

      <Container>
        <SectionHeading heading={heading} highlight={highlight} />

        <div className="mt-10 flex flex-wrap justify-center gap-4 lg:mt-12">
          {items.map((event, index) => (
            <motion.div
              key={event.href}
              className="w-full sm:w-[calc((100%-1rem)/2)] lg:w-full"
              {...inViewFadeUp(index * 0.08)}
            >
              <EventRow {...event} number={String(index + 1).padStart(2, "0")} ctaLabel={ctaLabel} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
