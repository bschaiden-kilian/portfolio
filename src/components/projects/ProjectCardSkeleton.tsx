export default function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface animate-pulse">
      {/* Banner */}
      <div className="h-36 w-full bg-surface-raised" />

      <div className="flex flex-col gap-3 p-5">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2">
          <div className="h-5 w-40 rounded bg-surface-raised" />
          <div className="h-4 w-10 rounded bg-surface-raised" />
        </div>
        {/* Description lines */}
        <div className="space-y-2">
          <div className="h-3.5 w-full rounded bg-surface-raised" />
          <div className="h-3.5 w-5/6 rounded bg-surface-raised" />
          <div className="h-3.5 w-4/6 rounded bg-surface-raised" />
        </div>
        {/* Tags */}
        <div className="flex gap-1.5">
          <div className="h-5 w-16 rounded-full bg-surface-raised" />
          <div className="h-5 w-20 rounded-full bg-surface-raised" />
          <div className="h-5 w-14 rounded-full bg-surface-raised" />
        </div>
        {/* Links row */}
        <div className="flex gap-3 border-t border-border pt-3">
          <div className="h-4 w-16 rounded bg-surface-raised" />
          <div className="ml-auto h-4 w-20 rounded bg-surface-raised" />
        </div>
      </div>
    </div>
  );
}
