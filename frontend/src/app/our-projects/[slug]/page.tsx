import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailView } from "@/components/sections/detail-view";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { PageHero } from "@/components/shared/page-hero";
import { projectsContent } from "@/config/home";
import { pagesContent } from "@/config/pages";
import { pageMetadata } from "@/lib/page-metadata";

type Props = { params: Promise<{ slug: string }> };

const findProject = (slug: string) => projectsContent.items.find((item) => item.slug === slug);

export function generateStaticParams() {
  return projectsContent.items.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject((await params).slug);
  return project ? pageMetadata(project) : {};
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = findProject((await params).slug);
  if (!project) notFound();

  const listPage = pagesContent.ourProjects;

  return (
    <>
      <PageHero title={project.title} trail={[...listPage.trail, { label: project.title, href: project.href }]} />
      <DetailView
        description={project.description}
        image={project.image}
        category={project.category}
        moreTitle={listPage.title}
        more={<ProjectsGrid excludeSlug={project.slug} variant="uniform" />}
      />
    </>
  );
}
