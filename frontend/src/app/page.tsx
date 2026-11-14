import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { FocusMarquee } from "@/components/sections/focus-marquee";
import { ProjectsSection } from "@/components/sections/projects";
import { ActivitiesSection } from "@/components/sections/activities";
import { CtaBanner } from "@/components/sections/cta-banner";
import { EventsSection } from "@/components/sections/events";
import { TeamSection } from "@/components/sections/team";
import { GallerySection } from "@/components/sections/gallery";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { NewsletterSocialSection } from "@/components/sections/newsletter-social";
import { Footer } from "@/components/sections/footer";
import { BackToTopButton } from "@/components/sections/back-to-top-button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Navbar />
      <Hero />
      <FocusMarquee />
      <ProjectsSection />
      <ActivitiesSection />
      <CtaBanner />
      <EventsSection />
      <TeamSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <NewsletterSocialSection />
      <Footer />
      <BackToTopButton />
    </main>
  );
}
