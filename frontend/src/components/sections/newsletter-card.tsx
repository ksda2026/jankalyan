"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Mail, Send } from "lucide-react";

import { HighlightText, serifAccent } from "@/components/shared/highlight-text";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";
import { newsletterContent } from "@/config/home";
import { cn } from "@/lib/utils";

export function NewsletterCard() {
  const { heading, highlight, description, placeholder, submitLabel, successMessage } = newsletterContent;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <div className="relative isolate flex h-full flex-col justify-center overflow-hidden rounded-[32px] bg-primary p-8 text-white sm:p-10 lg:p-12">
      <GridPattern
        width={48}
        height={48}
        className="-z-10 fill-transparent stroke-white/[0.07] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
      />
      <div aria-hidden className="absolute -right-24 -top-28 -z-10 size-80 rounded-full bg-secondary/30 blur-[110px]" />
      <div aria-hidden className="absolute -bottom-32 -left-24 -z-10 size-80 rounded-full bg-accent/25 blur-[110px]" />

      <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-white shadow-lg shadow-black/20">
        <Mail className="size-6" />
      </span>
      <h2 className="mt-7 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.75rem]">
        <HighlightText text={heading} highlight={highlight} className={cn(serifAccent, "text-secondary")} />
      </h2>
      <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">{description}</p>

      <form
        suppressHydrationWarning
        onSubmit={handleSubmit}
        onInput={() => submitted && setSubmitted(false)}
        className="mt-8 flex flex-col gap-2 rounded-[28px] bg-white/10 p-2 ring-1 ring-white/15 backdrop-blur sm:flex-row sm:rounded-full"
      >
        <input
          suppressHydrationWarning
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={placeholder}
          aria-label={placeholder}
          className="h-12 w-full min-w-0 rounded-full bg-white px-5 text-[15px] text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-3 focus-visible:ring-secondary/50 sm:flex-1"
        />
        <Button
          type="submit"
          variant="secondary"
          className="group h-12 gap-2 rounded-full px-7 text-[15px] font-semibold hover:bg-secondary/90"
        >
          {submitLabel}
          <Send className="size-4 transition-transform duration-300 group-hover:-rotate-12" />
        </Button>
      </form>

      <div role="status" aria-live="polite" className="mt-4 min-h-6">
        <AnimatePresence>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex items-start gap-2 text-sm font-medium text-white/90"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" />
              {successMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
