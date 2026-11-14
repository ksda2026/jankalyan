import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { CtaBanner } from "@/components/sections/cta-banner";
import { EventsList } from "@/components/sections/events-list";
import { PageHero } from "@/components/shared/page-hero";
import { pagesContent } from "@/config/pages";
import { pageMetadata } from "@/lib/page-metadata";

const page = pagesContent.events;

export const metadata: Metadata = pageMetadata(page);

export default function EventsPage() {
  return (
    <>
      <PageHero title={page.title} description={page.description} trail={page.trail} />
      <section className="bg-light-orange py-16 md:py-20 lg:py-24">
        <Container>
          <EventsList />
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
