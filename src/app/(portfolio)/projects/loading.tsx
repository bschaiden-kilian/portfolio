import ProjectCardSkeleton from "@/components/projects/ProjectCardSkeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10 h-10 w-48 animate-pulse rounded-lg bg-surface-raised" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
