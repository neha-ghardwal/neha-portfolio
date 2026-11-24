"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const { hero } = profile;

  return (
    <section
      ref={ref}
      className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-5xl flex-col justify-center px-4 py-16 sm:px-6"
    >
      <motion.div
        style={{ y, opacity }}
        className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14"
      >
        {/* Left: who + what + CTAs + stats */}
        <div className="space-y-6">
          <motion.a
            {...fadeUp(0)}
            href={hero.latest.href}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs backdrop-blur transition-colors hover:border-primary/50"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pop" />
            <span className="font-medium text-foreground">{hero.latest.label}</span>
            <span className="text-muted-foreground">{hero.latest.text}</span>
            <ArrowRight className="h-3 w-3 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </motion.a>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            <span lang="es" className="text-pop">
              Hola
            </span>
            , I&apos;m <span className="text-gradient">{profile.name}</span>.
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-xl leading-snug sm:text-2xl">
            <span className="text-muted-foreground">{hero.lead}</span>
            <br />
            <span className="font-medium text-foreground">{hero.bold}</span>
          </motion.p>

          <motion.p
            {...fadeUp(0.3)}
            className="max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {hero.summary}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#experience">
                See my work
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                <FileText className="h-4 w-4" />
                Resume
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
              </a>
            </Button>
            <div className="flex items-center gap-1 pl-1">
              <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
                <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" aria-label="GitHub">
                <a href={profile.social.github} target="_blank" rel="noreferrer">
                  <GithubIcon className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.dl
            {...fadeUp(0.5)}
            className="grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <dd className="text-lg font-semibold text-foreground sm:text-xl">{stat.value}</dd>
                <dt className="text-xs leading-snug text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right: terminal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full overflow-hidden rounded-xl border border-border bg-card/80 shadow-xl shadow-black/20 backdrop-blur"
        >
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              neha@pokecoder: ~
            </span>
          </div>
          <div className="space-y-4 px-5 py-5 font-mono text-[13px]">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-foreground"
            >
              <span className="text-primary">$</span> whoami --now
            </motion.p>
            <dl className="space-y-2.5">
              {profile.now.map((row, i) => (
                <motion.div
                  key={row.key}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.65 + i * 0.15 }}
                  className="grid grid-cols-[5.5rem_1fr] gap-2"
                >
                  <dt className="text-muted-foreground">{row.key}</dt>
                  <dd className="text-foreground">
                    {row.href ? (
                      <a
                        href={row.href}
                        className="underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </motion.div>
              ))}
            </dl>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 + profile.now.length * 0.15 }}
              className="flex items-center gap-2 border-t border-border pt-4 text-muted-foreground"
            >
              <span className="text-primary">➜</span>
              <span>~</span>
              <span className="inline-block h-4 w-2 animate-pulse bg-primary" />
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
