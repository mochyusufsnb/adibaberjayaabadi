import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = "left", tone = "light", className }: Props) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("eyebrow flex items-center gap-3", align === "center" && "justify-center", dark ? "text-gold" : "text-avocado")}>
        <span className={cn("h-px w-8", dark ? "bg-gold/60" : "bg-avocado/60")} aria-hidden />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-3xl font-semibold leading-[1.12] md:text-[2.6rem]",
          dark ? "text-cream" : "text-forest-deep",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-5 text-base leading-relaxed md:text-lg", dark ? "text-cream/75" : "text-muted-foreground")}>
          {intro}
        </p>
      )}
    </div>
  );
}
