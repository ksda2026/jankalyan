import { routes } from "@/config/navigation";

export const homeCrumb = { label: "Home", href: routes.home } as const;

export const breadcrumbsContent = {
  label: "Breadcrumb",
  trails: {
    aboutUs: [homeCrumb, { label: "About Us", href: routes.aboutUs }],
    ourProjects: [homeCrumb, { label: "Our Projects", href: routes.ourProjects }],
    ourActivities: [homeCrumb, { label: "Our Activities", href: routes.ourActivity }],
    events: [homeCrumb, { label: "Events", href: routes.events }],
    contactUs: [homeCrumb, { label: "Contact Us", href: routes.contactUs }],
    gallery: [homeCrumb, { label: "Gallery", href: routes.gallery }],
    csrFunding: [homeCrumb, { label: "CSR Funding", href: routes.csrFunding }],
    membership: [homeCrumb, { label: "Membership", href: routes.membership }],
    donate: [homeCrumb, { label: "Donate", href: routes.donate }],
    volunteer: [homeCrumb, { label: "Become a Volunteer", href: routes.volunteer }],
    login: [homeCrumb, { label: "Login", href: routes.login }],
    privacyPolicy: [homeCrumb, { label: "Privacy Policy", href: routes.privacyPolicy }],
    termsAndConditions: [homeCrumb, { label: "Terms & Conditions", href: routes.termsAndConditions }],
  },
} as const;
