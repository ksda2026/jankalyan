import Image from "next/image";
import { Quote } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  designation: string;
  image: { src: string; alt: string };
};

export function TestimonialCard({ quote, name, designation, image }: TestimonialCardProps) {
  return (
    <figure className="relative isolate overflow-hidden rounded-[32px] bg-white p-8 shadow-2xl shadow-primary/10 ring-1 ring-primary/5 sm:p-10 lg:p-12">
      <div aria-hidden className="absolute -right-24 -top-24 -z-10 size-64 rounded-full bg-light-orange" />

      <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-white shadow-lg shadow-secondary/30">
        <Quote aria-hidden className="size-6 fill-current" />
      </span>

      <blockquote className="mt-7 font-serif text-[1.65rem] leading-[1.3] text-primary sm:text-[2rem]">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
        <Image
          src={image.src}
          alt={image.alt}
          width={56}
          height={56}
          className="size-14 rounded-full object-cover ring-2 ring-secondary ring-offset-2 ring-offset-white"
        />
        <div>
          <p className="text-base font-bold text-primary">{name}</p>
          <p className="text-sm text-muted-foreground">{designation}</p>
        </div>
      </figcaption>
    </figure>
  );
}
