import { getFeaturedProjects } from "@/lib/projects";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <>
      <HeroSection />
      <ProjectsSection
        projects={featuredProjects}
        heading="Featured Projects"
        showViewAll
      />
      <ContactSection />
    </>
  );
}
