import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type PillVariant = "saffron" | "glass" | "white" | "outline";

const variants: Record<PillVariant, { root: string; bubble: string }> = {
  saffron: {
    root: "bg-secondary text-white shadow-lg shadow-secondary/30 hover:bg-secondary/90",
    bubble: "bg-white text-secondary",
  },
  glass: {
    root: "bg-white/10 text-white ring-1 ring-white/25 backdrop-blur-md hover:bg-white/20",
    bubble: "bg-white text-primary",
  },
  white: {
    root: "bg-white text-primary shadow-lg shadow-black/10 hover:bg-white/90",
    bubble: "bg-primary text-white",
  },
  outline: {
    root: "bg-white text-primary ring-1 ring-primary/15 hover:ring-primary/40",
    bubble: "bg-primary text-white",
  },
};

type PillLinkProps = {
  href: string;
  label: string;
  variant?: PillVariant;
  icon?: LucideIcon;
  rotateIcon?: boolean;
  shine?: boolean;
  size?: "md" | "sm";
  className?: string;
  onClick?: () => void;
};

export function PillLink({
  href,
  label,
  variant = "saffron",
  icon: Icon = ArrowUpRight,
  rotateIcon = true,
  shine = false,
  size = "md",
  className,
  onClick,
}: PillLinkProps) {
  const styles = variants[variant];

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group/pill relative inline-flex items-center gap-3 overflow-hidden rounded-full font-semibold outline-none transition-[background-color,box-shadow,scale] duration-300 focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98]",
        size === "md" ? "h-13 pl-6 pr-1.5 text-[15px]" : "h-11 pl-5 pr-1 text-sm",
        styles.root,
        className,
      )}
    >
      {shine && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-shine bg-linear-to-r from-transparent via-white/40 to-transparent"
        />
      )}
      <span className="relative">{label}</span>
      <span
        className={cn(
          "relative flex shrink-0 items-center justify-center rounded-full transition-transform duration-500",
          size === "md" ? "size-10" : "size-9",
          rotateIcon ? "group-hover/pill:rotate-45" : "group-hover/pill:scale-110",
          styles.bubble,
        )}
      >
        <Icon className="size-[18px]" />
      </span>
    </Link>
  );
}
