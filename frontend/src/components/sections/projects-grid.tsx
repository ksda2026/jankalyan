import * as motion from "motion/react-client";

import { ProjectCard } from "@/components/cards/project-card";
import { projectsContent } from "@/config/home";
import { inViewFadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

// Bento placement: 1st card large, 2nd wide, the rest regular (repeats for more items).
const bentoLayout = ["md:col-span-2 lg:row-span-2", "md:col-span-2", "", ""];

type ProjectsGridProps = {
  excludeSlug?: string;
  variant?: "bento" | "uniform";
  className?: string;
};

export function ProjectsGrid({ excludeSlug, variant = "bento", className }: ProjectsGridProps) {
  const { ctaLabel, items } = projectsContent;
  const visible = items.filter((item) => item.slug !== excludeSlug);
  const bento = variant === "bento";

  return (
    <div
      className={cn(
        "grid gap-4",
        bento
          ? "md:auto-rows-[17rem] md:grid-cols-2 lg:auto-rows-[17.5rem] lg:grid-cols-4"
          : "md:auto-rows-[21rem] md:grid-cols-3",
        className,
      )}
    >
      {visible.map((project, index) => (
        <motion.div
          key={project.href}
          className={bento ? bentoLayout[index % bentoLayout.length] : undefined}
          {...inViewFadeUp(index * 0.08)}
        >
          <ProjectCard {...project} ctaLabel={ctaLabel} featured={bento && index === 0} />
        </motion.div>
      ))}
    </div>
  );
}
