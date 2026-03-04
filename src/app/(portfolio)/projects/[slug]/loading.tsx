export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl animate-pulse px-6 py-16">
      <div className="mb-8 h-4 w-28 rounded bg-surface-raised" />
      <div className="mb-10 h-48 w-full rounded-xl bg-surface-raised" />
      <div className="space-y-4">
        <div className="h-12 w-3/4 rounded-lg bg-surface-raised" />
        <div className="h-5 w-full rounded bg-surface-raised" />
        <div className="h-5 w-5/6 rounded bg-surface-raised" />
        <div className="flex gap-2 py-2">
          <div className="h-6 w-16 rounded-full bg-surface-raised" />
          <div className="h-6 w-20 rounded-full bg-surface-raised" />
          <div className="h-6 w-14 rounded-full bg-surface-raised" />
        </div>
        <div className="space-y-3 border-t border-border pt-8">
          <div className="h-4 w-full rounded bg-surface-raised" />
          <div className="h-4 w-full rounded bg-surface-raised" />
          <div className="h-4 w-4/5 rounded bg-surface-raised" />
        </div>
      </div>
    </div>
  );
}
