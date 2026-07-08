import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <MotionSection id="projects" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading index="03." title="Projects" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name} className="flex flex-col border-border/80">
            <CardHeader>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-medium text-foreground">{project.name}</h3>
              </div>
              <p className="font-mono text-xs text-muted-foreground">{project.period}</p>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-between gap-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </MotionSection>
  );
}
