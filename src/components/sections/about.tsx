import Image from "next/image";
import { Bot, Briefcase, Database, GraduationCap, MapPin, Server } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/stagger";
import { alsoUse, focusAreas, profile } from "@/lib/data";

const icons = {
  briefcase: Briefcase,
  pin: MapPin,
  grad: GraduationCap,
  server: Server,
  database: Database,
  bot: Bot,
} as const;

export function About() {
  const { about } = profile;

  return (
    <MotionSection id="about" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading index="01." title="About" />

      <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12">
        {/* Portrait: circle frame with an indigo→pink ring and soft glow */}
        <div className="group relative shrink-0">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/40 to-pop/40 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
          />
          <div className="relative rounded-full bg-gradient-to-br from-primary to-pop p-[3px]">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.fullName}`}
              width={224}
              height={224}
              sizes="(min-width: 768px) 192px, 160px"
              className="h-40 w-40 rounded-full border-4 border-background object-cover md:h-48 md:w-48"
            />
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-[1.7rem]">
            {about.headline}
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {about.body}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {about.facts.map((fact) => {
              const Icon = icons[fact.icon as keyof typeof icons];
              return (
                <li key={fact.text} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {fact.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* What I build */}
      <div className="mt-16">
        <div className="mb-6 flex items-center gap-4">
          <h3 className="text-lg font-medium text-foreground">What I build</h3>
          <div className="h-px flex-1 bg-border" />
        </div>
        <StaggerGroup className="grid gap-4 md:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = icons[area.icon as keyof typeof icons];
            return (
              <StaggerItem
                key={area.title}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card/70 p-5 backdrop-blur transition-colors hover:border-primary/50"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-muted/50">
                    <Icon className="h-4 w-4 text-primary" />
                  </span>
                  <h4 className="font-medium text-foreground">{area.title}</h4>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
                <div className="flex flex-wrap gap-1.5">
                  {area.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
        <div className="mt-4 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          <span className="mr-1">Also:</span>
          {alsoUse.map((tag) => (
            <Badge key={tag} variant="outline" className="font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
