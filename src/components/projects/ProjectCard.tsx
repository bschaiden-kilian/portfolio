import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";
import Tag from "@/components/ui/Tag";

const glowClass: Record<Project["accentColor"], string> = {
  violet: "hover:glow-violet",
  orange: "hover:glow-orange",
  cyan: "hover:glow-cyan",
  emerald: "hover:glow-emerald",
  pink: "hover:glow-pink",
};

const borderHoverClass: Record<Project["accentColor"], string> = {
  violet: "hover:border-violet-500/50",
  orange: "hover:border-orange-500/50",
  cyan: "hover:border-cyan-500/50",
  emerald: "hover:border-emerald-500/50",
  pink: "hover:border-pink-500/50",
};

export default function ProjectCard({ project }: { project: Project }) {
  const firstImage = project.images[0];

  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 ${glowClass[project.accentColor]} ${borderHoverClass[project.accentColor]}`}
    >
      {/* Banner: project image or gradient fallback */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative block h-36 w-full overflow-hidden"
        tabIndex={-1}
        aria-hidden
      >
        {firstImage ? (
          <Image
            src={firstImage}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div
            className={`h-full w-full bg-linear-to-br ${project.gradientFrom} ${project.gradientTo} opacity-80 transition-opacity duration-300 group-hover:opacity-100`}
          />
        )}
        {/* Image count badge */}
        {project.images.length > 1 && (
          <span className="absolute bottom-2 right-2 rounded-md bg-black/60 px-1.5 py-0.5 font-mono text-xs text-zinc-300 backdrop-blur-sm">
            1 / {project.images.length}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Title + year */}
        <div className="flex items-start justify-between gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="font-semibold text-foreground hover:text-violet-400 transition-colors"
          >
            {project.title}
          </Link>
          <span className="shrink-0 font-mono text-xs text-zinc-500">
            {project.year}
          </span>
        </div>

        {/* Description */}
        <p className="flex-1 text-sm leading-relaxed text-zinc-400 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <Tag key={tag} label={tag} accentColor={project.accentColor} />
          ))}
        </div>

        <div className="border-t border-border pt-3">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs text-zinc-500 hover:text-foreground transition-colors"
          >
            View details →
          </Link>
        </div>
      </div>
    </div>
  );
}
