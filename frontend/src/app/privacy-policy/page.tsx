import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/shared/placeholder-page";
import { pagesContent } from "@/config/pages";
import { pageMetadata } from "@/lib/page-metadata";

const page = pagesContent.privacyPolicy;

export const metadata: Metadata = pageMetadata(page);

export default function PrivacyPolicyPage() {
  return <PlaceholderPage page={page} />;
}
