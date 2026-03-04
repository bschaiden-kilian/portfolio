import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of things I've built.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return <ProjectsSection projects={projects} heading="All Projects" />;
}
