import Link from "next/link";
import type { Project } from "@/lib/types";
import GradientText from "@/components/ui/GradientText";
import Tag from "@/components/ui/Tag";
import ImageLightbox from "@/components/projects/ImageLightbox";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      {/* Back link */}
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-foreground transition-colors"
      >
        ← Back to projects
      </Link>

      {/* Color banner — only shown when there are no images */}
      {project.images.length === 0 && (
        <div
          className={`h-48 w-full rounded-xl bg-linear-to-br ${project.gradientFrom} ${project.gradientTo} mb-10 opacity-80`}
        />
      )}

      {/* Header */}
      <header className="mb-8 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            <GradientText>{project.title}</GradientText>
          </h1>
          <span className="mt-2 shrink-0 font-mono text-sm text-zinc-500">
            {project.year}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} accentColor={project.accentColor} />
          ))}
        </div>
      </header>

      {/* Short description */}
      <p className="mb-10 text-lg text-zinc-400 leading-relaxed border-t border-border pt-8">
        {project.shortDescription}
      </p>

      {/* Full description */}
      <div className="mb-12 space-y-5">
        {project.fullDescription.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-zinc-300 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Image gallery with lightbox */}
      <ImageLightbox images={project.images} title={project.title} />

      {/* Features */}
      {project.features.length > 0 && (
        <section>
          <h2 className="mb-5 text-xl font-semibold text-foreground">
            Key Features
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-300">
                <span className="mt-1 shrink-0 text-violet-400">✦</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
