"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { Menu, Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState<string>("");

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Highlight the nav link for the section currently in view.
  React.useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[padding] duration-300",
        scrolled && "px-3",
      )}
    >
      <motion.div
        initial={false}
        animate={{
          maxWidth: scrolled ? 880 : 1024,
          marginTop: scrolled ? 12 : 0,
          borderRadius: scrolled ? 999 : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className={cn(
          "relative mx-auto overflow-hidden border-b backdrop-blur transition-[background-color,box-shadow,border-color] duration-300",
          scrolled
            ? "border border-border bg-background/75 shadow-lg shadow-black/10 supports-[backdrop-filter]:bg-background/60"
            : "border-transparent bg-transparent",
        )}
      >
        <motion.div
          initial={false}
          animate={{ height: scrolled ? 52 : 64 }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="flex items-center justify-between px-4 sm:px-6"
        >
          <Link
            href="#"
            className="flex items-center gap-2 font-mono text-sm font-medium text-foreground"
          >
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">~</span>
            <span>@pokecoder</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-sm transition-colors",
                  active === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/15"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetTitle className="font-mono text-sm">~ @pokecoder</SheetTitle>
                <nav className="mt-8 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-base transition-colors hover:text-foreground",
                        active === link.href ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>

        {/* Reading progress */}
        <motion.div
          aria-hidden
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary"
        />
      </motion.div>
    </header>
  );
}
