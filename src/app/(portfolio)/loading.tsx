import ProjectCardSkeleton from "@/components/projects/ProjectCardSkeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 animate-pulse">
      {/* Hero skeleton */}
      <div className="mb-16 space-y-6">
        <div className="h-5 w-32 rounded-full bg-surface-raised" />
        <div className="space-y-3">
          <div className="h-14 w-3/4 rounded-lg bg-surface-raised md:h-20" />
          <div className="h-14 w-2/3 rounded-lg bg-surface-raised md:h-20" />
        </div>
        <div className="h-5 w-xl max-w-md rounded bg-surface-raised" />
        <div className="flex gap-3">
          <div className="h-10 w-32 rounded-lg bg-surface-raised" />
          <div className="h-10 w-28 rounded-lg bg-surface-raised" />
        </div>
      </div>

      {/* Projects skeleton */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
    </div>
  );
}
