import { Award, GraduationCap } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { awards, education } from "@/lib/data";

export function Education() {
  return (
    <MotionSection id="education" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading index="05." title="Education & Awards" />
      <div className="grid gap-6 sm:grid-cols-2">
        <Card className="border-border/80">
          <CardHeader className="flex flex-row items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-medium text-foreground">Education</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            {education.map((edu) => (
              <div key={edu.school} className="space-y-1">
                <p className="text-sm font-medium text-foreground">{edu.school}</p>
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
                <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span>{edu.period}</span>
                  <span>{edu.detail}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/80">
          <CardHeader className="flex flex-row items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-medium text-foreground">Awards & Recognition</h3>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </MotionSection>
  );
}
