// ContactSection — SERVER Component.
// The outer section shell is server-rendered (heading, layout, descriptive text).
// Only the <ContactForm> inside is a Client Component — the "interactive island".
//
// This pattern (server shell + client island) is the React Server Component best practice:
// ship the minimum JS to the browser (only the form), keep everything else server-rendered.

import GradientText from "@/components/ui/GradientText";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Left: copy */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Let&apos;s <GradientText>work together</GradientText>
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Got a project in mind, a role to fill, or just want to say hi? My
            inbox is always open.
          </p>
          <div className="space-y-2 text-sm text-zinc-500">
            <p>
              <span className="text-zinc-400">Email:</span>{" "}
              <a
                href="mailto:hello@kilian.dev"
                className="hover:text-foreground transition-colors"
              >
                hello@kilian.dev
              </a>
            </p>
            <p>
              <span className="text-zinc-400">Based in:</span> Berlin, Germany
            </p>
          </div>
        </div>

        {/* Right: client form island */}
        <ContactForm />
      </div>
    </section>
  );
}
