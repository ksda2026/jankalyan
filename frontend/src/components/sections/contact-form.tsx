"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactContent } from "@/config/home";
import { cn } from "@/lib/utils";

const fieldClass =
  "rounded-xl border-transparent bg-background-secondary px-4 text-[15px] ring-1 ring-primary/5 transition-[background-color,box-shadow] focus-visible:bg-white md:text-[15px]";

export function ContactForm() {
  const { fields, submitLabel, successMessage } = contactContent.form;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <form
      suppressHydrationWarning
      onSubmit={handleSubmit}
      onInput={() => submitted && setSubmitted(false)}
      className="grid gap-5 sm:grid-cols-2"
    >
      {fields.map((field) => {
        const id = `contact-${field.name}`;

        return (
          <div key={field.name} className={cn("grid gap-2", field.fullWidth && "sm:col-span-2")}>
            <Label htmlFor={id} className="gap-1 text-sm font-semibold text-primary">
              {field.label}
              {field.required && (
                <span aria-hidden className="text-secondary">
                  *
                </span>
              )}
            </Label>
            {field.type === "textarea" ? (
              <Textarea
                suppressHydrationWarning
                id={id}
                name={field.name}
                required={field.required}
                rows={5}
                className={cn(fieldClass, "min-h-36 py-3")}
              />
            ) : (
              <Input
                suppressHydrationWarning
                id={id}
                name={field.name}
                type={field.type}
                required={field.required}
                autoComplete={field.autoComplete}
                className={cn(fieldClass, "h-12")}
              />
            )}
          </div>
        );
      })}

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
        <Button
          type="submit"
          variant="secondary"
          className="group h-13 gap-3 rounded-full pl-7 pr-1.5 text-[15px] font-semibold shadow-lg shadow-secondary/25 hover:bg-secondary/90"
        >
          {submitLabel}
          <span className="flex size-10 items-center justify-center rounded-full bg-white text-secondary transition-transform duration-500 group-hover:-rotate-12">
            <Send className="size-4" />
          </span>
        </Button>

        <div role="status" aria-live="polite" className="min-h-6">
          <AnimatePresence>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="flex items-start gap-2 text-sm font-medium text-primary"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                {successMessage}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </form>
  );
}
