import * as motion from "motion/react-client";

import { EventRow } from "@/components/cards/event-row";
import { eventsContent } from "@/config/home";
import { inViewFadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type EventsListProps = {
  excludeSlug?: string;
  className?: string;
};

export function EventsList({ excludeSlug, className }: EventsListProps) {
  const { ctaLabel, items } = eventsContent;

  return (
    <div className={cn("flex flex-wrap justify-center gap-4", className)}>
      {items.map((event, index) =>
        event.slug === excludeSlug ? null : (
          <motion.div
            key={event.href}
            className="w-full sm:w-[calc((100%-1rem)/2)] lg:w-full"
            {...inViewFadeUp(index * 0.08)}
          >
            <EventRow {...event} number={String(index + 1).padStart(2, "0")} ctaLabel={ctaLabel} />
          </motion.div>
        ),
      )}
    </div>
  );
}
