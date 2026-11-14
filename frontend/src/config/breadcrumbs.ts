import { routes } from "@/config/navigation";

const home = { label: "Home", href: routes.home };

export const breadcrumbsContent = {
  id: "breadcrumbs",
  label: "Breadcrumb",
  trails: {
    aboutUs: [home, { label: "About Us", href: routes.aboutUs }],
    ourProjects: [home, { label: "Our Projects", href: routes.ourProjects }],
    ourActivities: [home, { label: "Our Activities", href: routes.ourActivity }],
    events: [home, { label: "Events", href: routes.events }],
    contactUs: [home, { label: "Contact Us", href: routes.contactUs }],
  },
} as const;
