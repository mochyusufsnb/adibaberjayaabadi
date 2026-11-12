import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarRange,
  ClipboardCheck,
  Hotel,
  Leaf,
  PackageCheck,
  Plane,
  Recycle,
  Route as RouteIcon,
  ShoppingCart,
  Sprout,
  Store,
  Thermometer,
  Truck,
  Users,
  UtensilsCrossed,
} from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { company, qualityPillars } from "@/data/company";
import { photos } from "@/data/images";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Export Preparation | PT Adiba Berjaya Abadi" },
      {
        name: "description",
        content:
          "How PT Adiba Berjaya Abadi sources, handles and quality-checks Pameling avocados for distributors, retail, HoReCa, food industry and export buyers.",
      },
      { property: "og:title", content: "Quality & Export — Pameling Avocado" },
      {
        property: "og:description",
        content: "Quality control, sustainable farming, traceable supply and community impact.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/quality" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: QualityPage,
});

const pillarIcons = { qc: ClipboardCheck, sustainable: Recycle, traceable: RouteIcon, community: Users } as const;

const steps = [
  { icon: Sprout, title: "Cultivation", text: "Grown in the Wonorejo highlands on fertile volcanic soil with sustainable practices." },
  { icon: Leaf, title: "Direct sourcing", text: "Procured directly from trusted local partner farmers." },
  { icon: PackageCheck, title: "Handling & quality check", text: "Carefully managed handling with quality checks on every product." },
  { icon: Truck, title: "Distribution", text: "Managed distribution so quality stays consistent until it reaches the customer." },
];

const segmentIcons = [Store, ShoppingCart, Hotel, UtensilsCrossed, Plane];

function QualityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quality & Production"
        title="Quality you can trace back to the farm."
        intro="Safety, freshness and sustainability guide every step from orchard to partner."
        image={photos.crates}
        imageAlt="Harvested Pameling avocados in yellow crates"
      />

      {/* Quality statement + pillars */}
      <section className="container-site py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="Quality & Sustainability" title="Our commitment" intro={company.quality} />
          </Reveal>
          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {qualityPillars.map((p, i) => {
              const Icon = pillarIcons[p.key];
              return (
                <Reveal as="li" key={p.key} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-card">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold text-forest-deep">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-forest-deep text-cream">
        <div className="container-site py-20 md:py-28">
          <SectionHeading tone="dark" eyebrow="From Farm to Partner" title="How our avocados reach you" align="center" />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-cream/10 bg-cream/5 p-7">
                  <div className="flex items-center justify-between">
                    <s.icon className="h-6 w-6 text-avocado" />
                    <span className="font-display text-sm font-semibold text-cream/40">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Export readiness */}
      <section className="container-site py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="grid grid-cols-2 gap-4">
            <img
              src={photos.crates.src}
              width={photos.crates.width}
              height={photos.crates.height}
              loading="lazy"
              alt="Pameling avocados sorted into crates after harvest"
              className="row-span-2 h-full w-full rounded-3xl object-cover"
            />
            <img
              src={photos.onTree.src}
              width={photos.onTree.width}
              height={photos.onTree.height}
              loading="lazy"
              alt="Pameling avocados on the tree before harvest"
              className="aspect-square w-full rounded-3xl object-cover"
            />
            <img
              src={photos.cut.src}
              width={photos.cut.width}
              height={photos.cut.height}
              loading="lazy"
              alt="Halved Pameling avocado"
              className="aspect-square w-full rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Export Capabilities"
              title="Prepared for local and international markets"
              intro="Our sourcing, handling and distribution are designed to keep Pameling avocados consistent for buyers at home and abroad."
            />
            <ul className="mt-10 space-y-4">
              <li className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <CalendarRange className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                <div>
                  <p className="font-semibold text-forest-deep">Two harvest seasons</p>
                  <p className="mt-1 text-sm text-muted-foreground">Harvest in March and November; flowering in October and May.</p>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <Thermometer className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                <div>
                  <p className="font-semibold text-forest-deep">Shelf life</p>
                  <p className="mt-1 text-sm text-muted-foreground">5 – 7 days after harvest at 19 – 26 °C.</p>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                <div>
                  <p className="font-semibold text-forest-deep">Quality-checked before dispatch</p>
                  <p className="mt-1 text-sm text-muted-foreground">Each product passes through quality checks within a managed handling process.</p>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Market segments */}
      <section className="bg-cream">
        <div className="container-site py-20 md:py-28">
          <SectionHeading eyebrow="Market Segments" title="Who we supply" align="center" />
          <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
            {company.marketSegments.map((m, i) => {
              const Icon = segmentIcons[i] ?? Store;
              return (
                <Reveal as="li" key={m} delay={i * 50}>
                  <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-card px-4 py-8 text-center shadow-card">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-avocado-soft text-forest">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-semibold text-forest-deep">{m}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
