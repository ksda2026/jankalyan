import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { PageHero } from "@/components/shared/page-hero";
import { pagesContent } from "@/config/pages";
import { pageMetadata } from "@/lib/page-metadata";

const page = pagesContent.ourProjects;

export const metadata: Metadata = pageMetadata(page);

export default function OurProjectsPage() {
  return (
    <>
      <PageHero title={page.title} description={page.description} trail={page.trail} />
      <section className="bg-background-secondary py-16 md:py-20 lg:py-24">
        <Container>
          <ProjectsGrid />
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
