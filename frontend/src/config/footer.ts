import { routes } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export const footerContent = {
  id: "footer",
  brand: {
    name: siteConfig.name,
    description:
      "Working towards a more inclusive, educated, healthy, and empowered society. We are committed to uplifting underprivileged communities through social welfare and humanitarian initiatives.",
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "Home", href: routes.home },
      { label: "About Us", href: routes.aboutUs },
      { label: "Our Projects", href: routes.ourProjects },
      { label: "Our Activities", href: routes.ourActivity },
      { label: "Events", href: routes.events },
      { label: "Gallery", href: routes.gallery },
      { label: "Contact Us", href: routes.contactUs },
    ],
  },
  focusAreas: {
    title: "Our Focus Areas",
    items: [
      "Education",
      "Healthcare",
      "Women Empowerment",
      "Social Welfare",
      "Environmental Protection",
      "Humanitarian Support",
    ],
  },
  contactTitle: "Get in Touch",
  socialTitle: "Follow Us",
  copyright: "Copyright © 2026 Jan Kalyan Charitable Trust. All Rights Reserved.",
  legalLinks: [
    { label: "Privacy Policy", href: routes.privacyPolicy },
    { label: "Terms & Conditions", href: routes.termsAndConditions },
  ],
} as const;
