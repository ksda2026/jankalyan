export type SocialPlatform = "facebook" | "instagram" | "youtube" | "linkedin";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string | undefined;
};

export const siteConfig = {
  name: "Jan Kalyan Charitable Trust",
  logo: {
    src: "/Jan Kalyan Charitable Trust Logo.png",
    alt: "Jan Kalyan Charitable Trust logo",
    width: 1536,
    height: 1024,
  },
  contact: {
    address: { label: "Address", value: "[Organization Address]" },
    phone: { label: "Phone", value: "[Contact Number]" },
    email: { label: "Email", value: "[Official Email Address]" },
  },
  social: [
    { platform: "facebook", label: "Facebook", href: process.env.NEXT_PUBLIC_FACEBOOK_URL || undefined },
    { platform: "instagram", label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || undefined },
    { platform: "youtube", label: "YouTube", href: process.env.NEXT_PUBLIC_YOUTUBE_URL || undefined },
    { platform: "linkedin", label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL || undefined },
  ] satisfies readonly SocialLink[],
  backToTop: {
    label: "Back to Top",
    ariaLabel: "Scroll to Top",
    showAfterPx: 480,
  },
} as const;
