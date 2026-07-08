import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <MotionSection id="skills" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading index="04." title="Tech Stack" />
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <Card key={group.group} className="border-border/80">
            <CardHeader>
              <h3 className="font-mono text-sm text-primary">{group.group}</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline" className="font-mono">
                    {item}
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
