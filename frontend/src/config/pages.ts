import { breadcrumbsContent } from "@/config/breadcrumbs";
import { footerContent } from "@/config/footer";
import { contactContent, galleryContent, projectsContent } from "@/config/home";

export type Crumb = { label: string; href: string };
export type Trail = readonly Crumb[];

export type PageInfo = {
  title: string;
  description?: string;
  trail: Trail;
};

// The page title is the last breadcrumb label, so both always match.
function page(trail: Trail, description?: string): PageInfo {
  return { title: trail[trail.length - 1].label, description, trail };
}

const { trails } = breadcrumbsContent;

export const pagesContent = {
  aboutUs: page(trails.aboutUs, footerContent.brand.description),
  ourProjects: page(trails.ourProjects, projectsContent.description),
  ourActivities: page(trails.ourActivities),
  events: page(trails.events),
  gallery: page(trails.gallery, galleryContent.description),
  contactUs: page(trails.contactUs, contactContent.description),
  csrFunding: page(trails.csrFunding),
  membership: page(trails.membership),
  donate: page(trails.donate),
  volunteer: page(trails.volunteer),
  login: page(trails.login),
  privacyPolicy: page(trails.privacyPolicy),
  termsAndConditions: page(trails.termsAndConditions),
};

// Shown on pages whose content has not been provided yet, e.g. "[CSR Funding Content]".
export const placeholderText = (title: string) => `[${title} Content]`;
