import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import ProjectDetail from "@/components/projects/ProjectDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

// Pre-render all project slugs at build time.
export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

// Dynamically generate <title> and <meta description> per project.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  // notFound() triggers Next.js's built-in 404 page
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
