import type { ReactNode } from "react";
import * as motion from "motion/react-client";

import { HighlightText, serifAccent } from "@/components/shared/highlight-text";
import { inViewFadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] sm:text-xs",
        tone === "dark"
          ? "bg-white/10 text-white ring-1 ring-white/15 backdrop-blur"
          : "bg-white text-primary shadow-sm ring-1 ring-primary/10",
      )}
    >
      <span aria-hidden className="size-2 rounded-full bg-secondary" />
      {children}
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center" | "split";
  tone?: Tone;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  heading,
  highlight,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  const centered = align === "center";
  const sentences = heading.split(/(?<=\.)\s+/);
  const accentClass = cn(serifAccent, dark ? "text-secondary" : "text-accent");

  const titleBlock = (
    <div className={cn("flex flex-col", centered && "items-center")}>
      {eyebrow && (
        <motion.div {...inViewFadeUp(0)} className="mb-5">
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </motion.div>
      )}
      <motion.h2
        {...inViewFadeUp(0.08)}
        className={cn(
          "text-[2.15rem] font-bold leading-[1.06] tracking-[-0.035em] text-balance sm:text-5xl lg:text-[3.35rem]",
          dark ? "text-white" : "text-primary",
        )}
      >
        {sentences.map((sentence) => (
          <span key={sentence} className={cn(sentences.length > 1 && "block")}>
            <HighlightText text={sentence} highlight={highlight} className={accentClass} />
          </span>
        ))}
      </motion.h2>
    </div>
  );

  const descriptionBlock = description ? (
    <motion.p
      {...inViewFadeUp(0.16)}
      className={cn(
        "max-w-2xl text-base leading-relaxed sm:text-lg",
        dark ? "text-white/70" : "text-muted-foreground",
        centered && "mx-auto",
        align === "split" && "lg:max-w-lg lg:justify-self-end lg:pb-1.5",
      )}
    >
      {description}
    </motion.p>
  ) : null;

  if (align === "split") {
    return (
      <div className={cn("grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16", className)}>
        {titleBlock}
        {descriptionBlock}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-5", centered && "items-center text-center", className)}>
      {titleBlock}
      {descriptionBlock}
    </div>
  );
}
