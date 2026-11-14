import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type EventRowProps = {
  number: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  image: { src: string; alt: string };
};

// Card on small screens, pill-shaped row on desktop.
export function EventRow({ number, title, description, href, ctaLabel, image }: EventRowProps) {
  return (
    <article className="group relative grid h-full gap-5 rounded-[28px] bg-white p-3 shadow-sm ring-1 ring-primary/5 transition-[translate,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 lg:grid-cols-[4.5rem_minmax(0,1fr)_minmax(0,1.3fr)_13rem_auto] lg:items-center lg:gap-8 lg:rounded-full lg:py-3 lg:pl-9 lg:pr-3">
      <div className="relative aspect-16/10 overflow-hidden rounded-[20px] lg:order-4 lg:aspect-auto lg:h-28 lg:rounded-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 208px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <span aria-hidden className="hidden font-serif text-5xl italic leading-none text-secondary lg:order-1 lg:block">
        {number}
      </span>

      <h3 className="px-3 text-xl font-bold leading-snug text-primary sm:text-[1.35rem] lg:order-2 lg:px-0">
        <span aria-hidden className="mr-2 font-serif font-normal italic text-secondary lg:hidden">
          {number}
        </span>
        {title}
      </h3>

      <p className="px-3 text-[15px] leading-relaxed text-muted-foreground lg:order-3 lg:px-0">{description}</p>

      <Link
        href={href}
        className="mx-3 mb-3 inline-flex h-12 items-center justify-center gap-2 self-start justify-self-start rounded-full bg-light-orange px-6 text-sm font-semibold text-primary outline-none transition-colors duration-300 after:absolute after:inset-0 after:rounded-[28px] group-hover:bg-primary group-hover:text-white focus-visible:after:ring-3 focus-visible:after:ring-ring/50 lg:order-5 lg:m-0 lg:self-center lg:after:rounded-full"
      >
        {ctaLabel}
        <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
      </Link>
    </article>
  );
}
