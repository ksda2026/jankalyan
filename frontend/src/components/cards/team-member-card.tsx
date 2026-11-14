import Image from "next/image";

type TeamMemberCardProps = {
  name: string;
  designation: string;
  description: string;
  image: { src: string; alt: string };
};

export function TeamMemberCard({ name, designation, description, image }: TeamMemberCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] bg-white p-2.5 shadow-sm ring-1 ring-primary/5 transition-[translate,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10">
      <div className="relative aspect-4/5 overflow-hidden rounded-[22px] bg-light-blue">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 300px, (min-width: 768px) 33vw, 80vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">
          {designation}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <h3 className="text-lg font-bold text-primary">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </article>
  );
}
