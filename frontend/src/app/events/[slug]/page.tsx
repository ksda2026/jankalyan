import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailView } from "@/components/sections/detail-view";
import { EventsList } from "@/components/sections/events-list";
import { PageHero } from "@/components/shared/page-hero";
import { eventsContent } from "@/config/home";
import { pagesContent } from "@/config/pages";
import { pageMetadata } from "@/lib/page-metadata";

type Props = { params: Promise<{ slug: string }> };

const findEvent = (slug: string) => eventsContent.items.find((item) => item.slug === slug);

export function generateStaticParams() {
  return eventsContent.items.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = findEvent((await params).slug);
  return event ? pageMetadata(event) : {};
}

export default async function EventDetailPage({ params }: Props) {
  const event = findEvent((await params).slug);
  if (!event) notFound();

  const listPage = pagesContent.events;

  return (
    <>
      <PageHero title={event.title} trail={[...listPage.trail, { label: event.title, href: event.href }]} />
      <DetailView
        description={event.description}
        image={event.image}
        moreTitle={listPage.title}
        more={<EventsList excludeSlug={event.slug} />}
      />
    </>
  );
}
