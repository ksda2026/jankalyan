import { PageHero } from "@/components/shared/page-hero";
import { PagePlaceholder } from "@/components/shared/page-placeholder";
import type { PageInfo } from "@/config/pages";

// Page banner + placeholder body, for pages whose content has not been provided yet.
export function PlaceholderPage({ page }: { page: PageInfo }) {
  return (
    <>
      <PageHero title={page.title} description={page.description} trail={page.trail} />
      <PagePlaceholder title={page.title} />
    </>
  );
}
