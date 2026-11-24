export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/60 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-8 text-sm text-muted-foreground sm:px-6">
        <p className="font-mono">© {new Date().getFullYear()} PokeCoder</p>
      </div>
    </footer>
  );
}
