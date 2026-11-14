import type { Metadata } from "next";

import { AboutIntro } from "@/components/sections/about-intro";
import { CtaBanner } from "@/components/sections/cta-banner";
import { TeamSection } from "@/components/sections/team";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PageHero } from "@/components/shared/page-hero";
import { pagesContent } from "@/config/pages";
import { pageMetadata } from "@/lib/page-metadata";

const page = pagesContent.aboutUs;

export const metadata: Metadata = pageMetadata(page);

export default function AboutUsPage() {
  return (
    <>
      <PageHero title={page.title} description={page.description} trail={page.trail} />
      <AboutIntro />
      <TeamSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
