import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  category: string;
  href: string;
  ctaLabel: string;
  image: { src: string; alt: string };
  featured?: boolean;
};

export function ProjectCard({
  number,
  title,
  description,
  category,
  href,
  ctaLabel,
  image,
  featured = false,
}: ProjectCardProps) {
  return (
    <article className="group relative isolate flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-[28px] bg-primary shadow-lg shadow-primary/10 md:min-h-0">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={featured ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"}
        className="-z-20 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-primary via-primary/60 to-primary/5" />

      <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-3">
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
          {category}
        </span>
        <span aria-hidden className="font-serif text-4xl italic leading-none text-white/85">
          {number}
        </span>
      </div>

      <div className={cn("p-6", featured && "sm:p-8 lg:p-10")}>
        <h3
          className={cn(
            "font-bold leading-tight tracking-tight text-white",
            featured ? "text-2xl sm:text-3xl lg:text-[2.5rem]" : "text-xl",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-3 leading-relaxed text-white/75",
            featured ? "max-w-md text-[15px] sm:text-base" : "text-sm",
          )}
        >
          {description}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-white outline-none after:absolute after:inset-0 after:rounded-[28px] focus-visible:after:ring-3 focus-visible:after:ring-white/60"
        >
          {ctaLabel}
          <span className="flex size-9 items-center justify-center rounded-full bg-secondary transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight className="size-4" />
          </span>
        </Link>
      </div>
    </article>
  );
}
