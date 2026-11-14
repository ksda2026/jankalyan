import * as motion from "motion/react-client";
import { Plus } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PillLink } from "@/components/shared/pill-link";
import { SectionHeading } from "@/components/shared/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GridPattern } from "@/components/ui/grid-pattern";
import { contactContent, faqContent } from "@/config/home";
import { inViewFadeUp } from "@/lib/motion";

export function FaqSection() {
  const { id, heading, highlight, description, items } = faqContent;

  return (
    <section id={id} className="bg-background py-16 md:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading heading={heading} highlight={highlight} description={description} />

          <motion.div
            {...inViewFadeUp(0.2)}
            className="relative isolate mt-8 overflow-hidden rounded-[28px] bg-primary p-7 text-white sm:p-8"
          >
            <GridPattern
              width={36}
              height={36}
              className="-z-10 fill-transparent stroke-white/[0.07] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
            />
            <div aria-hidden className="absolute -bottom-20 -left-16 -z-10 size-56 rounded-full bg-secondary/30 blur-[80px]" />
            <p className="text-xl font-bold leading-snug sm:text-2xl">{contactContent.heading}</p>
            <PillLink
              href={`#${contactContent.id}`}
              label={contactContent.eyebrow}
              variant="white"
              size="sm"
              className="mt-6"
            />
          </motion.div>
        </div>

        <motion.div {...inViewFadeUp(0.1)}>
          <Accordion defaultValue={[items[0].question]} className="gap-3">
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="group/faq rounded-[22px] bg-background-secondary px-5 ring-1 ring-transparent transition-[background-color,box-shadow] duration-300 not-last:border-b-0 data-open:bg-white data-open:shadow-xl data-open:shadow-primary/10 data-open:ring-primary/10 sm:px-6"
              >
                <AccordionTrigger className="items-center py-5 text-base font-semibold text-primary hover:no-underline sm:text-lg [&_[data-slot=accordion-trigger-icon]]:hidden">
                  <span className="flex w-full items-center gap-4">
                    <span aria-hidden className="w-8 shrink-0 font-serif text-2xl font-normal italic text-secondary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{item.question}</span>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-primary ring-1 ring-border transition-[rotate,background-color,color] duration-300 group-data-open/faq:rotate-45 group-data-open/faq:bg-primary group-data-open/faq:text-white group-data-open/faq:ring-primary">
                      <Plus className="size-4" />
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[15px] leading-relaxed text-muted-foreground sm:pl-12 sm:pr-12">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}
