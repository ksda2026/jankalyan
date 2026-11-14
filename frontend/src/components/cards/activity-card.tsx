import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ActivityCardProps = {
  number: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  image: { src: string; alt: string };
};

export function ActivityCard({ number, title, description, href, ctaLabel, image }: ActivityCardProps) {
  return (
    <article className="group relative isolate flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-[28px] bg-primary ring-1 ring-white/10">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 640px) 60vw, 85vw"
        className="-z-20 object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.07]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-primary via-primary/65 to-primary/10" />

      <div className="p-6">
        <span aria-hidden className="font-serif text-4xl italic leading-none text-secondary">
          {number}
        </span>
        <h3 className="mt-3 text-xl font-bold leading-snug text-white sm:text-2xl">{title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-white/75">{description}</p>
        <Link
          href={href}
          className="mt-6 inline-flex h-11 items-center gap-3 rounded-full bg-white pl-5 pr-1 text-sm font-semibold text-primary outline-none after:absolute after:inset-0 after:rounded-[28px] focus-visible:after:ring-3 focus-visible:after:ring-white/60"
        >
          {ctaLabel}
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-white transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight className="size-4" />
          </span>
        </Link>
      </div>
    </article>
  );
}
