"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

import { galleryContent } from "@/config/home";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

const ALL = "all";

// Repeating 6-item bento pattern for the 4-column desktop grid (fills 3 full rows).
const bentoPattern = [
  "lg:col-span-2 lg:row-span-2",
  "",
  "lg:row-span-2",
  "",
  "lg:col-span-2",
  "lg:col-span-2",
];

export function GalleryGrid({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const { allLabel, filterLabel, categories, items } = galleryContent;
  const [active, setActive] = useState<string>(ALL);
  const dark = tone === "dark";

  const showAll = active === ALL;
  const visible = showAll ? items : items.filter((item) => item.category === active);
  const filters = [{ slug: ALL, label: allLabel }, ...categories];

  return (
    <div className="mt-10 lg:mt-12">
      <div
        role="group"
        aria-label={filterLabel}
        className="-mx-4 flex gap-2 overflow-x-auto px-4 py-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {filters.map((filter) => {
          const selected = filter.slug === active;

          return (
            <button
              key={filter.slug}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(filter.slug)}
              className={cn(
                "relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold outline-none transition-colors duration-300 focus-visible:ring-3 sm:px-5",
                dark ? "focus-visible:ring-white/50" : "focus-visible:ring-ring/50",
                selected
                  ? "text-white"
                  : dark
                    ? "bg-white/5 text-white/75 ring-1 ring-white/10 hover:bg-white/10 hover:text-white"
                    : "bg-white text-primary ring-1 ring-border hover:ring-primary/30",
              )}
            >
              {selected && (
                <motion.span
                  layoutId="gallery-filter-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-secondary shadow-lg shadow-secondary/30"
                />
              )}
              <span className="relative">{filter.label}</span>
            </button>
          );
        })}
      </div>

      <motion.ul
        layout
        className={cn(
          "mt-8 grid gap-3 lg:mt-10",
          showAll
            ? "grid-cols-2 md:grid-cols-3 lg:auto-rows-[200px] lg:grid-cols-4 xl:auto-rows-[230px]"
            : "grid-cols-1 sm:grid-cols-2",
        )}
      >
        <AnimatePresence mode="popLayout">
          {visible.map((item, index) => (
            <motion.li
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className={cn(
                "group relative overflow-hidden rounded-[22px] ring-1",
                dark ? "bg-white/5 ring-white/10" : "bg-light-blue ring-primary/5",
                showAll ? cn("aspect-square lg:aspect-auto", bentoPattern[index % bentoPattern.length]) : "aspect-4/3",
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={showAll ? "(min-width: 1024px) 50vw, (min-width: 768px) 33vw, 50vw" : "(min-width: 640px) 50vw, 100vw"}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="absolute bottom-4 left-4 translate-y-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.categoryLabel}
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
