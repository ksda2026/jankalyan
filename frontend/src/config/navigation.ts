export const routes = {
  home: "/",
  aboutUs: "/about-us",
  ourProjects: "/our-projects",
  ourActivity: "/our-activity",
  events: "/events",
  gallery: "/gallery",
  csrFunding: "/csr-funding",
  membership: "/membership",
  contactUs: "/contact-us",
  donate: "/donate",
  volunteer: "/volunteer",
  login: "/login",
  privacyPolicy: "/privacy-policy",
  termsAndConditions: "/terms-and-conditions",
} as const;

export const navigation = {
  home: routes.home,
  main: [
    { label: "Home", href: routes.home },
    { label: "About Us", href: routes.aboutUs },
    { label: "Our Activity", href: routes.ourActivity },
    { label: "Gallery", href: routes.gallery },
    { label: "CSR Funding", href: routes.csrFunding },
    { label: "Membership", href: routes.membership },
  ],
  donate: { label: "Donate", href: routes.donate },
  login: { label: "Login", href: routes.login },
  labels: {
    primaryNav: "Main navigation",
    mobileNav: "Mobile navigation",
    openMenu: "Open menu",
    menuTitle: "Menu",
  },
} as const;
