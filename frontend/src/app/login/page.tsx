import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/shared/placeholder-page";
import { pagesContent } from "@/config/pages";
import { pageMetadata } from "@/lib/page-metadata";

const page = pagesContent.login;

export const metadata: Metadata = pageMetadata(page);

export default function LoginPage() {
  return <PlaceholderPage page={page} />;
}
