import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <MotionSection id="contact" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading index="05." title="Contact" />
      <div className="max-w-2xl space-y-6">
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          I&apos;m currently open to backend engineering opportunities. Whether you have a
          question, a role in mind, or just want to talk about systems design — my inbox is open.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={profile.social.email}>
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={profile.social.github} target="_blank" rel="noreferrer">
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </MotionSection>
  );
}
