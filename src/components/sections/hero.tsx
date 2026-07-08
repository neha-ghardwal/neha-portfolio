"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const terminalLines = [
  { prompt: "whoami", output: profile.name },
  { prompt: "cat role.txt", output: profile.title },
  { prompt: "echo $STATUS", output: "open to backend engineering roles" },
];

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-5xl flex-col justify-center gap-10 px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl overflow-hidden rounded-lg border border-border bg-card shadow-sm"
      >
        <div className="flex items-center gap-1.5 border-b border-border bg-muted/50 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">bash</span>
        </div>
        <div className="space-y-2 px-4 py-4 font-mono text-sm">
          {terminalLines.map((line, i) => (
            <motion.div
              key={line.prompt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.25 }}
            >
              <p>
                <span className="text-primary">➜</span>{" "}
                <span className="text-muted-foreground">~</span>{" "}
                <span className="text-foreground">{line.prompt}</span>
              </p>
              <p className="pl-4 text-accent-foreground">{line.output}</p>
            </motion.div>
          ))}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center gap-1"
          >
            <span className="text-primary">➜</span>{" "}
            <span className="text-muted-foreground">~</span>
            <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-primary" />
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-2xl space-y-5"
      >
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Hi, I&apos;m {profile.name}.
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">{profile.tagline}</p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button asChild size="lg">
            <a href={profile.resumeUrl} download>
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </Button>

          <div className="flex items-center gap-1 pl-2">
            <Button asChild variant="ghost" size="icon" aria-label="GitHub">
              <a href={profile.social.github} target="_blank" rel="noreferrer">
                <GithubIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
        Scroll to explore
      </motion.a>
    </section>
  );
}
