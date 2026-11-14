import * as motion from "motion/react-client";

import { TestimonialCard } from "@/components/cards/testimonial-card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { GridPattern } from "@/components/ui/grid-pattern";
import { testimonialsContent } from "@/config/home";
import { inViewFadeUp } from "@/lib/motion";

export function TestimonialsSection() {
  const { id, eyebrow, heading, highlight, description, items } = testimonialsContent;

  return (
    <section id={id} className="relative isolate overflow-hidden bg-light-green py-16 md:py-20 lg:py-24">
      <GridPattern
        width={48}
        height={48}
        className="-z-10 fill-transparent stroke-accent/15 [mask-image:radial-gradient(ellipse_60%_70%_at_0%_100%,black,transparent)]"
      />
      <div aria-hidden className="absolute -right-32 top-1/4 -z-10 size-[26rem] rounded-full bg-secondary/15 blur-[120px]" />

      <Container className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading eyebrow={eyebrow} heading={heading} highlight={highlight} description={description} />

        <div className="grid gap-6">
          {items.map((testimonial, index) => (
            <motion.div key={testimonial.quote} {...inViewFadeUp(0.1 + index * 0.1, 36)}>
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
