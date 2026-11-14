import { Container } from "@/components/layout/container";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { GridPattern } from "@/components/ui/grid-pattern";
import { projectsContent } from "@/config/home";

export function ProjectsSection() {
  const { id, eyebrow, heading, highlight, description } = projectsContent;

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
        <ProjectsGrid className="mt-10 lg:mt-12" />
      </Container>
    </section>
  );
}
