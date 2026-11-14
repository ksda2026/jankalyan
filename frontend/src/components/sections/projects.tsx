import * as motion from "motion/react-client";

import { ProjectCard } from "@/components/cards/project-card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { GridPattern } from "@/components/ui/grid-pattern";
import { projectsContent } from "@/config/home";
import { inViewFadeUp } from "@/lib/motion";

// Bento placement: 1st card large, 2nd wide, the rest regular (repeats for more items).
const bentoLayout = ["md:col-span-2 lg:row-span-2", "md:col-span-2", "", ""];

export function ProjectsSection() {
  const { id, eyebrow, heading, highlight, description, ctaLabel, items } = projectsContent;

  return (
    <section id={id} className="relative isolate overflow-hidden bg-background-secondary pb-16 pt-6 md:pb-20 lg:pb-24 lg:pt-8">
      <GridPattern
        width={48}
        height={48}
        className="-z-10 fill-transparent stroke-primary/[0.06] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
      />

      <Container>
        <SectionHeading
          align="split"
          eyebrow={eyebrow}
          heading={heading}
          highlight={highlight}
          description={description}
        />

        <div className="mt-10 grid gap-4 md:auto-rows-[17rem] md:grid-cols-2 lg:mt-12 lg:auto-rows-[17.5rem] lg:grid-cols-4">
          {items.map((project, index) => (
            <motion.div
              key={project.href}
              className={bentoLayout[index % bentoLayout.length]}
              {...inViewFadeUp(index * 0.08)}
            >
              <ProjectCard {...project} ctaLabel={ctaLabel} featured={index === 0} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
