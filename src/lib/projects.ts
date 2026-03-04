import type { Project } from "@/lib/types";
import projectsData from "@/data/projects.json";

const projects = projectsData as Project[];

export async function getAllProjects(): Promise<Project[]> {
  return projects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return projects.find((p) => p.slug === slug) ?? null;
}
