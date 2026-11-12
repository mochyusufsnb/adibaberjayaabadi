import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { photos } from "@/data/images";

/** Business partnership call-to-action. */
export function CtaBand() {
  return (
    <section className="container-site py-20 md:py-28">
      <div className="relative isolate overflow-hidden rounded-3xl bg-forest-deep px-6 py-14 md:px-14 md:py-20">
        <img
          src={photos.plantationAerial.src}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden />
        <div className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold/60" aria-hidden />
            Business Partnership
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-cream md:text-5xl">
            Bring premium Indonesian avocados to your market.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/75 md:text-lg">
            We work with fruit distributors, supermarkets, HoReCa, the food &amp; beverage industry and
            export buyers. Review our product specifications and quality approach to see how Pameling
            fits your supply programme.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/products" hash="specifications">
                View Specifications <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/quality">Quality &amp; Export</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
