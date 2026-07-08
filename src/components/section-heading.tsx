import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  title,
  className,
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 flex items-baseline gap-3", className)}>
      <span className="font-mono text-sm text-primary">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
