"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { HeartHandshake } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MobileNavigation } from "@/components/sections/mobile-navigation";
import { buttonVariants } from "@/components/ui/button";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { isActivePath } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-3 sm:gap-6 lg:h-22">
        <Link
          href={navigation.home}
          aria-label={siteConfig.name}
          className="shrink-0 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            sizes="120px"
            priority
            className="h-16 w-auto mix-blend-multiply lg:h-19"
          />
        </Link>

        <nav aria-label={navigation.labels.primaryNav} className="hidden lg:block">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {navigation.main.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group relative inline-flex h-10 items-center rounded-md px-2.5 text-[15px] font-medium outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 xl:px-3.5",
                      active ? "text-primary" : "text-foreground/75 hover:text-primary",
                    )}
                  >
                    {item.label}
                    {active ? (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-secondary xl:inset-x-3.5"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="absolute inset-x-2.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-primary/25 transition-transform duration-300 group-hover:scale-x-100 xl:inset-x-3.5"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={navigation.donate.href}
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "h-9 gap-1.5 rounded-full px-3.5 text-sm font-semibold shadow-md shadow-secondary/25 hover:bg-secondary/90 sm:h-10 sm:gap-2 sm:px-5 sm:text-[15px]",
            )}
          >
            <HeartHandshake className="size-4" />
            {navigation.donate.label}
          </Link>

          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
