import { Award, Code2, GraduationCap } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MotionSection } from "@/components/motion-section";
import { StaggerGroup, StaggerItem } from "@/components/stagger";
import { SectionHeading } from "@/components/section-heading";
import { awards, competitive, education } from "@/lib/data";

export function Education() {
  return (
    <MotionSection id="education" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading index="04." title="Education & Achievements" />
      <StaggerGroup className="grid gap-6 md:grid-cols-2">
        <StaggerItem>
        <Card className="h-full border-border/80">
          <CardHeader className="flex flex-row items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-medium text-foreground">Education</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            {education.map((edu) => (
              <div key={edu.school} className="space-y-1.5">
                <p className="text-sm font-medium text-foreground">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
                <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span>{edu.period}</span>
                  <span className="text-primary">{edu.detail}</span>
                </div>
                {edu.coursework && (
                  <p className="pt-1 text-xs leading-relaxed text-muted-foreground">
                    <span className="text-foreground/80">Coursework:</span> {edu.coursework}
                  </p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
        </StaggerItem>

        <StaggerItem>
        <Card className="h-full border-border/80">
          <CardHeader className="flex flex-row items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-medium text-foreground">Competitive Programming</h3>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-3">
              {competitive.map((cp) => (
                <div
                  key={cp.platform}
                  className="rounded-md border border-border/70 bg-muted/30 px-3 py-2"
                >
                  <dt className="text-xs text-muted-foreground">{cp.platform}</dt>
                  <dd className="font-mono text-sm font-semibold text-foreground">
                    {cp.rating}
                  </dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
        </StaggerItem>

        <StaggerItem className="md:col-span-2">
        <Card className="border-border/80">
          <CardHeader className="flex flex-row items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-medium text-foreground">Awards & Leadership</h3>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        </StaggerItem>
      </StaggerGroup>
    </MotionSection>
  );
}
