import * as motion from "motion/react-client";

import { ActivityCard } from "@/components/cards/activity-card";
import { activitiesContent } from "@/config/home";
import { inViewFadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ActivitiesGridProps = {
  excludeSlug?: string;
  className?: string;
};

// 1 / 2 / 3 cards per row, a leftover card stays centred.
export function ActivitiesGrid({ excludeSlug, className }: ActivitiesGridProps) {
  const { ctaLabel, items } = activitiesContent;

  return (
    <div className={cn("flex flex-wrap justify-center gap-6", className)}>
      {items.map((item, index) =>
        item.slug === excludeSlug ? null : (
          <motion.div
            key={item.href}
            className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            {...inViewFadeUp(index * 0.08)}
          >
            <ActivityCard {...item} number={String(index + 1).padStart(2, "0")} ctaLabel={ctaLabel} />
          </motion.div>
        ),
      )}
    </div>
  );
}
