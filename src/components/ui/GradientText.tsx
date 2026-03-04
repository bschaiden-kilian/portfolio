// GradientText — a tiny reusable SERVER component.
// No "use client" needed — it's purely presentational with no state or effects.
// Using it: <GradientText>Hello world</GradientText>

import type { ReactNode } from "react";

export default function GradientText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`gradient-text ${className}`}>{children}</span>;
}
