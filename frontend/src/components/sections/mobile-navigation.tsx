"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ChevronRight, Menu, UserRound } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { isActivePath } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            aria-label={navigation.labels.openMenu}
            className="size-9 rounded-full text-primary sm:size-10 hover:border-primary/20 hover:bg-light-blue hover:text-primary lg:hidden"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>

      <SheetContent side="right" className="w-full gap-0 p-0 sm:max-w-sm">
        <SheetHeader className="border-b px-5 py-3">
          <SheetTitle className="sr-only">{navigation.labels.menuTitle}</SheetTitle>
          <Link href={navigation.home} onClick={close} aria-label={siteConfig.name} className="w-fit">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              sizes="96px"
              className="h-14 w-auto mix-blend-multiply"
            />
          </Link>
        </SheetHeader>

        <nav aria-label={navigation.labels.mobileNav} className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {navigation.main.map((item, index) => {
              const active = isActivePath(pathname, item.href);

              return (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + index * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50",
                      active ? "bg-light-blue text-primary" : "text-foreground hover:bg-muted",
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className={cn("h-5 w-0.5 rounded-full", active ? "bg-secondary" : "bg-border")}
                      />
                      {item.label}
                    </span>
                    <ChevronRight
                      className={cn(
                        "size-4 transition-transform group-hover:translate-x-0.5",
                        active ? "text-primary" : "text-muted-foreground",
                      )}
                    />
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        <SheetFooter className="gap-3 border-t bg-background-secondary p-5">
          <Link
            href={navigation.login.href}
            onClick={close}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 w-full gap-2 rounded-full text-[15px] text-primary hover:bg-light-blue hover:text-primary",
            )}
          >
            <UserRound className="size-4" />
            {navigation.login.label}
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
