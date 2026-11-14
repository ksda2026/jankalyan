import Link from "next/link";
import { House } from "lucide-react";

import { cn } from "@/lib/utils";

type Crumb = { label: string; href: string };

type BreadcrumbsProps = {
  items: readonly Crumb[];
  label: string;
  className?: string;
};

export function Breadcrumbs({ items, label, className }: BreadcrumbsProps) {
  return (
    <nav aria-label={label} className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden className="text-muted-foreground/50">
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="font-semibold text-primary">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-sm font-medium text-muted-foreground outline-none transition-colors hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50",
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
