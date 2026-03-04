import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 py-24 md:py-36">
      {/* Main heading */}
      <div className="animate-fade-up-delay-1 space-y-2">
        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Hi, I&apos;m{" "}
          <GradientText>Kilian</GradientText>.
        </h1>
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-zinc-400 md:text-6xl">
          Curious by nature. Creator by heart.
        </h2>
      </div>

      {/* Subheading */}
      <p className="animate-fade-up-delay-2 max-w-xl text-lg leading-relaxed text-zinc-400">
        I care about solving real problems and creating projects worth using. 
        Due to my curiosity I have learned a range of genuine skills and interests from 
        development and UI/UX design to marketing and storytelling.
      </p>

      {/* CTAs */}
      <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
        <Button href="/projects" variant="primary">
          View my work
        </Button>
        <Button href="/#contact" variant="ghost">
          Get in touch
        </Button>
      </div>
    </section>
  );
}
