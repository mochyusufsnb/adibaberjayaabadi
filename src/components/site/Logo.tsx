import { logo } from "@/data/images";
import { cn } from "@/lib/utils";

type LogoProps = { variant?: "full" | "emblem"; className?: string };

/** Official PT Adiba Berjaya Abadi logo — the only logo used on the site. */
export function Logo({ variant = "full", className }: LogoProps) {
  const img = logo[variant];
  return (
    <img
      src={img.src}
      width={img.width}
      height={img.height}
      alt="PT Adiba Berjaya Abadi"
      className={cn("h-auto select-none", className)}
      draggable={false}
    />
  );
}
