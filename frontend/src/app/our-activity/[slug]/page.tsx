import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ActivitiesGrid } from "@/components/sections/activities-grid";
import { DetailView } from "@/components/sections/detail-view";
import { PageHero } from "@/components/shared/page-hero";
import { activitiesContent } from "@/config/home";
import { pagesContent } from "@/config/pages";
import { pageMetadata } from "@/lib/page-metadata";

type Props = { params: Promise<{ slug: string }> };

const findActivity = (slug: string) => activitiesContent.items.find((item) => item.slug === slug);

export function generateStaticParams() {
  return activitiesContent.items.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const activity = findActivity((await params).slug);
  return activity ? pageMetadata(activity) : {};
}

export default async function ActivityDetailPage({ params }: Props) {
  const activity = findActivity((await params).slug);
  if (!activity) notFound();

  const listPage = pagesContent.ourActivities;

  return (
    <>
      <PageHero title={activity.title} trail={[...listPage.trail, { label: activity.title, href: activity.href }]} />
      <DetailView
        description={activity.description}
        image={activity.image}
        moreTitle={listPage.title}
        more={<ActivitiesGrid excludeSlug={activity.slug} />}
      />
    </>
  );
}
