export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  accentColor: "violet" | "orange" | "cyan" | "emerald" | "pink";
  features: string[];
  images: string[];
  featured: boolean;
  year: number;
  gradientFrom: string;
  gradientTo: string;
}
