// Button — a reusable SERVER component with two visual variants.
// Renders as a <Link> when `href` is provided, otherwise a <button>.
// Server Component: all styling is static, no click handlers stored in this file.
// (onClick handlers are passed as props by CLIENT components if needed.)

import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-500 active:bg-violet-700",
  ghost:
    "border border-border text-zinc-300 hover:border-zinc-500 hover:text-foreground",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
