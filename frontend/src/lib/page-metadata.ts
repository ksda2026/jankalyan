import type { Metadata } from "next";

import type { PageInfo } from "@/config/pages";

// Tab title becomes "<Page> | <Site name>" through the title template in the root layout.
export function pageMetadata({ title, description }: Pick<PageInfo, "title" | "description">): Metadata {
  return description ? { title, description } : { title };
}
