import { Container } from "@/components/layout/container";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { GridPattern } from "@/components/ui/grid-pattern";
import { galleryContent } from "@/config/home";

export function GallerySection() {
  const { id, eyebrow, heading, highlight, description } = galleryContent;

  return (
    <section id={id} className="relative isolate overflow-hidden bg-primary py-16 md:py-20 lg:py-24">
      <GridPattern
        width={64}
        height={64}
        className="-z-10 fill-transparent stroke-white/[0.06] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]"
      />
      <div aria-hidden className="absolute left-1/2 top-0 -z-10 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-secondary/20 blur-[130px]" />
      <div aria-hidden className="absolute -bottom-40 -right-40 -z-10 size-[28rem] rounded-full bg-accent/20 blur-[130px]" />

      <Container>
        <SectionHeading
          align="center"
          tone="dark"
          eyebrow={eyebrow}
          heading={heading}
          highlight={highlight}
          description={description}
        />
        <GalleryGrid />
      </Container>
    </section>
  );
}
