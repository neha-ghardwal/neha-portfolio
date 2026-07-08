import { MapPin } from "lucide-react";

import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/data";

export function About() {
  return (
    <MotionSection id="about" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading index="01." title="About" />
      <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
        <p>{profile.bio}</p>
        <p className="flex items-center gap-2 text-sm text-muted-foreground/80">
          <MapPin className="h-4 w-4" />
          {profile.location}
        </p>
      </div>
    </MotionSection>
  );
}
