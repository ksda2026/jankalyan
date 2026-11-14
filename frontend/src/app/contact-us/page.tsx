import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { PageHero } from "@/components/shared/page-hero";
import { pagesContent } from "@/config/pages";
import { pageMetadata } from "@/lib/page-metadata";

const page = pagesContent.contactUs;

export const metadata: Metadata = pageMetadata(page);

export default function ContactUsPage() {
  return (
    <>
      <PageHero title={page.title} description={page.description} trail={page.trail} />
      <ContactSection />
      <FaqSection />
    </>
  );
}
