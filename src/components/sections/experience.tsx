"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Trophy } from "lucide-react";

import { MotionSection } from "@/components/motion-section";
import { RichText } from "@/components/rich-text";
import { SectionHeading } from "@/components/section-heading";
import { experience, experienceVisible } from "@/lib/data";

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden
        className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60"
      />
      <span>
        <RichText text={text} />
      </span>
    </li>
  );
}

function Bullets({ points }: { points: string[] }) {
  const [open, setOpen] = useState(false);
  const shown = points.slice(0, experienceVisible);
  const extra = points.slice(experienceVisible);

  return (
    <div className="space-y-2">
      <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
        {shown.map((p) => (
          <Bullet key={p} text={p} />
        ))}
      </ul>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2.5 overflow-hidden text-sm leading-relaxed text-muted-foreground sm:text-[15px]"
          >
            {extra.map((p) => (
              <Bullet key={p} text={p} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      {extra.length > 0 && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex items-center gap-1 pt-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          {open ? "Show less" : `Show ${extra.length} more`}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
}

export function Experience() {
  return (
    <MotionSection id="experience" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading index="02." title="Experience" />
      <div className="space-y-6">
        {experience.map((job) => (
          <div
            key={job.company}
            className="rounded-xl border border-border bg-card/70 p-6 backdrop-blur sm:p-7"
          >
            <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-foreground">{job.company}</h3>
              <p className="text-xs text-muted-foreground">{job.about}</p>
            </div>

            {/* Timeline of roles */}
            <ol className="relative space-y-8 border-l border-border pl-6">
              {job.roles.map((role) => (
                <li key={role.title} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[1.83rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary ring-1 ring-primary/40"
                  />
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-medium text-foreground">{role.title}</h4>
                      {role.badge && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-pop/30 bg-pop/10 px-2 py-0.5 text-[11px] font-medium text-pop">
                          <Trophy className="h-3 w-3" />
                          {role.badge}
                        </span>
                      )}
                    </div>
                    <p className="shrink-0 text-xs text-muted-foreground">
                      {role.period} · {role.location}
                    </p>
                  </div>
                  <Bullets points={role.points} />
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
