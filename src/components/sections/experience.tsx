import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <MotionSection
      id="experience"
      className="mx-auto max-w-5xl px-4 py-20 sm:px-6"
    >
      <SectionHeading index="02." title="Experience" />
      <div className="space-y-6">
        {experience.map((job) => (
          <Card key={job.company} className="border-border/80">
            <CardHeader className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  {job.role} <span className="text-muted-foreground">· {job.company}</span>
                </h3>
                <p className="text-sm text-muted-foreground">{job.location}</p>
              </div>
              <p className="font-mono text-sm text-muted-foreground">{job.period}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-1">
                {job.stack.map((tech) => (
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
