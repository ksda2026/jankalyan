import { socialIcons } from "@/components/icons/social-icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {siteConfig.social.map((item) => {
        const Icon = socialIcons[item.platform];

        return (
          <li key={item.platform}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.label}
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white outline-none ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:ring-secondary focus-visible:ring-3 focus-visible:ring-white/50"
            >
              <Icon className="size-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
