import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GithubIcon } from "@/components/icons";
import { MotionSection } from "@/components/motion-section";
import { StaggerGroup, StaggerItem } from "@/components/stagger";
import { RichText } from "@/components/rich-text";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <MotionSection id="projects" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading index="03." title="Projects" />
      <StaggerGroup className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project.name} className="flex">
          <Card
            className="group flex w-full flex-col border-border/80 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
          >
            <CardHeader className="space-y-1.5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-medium text-foreground">{project.name}</h3>
                {project.status && (
                  <Badge variant="outline" className="shrink-0 gap-1.5 font-mono text-xs">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    {project.status}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-foreground/80">{project.tagline}</p>
              <p className="font-mono text-xs text-muted-foreground">{project.period}</p>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-between gap-5">
              <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground">
                {project.points.map((point) => (
                  <li key={point}>
                    <RichText text={point} />
                  </li>
                ))}
              </ul>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {(project.links.live || project.links.github) && (
                  <div className="flex flex-wrap gap-2">
                    {project.links.live && (
                      <Button asChild size="sm">
                        <a href={project.links.live} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live site
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button asChild size="sm" variant="outline">
                        <a href={project.links.github} target="_blank" rel="noreferrer">
                          <GithubIcon className="h-3.5 w-3.5" />
                          Source
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </MotionSection>
  );
}
