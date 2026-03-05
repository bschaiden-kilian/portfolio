import GradientText from "@/components/ui/GradientText";

const interests = [
  "Frontend Development",
  "Marketing, Sales & Business",
  "UI/UX Design",
  "Game Development",
  "Creative Passions like Storytelling and Storywriting",
  "Boxing",
  "Gaming",
];

const links = [
  { label: "GitHub", href: "https://github.com/kilian", icon: "↗" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kilian", icon: "↗" },
  { label: "hello@kilian.dev", href: "mailto:hello@kilian.dev", icon: "✉" },
];

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-5 md:gap-16">
        {/* Left: bio — wider column */}
        <div className="space-y-6 md:col-span-3">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            <GradientText>About me</GradientText>
          </h2>

          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              I&apos;m Kilian — a developer from Austria. 
              I love creating things because I enjoy solving problems: the puzzle of
              making something work, and the craft of making it feel
              right.
            </p>
            <p>
              My interest in computers and software began when I was a kid. My first project was a simple ping pong game I built in Scratch. 
              Since then, I&apos;ve graduated from HTL Pinkafeld focusing on IT and taught myself a range of skills across development, design and marketing by building projects that interest me and solving real problems. 
            </p>
            <p>
              Outside of building software I&apos;m into boxing, strategy and storytelling games
              and finding ways to automate the boring parts of life.
            </p>
          </div>
        </div>

        {/* Right: interests */}
        <div className="md:col-span-2">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Interests
          </h3>
          <ul className="space-y-3">
            {interests.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-zinc-300"
              >
                <span className="h-px w-4 shrink-0 bg-violet-500/60" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Based in
            </h3>
            <p className="text-sm text-zinc-300">Hartberg, Austria</p>
          </div>
        </div>
      </div>
    </section>
  );
}
