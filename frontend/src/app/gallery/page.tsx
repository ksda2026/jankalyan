import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { PageHero } from "@/components/shared/page-hero";
import { pagesContent } from "@/config/pages";
import { pageMetadata } from "@/lib/page-metadata";

const page = pagesContent.gallery;

export const metadata: Metadata = pageMetadata(page);

export default function GalleryPage() {
  return (
    <>
      <PageHero title={page.title} description={page.description} trail={page.trail} />
      <section className="bg-background pb-16 pt-6 md:pb-20 lg:pb-24 lg:pt-8">
        <Container>
          <GalleryGrid tone="light" />
        </Container>
      </section>
    </>
  );
}
