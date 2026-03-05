import type { Project } from "@/lib/types";

const colorMap: Record<Project["accentColor"], string> = {
  violet: "bg-violet-500/15 text-violet-300 ring-1 ring-violet-500/30",
  orange: "bg-orange-500/15 text-orange-300 ring-1 ring-orange-500/30",
  cyan: "bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/30",
  emerald: "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30",
  pink: "bg-pink-500/15 text-pink-300 ring-1 ring-pink-500/30",
};

export default function Tag({
  label,
  accentColor = "violet",
}: {
  label: string;
  accentColor?: Project["accentColor"];
}) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${colorMap[accentColor]}`}
    >
      {label}
    </span>
  );
}
