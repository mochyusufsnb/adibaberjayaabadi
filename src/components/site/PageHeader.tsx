import type { ReactNode } from "react";

type Props = { eyebrow: string; title: ReactNode; intro?: ReactNode; image: { src: string; width: number; height: number }; imageAlt: string };

/** Hero band for inner pages. */
export function PageHeader({ eyebrow, title, intro, image, imageAlt }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep">
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={imageAlt}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden />
      <div className="container-site pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="max-w-2xl animate-rise">
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold/60" aria-hidden />
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-cream md:text-6xl">{title}</h1>
          {intro && <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">{intro}</p>}
        </div>
      </div>
    </section>
  );
}
