export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p className="font-mono">© {new Date().getFullYear()} Neha</p>
        <p>Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
      </div>
    </footer>
  );
}
