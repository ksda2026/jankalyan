import { Container } from "@/components/layout/container";
import { EventsList } from "@/components/sections/events-list";
import { SectionHeading } from "@/components/shared/section-heading";
import { GridPattern } from "@/components/ui/grid-pattern";
import { eventsContent } from "@/config/home";

export function EventsSection() {
  const { id, heading, highlight } = eventsContent;

  return (
    <section id={id} className="relative isolate overflow-hidden bg-light-orange py-16 md:py-20 lg:py-24">
      <GridPattern
        width={48}
        height={48}
        className="-z-10 fill-transparent stroke-secondary/15 [mask-image:radial-gradient(ellipse_60%_80%_at_100%_0%,black,transparent)]"
      />

      <Container>
        <SectionHeading heading={heading} highlight={highlight} />
        <EventsList className="mt-10 lg:mt-12" />
      </Container>
    </section>
  );
}
