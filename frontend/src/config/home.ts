import { routes } from "@/config/navigation";

export const heroContent = {
  id: "hero",
  heading: ["Empowering Lives.", "Building a Better Tomorrow."],
  highlight: "Tomorrow.",
  description:
    "Jan Kalyan Charitable Trust is dedicated to creating meaningful change through education, healthcare, social welfare, and community development. We work towards building an inclusive society where every individual has the opportunity to live with dignity, equality, and hope.",
  tagline: "Together, We Can Make a Difference.",
  primaryAction: { label: "Donate Now", href: routes.donate },
  secondaryAction: { label: "Join Us", href: routes.membership },
  image: {
    src: "/assets/herosection.png",
    alt: "Smiling children waving at the camera",
    width: 1920,
    height: 1280,
  },
} as const;

export const projectsContent = {
  id: "what-we-do",
  eyebrow: "What We Do",
  heading: "Creating Opportunities. Changing Lives.",
  highlight: "Changing Lives.",
  description:
    "We are committed to building a better society through education, healthcare, women empowerment, environmental protection, and social welfare initiatives.",
  ctaLabel: "Learn More",
  items: [
    {
      number: "01",
      title: "Education for Every Child",
      description:
        "Supporting underprivileged children with access to education and better learning opportunities.",
      category: "Education",
      href: `${routes.ourProjects}/education-for-every-child`,
      image: { src: "/assets/projects/education-for-every-child.png", alt: "Education for Every Child" },
    },
    {
      number: "02",
      title: "Community Healthcare Initiative",
      description:
        "Promoting health awareness and supporting access to essential healthcare services.",
      category: "Healthcare",
      href: `${routes.ourProjects}/community-healthcare-initiative`,
      image: {
        src: "/assets/projects/community-healthcare-initiative.png",
        alt: "Community Healthcare Initiative",
      },
    },
    {
      number: "03",
      title: "Women Empowerment",
      description:
        "Encouraging women's independence, confidence, and equal opportunities through community initiatives.",
      category: "Women Empowerment",
      href: `${routes.ourProjects}/women-empowerment`,
      image: { src: "/assets/projects/women-empowerment.png", alt: "Women Empowerment" },
    },
    {
      number: "04",
      title: "Environmental Protection",
      description:
        "Promoting environmental awareness and encouraging communities to build a cleaner and greener future.",
      category: "Environment",
      href: `${routes.ourProjects}/environmental-protection`,
      image: { src: "/assets/projects/environmental-protection.png", alt: "Environmental Protection" },
    },
  ],
} as const;

export const activitiesContent = {
  id: "activities",
  heading: "Our Activities",
  highlight: "Activities",
  ctaLabel: "View Activity",
  items: [
    {
      title: "Educational Awareness Drive",
      description:
        "Encouraging children and families to understand the importance of education and equal learning opportunities.",
      href: `${routes.ourActivity}/educational-awareness-drive`,
      image: { src: "/assets/activities/educational-awareness-drive.png", alt: "Educational Awareness Drive" },
    },
    {
      title: "Community Health Awareness",
      description:
        "Spreading awareness about health, hygiene, and the importance of preventive healthcare.",
      href: `${routes.ourActivity}/community-health-awareness`,
      image: { src: "/assets/activities/community-health-awareness.png", alt: "Community Health Awareness" },
    },
    {
      title: "Social Welfare Support",
      description:
        "Extending support to underprivileged families and individuals facing social and economic challenges.",
      href: `${routes.ourActivity}/social-welfare-support`,
      image: { src: "/assets/activities/social-welfare-support.png", alt: "Social Welfare Support" },
    },
  ],
} as const;

export const ctaContent = {
  id: "get-involved",
  heading: "Be the Reason Someone Smiles Today.",
  highlight: "Smiles",
  description:
    "Your support can bring hope, opportunity, and positive change to the lives of those who need it most. Join Jan Kalyan Charitable Trust in making a meaningful difference.",
  primaryAction: { label: "Donate Now", href: routes.donate },
  secondaryAction: { label: "Become a Volunteer", href: routes.volunteer },
  image: { src: "/assets/cta-banner.png", alt: "" },
} as const;

export const eventsContent = {
  id: "events",
  heading: "Events",
  highlight: "Events",
  ctaLabel: "View Details",
  items: [
    {
      title: "Community Awareness Programme",
      description:
        "An initiative focused on spreading awareness about education, healthcare, and social responsibility.",
      href: `${routes.events}/community-awareness-programme`,
      image: { src: "/assets/events/community-awareness-programme.png", alt: "Community Awareness Programme" },
    },
    {
      title: "World Environment Day Celebration",
      description:
        "Bringing communities together to promote environmental protection and sustainable living.",
      href: `${routes.events}/world-environment-day-celebration`,
      image: {
        src: "/assets/events/world-environment-day-celebration.png",
        alt: "World Environment Day Celebration",
      },
    },
    {
      title: "Women Empowerment Programme",
      description:
        "Promoting women's rights, independence, confidence, and participation in community development.",
      href: `${routes.events}/women-empowerment-programme`,
      image: { src: "/assets/events/women-empowerment-programme.png", alt: "Women Empowerment Programme" },
    },
  ],
} as const;

export const teamContent = {
  id: "team",
  heading: "Our Team",
  highlight: "Team",
  items: [
    {
      name: "[Team Member Name]",
      designation: "Founder & President",
      description:
        "Leading the organization's mission towards social welfare, community development, and meaningful change.",
      image: { src: "/assets/team/founder-president.png", alt: "Founder & President" },
    },
    {
      name: "[Team Member Name]",
      designation: "Programme Coordinator",
      description:
        "Coordinating initiatives and ensuring effective implementation of community welfare programmes.",
      image: { src: "/assets/team/programme-coordinator.png", alt: "Programme Coordinator" },
    },
    {
      name: "[Team Member Name]",
      designation: "Social Worker",
      description:
        "Working closely with communities to understand their needs and extend meaningful support.",
      image: { src: "/assets/team/social-worker.png", alt: "Social Worker" },
    },
  ],
} as const;

const galleryCategories = [
  { slug: "education-initiatives", label: "Education Initiatives" },
  { slug: "healthcare-programmes", label: "Healthcare Programmes" },
  { slug: "community-welfare", label: "Community Welfare" },
  { slug: "women-empowerment", label: "Women Empowerment" },
  { slug: "environmental-activities", label: "Environmental Activities" },
  { slug: "social-awareness", label: "Social Awareness" },
] as const;

const galleryImagesPerCategory = 2;

export const galleryContent = {
  id: "gallery",
  eyebrow: "Our Gallery",
  heading: "Moments of Hope, Care & Change",
  highlight: "Change",
  description:
    "A glimpse into our initiatives, community activities, awareness programmes, and efforts towards building a better society.",
  allLabel: "All",
  filterLabel: "Filter gallery by category",
  categories: galleryCategories,
  items: Array.from({ length: galleryImagesPerCategory }, (_, index) =>
    galleryCategories.map((category) => ({
      src: `/assets/gallery/${category.slug}-${index + 1}.png`,
      alt: category.label,
      category: category.slug,
      categoryLabel: category.label,
    })),
  ).flat(),
};

export const testimonialsContent = {
  id: "testimonials",
  eyebrow: "Testimonials",
  heading: "Voices of Trust & Gratitude",
  highlight: "Gratitude",
  description:
    "Hear from the people and communities whose lives have been touched by our initiatives.",
  items: [
    {
      quote:
        "Jan Kalyan Charitable Trust's efforts towards community welfare and social development are truly appreciable. Their commitment brings hope and positive change to society.",
      name: "[Person Name]",
      designation: "Community Member",
      image: { src: "/assets/testimonials/community-member.png", alt: "[Person Name]" },
    },
  ],
} as const;

export const faqContent = {
  id: "faq",
  heading: "Frequently Asked Questions",
  highlight: "Questions",
  description:
    "Find answers to common questions about our organization, initiatives, and ways to contribute.",
  items: [
    {
      question: "What is Jan Kalyan Charitable Trust?",
      answer:
        "Jan Kalyan Charitable Trust is a social welfare organization committed to supporting underprivileged communities through education, healthcare, women empowerment, and other social development initiatives.",
    },
    {
      question: "What are the main areas of your work?",
      answer:
        "Our primary focus areas include education, healthcare, women empowerment, social welfare, environmental protection, and humanitarian support.",
    },
    {
      question: "How can I contribute to your mission?",
      answer:
        "You can support our mission through donations, volunteering, participating in our initiatives, and spreading awareness about our work.",
    },
    {
      question: "Can I volunteer with Jan Kalyan Charitable Trust?",
      answer:
        "Yes, individuals interested in social welfare and community development can connect with us to explore volunteering opportunities.",
    },
    {
      question: "How can I contact the organization?",
      answer:
        "You can reach us through our contact form, email, or phone number available on our website.",
    },
  ],
} as const;

export type ContactField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  autoComplete?: string;
  required: boolean;
  fullWidth?: boolean;
};

export const contactContent = {
  id: "contact",
  eyebrow: "Get in Touch",
  heading: "We'd Love to Hear From You",
  highlight: "Hear From You",
  description:
    "Have a question, want to collaborate, or interested in supporting our initiatives? Get in touch with our team.",
  form: {
    fields: [
      { name: "fullName", label: "Full Name", type: "text", autoComplete: "name", required: true },
      { name: "email", label: "Email Address", type: "email", autoComplete: "email", required: true },
      { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel", required: false },
      { name: "subject", label: "Subject", type: "text", autoComplete: "off", required: false },
      { name: "message", label: "Your Message", type: "textarea", required: true, fullWidth: true },
    ] satisfies ContactField[],
    submitLabel: "Send Message",
    successMessage: "Thank you for reaching out. Our team will get back to you soon.",
  },
};

export const newsletterContent = {
  id: "newsletter",
  heading: "Stay Connected With Our Mission",
  highlight: "Mission",
  description:
    "Subscribe to our newsletter to receive updates about our initiatives, upcoming events, and community impact.",
  placeholder: "Enter Your Email Address",
  submitLabel: "Subscribe",
  successMessage: "Thank you for subscribing! Stay connected with Jan Kalyan Charitable Trust.",
} as const;

export const socialContent = {
  id: "connect",
  heading: "Connect With Us",
  description:
    "Follow our journey and stay updated with our latest initiatives, activities, and community programmes.",
} as const;
