import Link from "next/link";
import { House } from "lucide-react";

import type { Trail } from "@/config/pages";
import { cn } from "@/lib/utils";

type BreadcrumbsProps = {
  items: Trail;
  label: string;
  tone?: "light" | "dark";
  className?: string;
};

export function Breadcrumbs({ items, label, tone = "light", className }: BreadcrumbsProps) {
  const dark = tone === "dark";

  return (
    <nav aria-label={label} className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden className={dark ? "text-white/35" : "text-muted-foreground/50"}>
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className={cn("font-semibold", dark ? "text-white" : "text-primary")}>
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-sm font-medium outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50",
                    dark ? "text-white/65 hover:text-white" : "text-muted-foreground hover:text-primary",
                  )}
                >
                  {index === 0 && <House className="size-4" />}
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
