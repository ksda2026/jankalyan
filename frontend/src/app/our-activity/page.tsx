import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ActivitiesGrid } from "@/components/sections/activities-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/shared/page-hero";
import { pagesContent } from "@/config/pages";
import { pageMetadata } from "@/lib/page-metadata";

const page = pagesContent.ourActivities;

export const metadata: Metadata = pageMetadata(page);

export default function OurActivitiesPage() {
  return (
    <>
      <PageHero title={page.title} description={page.description} trail={page.trail} />
      <section className="bg-light-blue py-16 md:py-20 lg:py-24">
        <Container>
          <ActivitiesGrid />
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
