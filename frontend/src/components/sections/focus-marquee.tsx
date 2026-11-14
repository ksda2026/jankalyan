import { Asterisk } from "lucide-react";

import { Marquee } from "@/components/ui/marquee";
import { footerContent } from "@/config/footer";

// Decorative ribbons that bridge the dark hero and the light "What We Do" section.
export function FocusMarquee() {
  const { items } = footerContent.focusAreas;

  return (
    <div
      aria-hidden
      className="relative z-10 overflow-hidden bg-linear-to-b from-primary from-50% to-background-secondary to-50% py-9 sm:py-11"
    >
      <div className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-[2.5deg] bg-accent py-2.5 sm:py-3">
        <Marquee reverse repeat={4} className="p-0 [--duration:50s] [--gap:2rem]">
          {items.map((item) => (
            <span
              key={item}
              className="flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-base"
            >
              {item}
              <Asterisk className="size-4" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="relative -mx-[5%] -rotate-2 bg-secondary py-3 shadow-2xl shadow-black/20 sm:py-4">
        <Marquee repeat={4} className="p-0 [--duration:38s] [--gap:2.5rem]">
          {items.map((item) => (
            <span
              key={item}
              className="flex items-center gap-10 text-lg font-extrabold uppercase tracking-tight text-primary sm:text-2xl"
            >
              {item}
              <Asterisk className="size-6 text-white" />
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
