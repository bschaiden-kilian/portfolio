export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 text-sm text-zinc-500">
        <p>© {year} Kilian Bschaiden. Built with Next.js & TailwindCSS.</p>
       </div> 
    </footer>
  );
}
