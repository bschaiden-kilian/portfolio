import type { Project } from "@/lib/types";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import ProjectGrid from "@/components/projects/ProjectGrid";

interface ProjectsSectionProps {
  projects: Project[];
  heading?: string;
  showViewAll?: boolean;
}

export default function ProjectsSection({
  projects,
  heading = "Projects",
  showViewAll = false,
}: ProjectsSectionProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          <GradientText>{heading}</GradientText>
        </h2>
        {showViewAll && (
          <Button href="/projects" variant="ghost" className="shrink-0">
            View all →
          </Button>
        )}
      </div>

      <ProjectGrid projects={projects} />
    </section>
  );
}
