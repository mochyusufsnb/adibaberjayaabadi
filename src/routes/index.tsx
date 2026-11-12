import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Handshake, MapPinned, Mountain, Scale, ShieldCheck } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { company, keyFigures, totalCultivationArea } from "@/data/company";
import { hero, photos } from "@/data/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premium Pameling Avocado Exporter | PT Adiba Berjaya Abadi" },
      {
        name: "description",
        content:
          "Premium jumbo Pameling avocados from the highlands of Malang, Indonesia — sourced directly from trusted local farmers by PT Adiba Berjaya Abadi.",
      },
      { property: "og:title", content: "Premium Avocado, Naturally Delivered — PT Adiba Berjaya Abadi" },
      {
        property: "og:description",
        content:
          "Jumbo Pameling avocados up to 1.3 kg per fruit, grown on volcanic highland soil in Malang, East Java.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const reasons = [
  {
    icon: Handshake,
    title: "Direct from trusted farmers",
    text: "Jumbo avocados sourced directly from trusted local farmers through long-term partnerships.",
  },
  {
    icon: Scale,
    title: "Exceptionally large fruit",
    text: "Pameling avocados weigh 579.5 – 1,300 g per fruit, with an edible portion of 80.7 – 88%.",
  },
  {
    icon: BadgeCheck,
    title: "Officially registered variety",
    text: "Pameling is described in a Decree of Indonesia's Minister of Agriculture (No. 112/Kpts/SR.120/D.2.7/7/2019).",
  },
  {
    icon: Mountain,
    title: "Volcanic highland origin",
    text: "Cultivated in the highlands of Wonorejo, Lawang, Malang — on fertile volcanic soil.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-checked handling",
    text: "Every product is handled through a managed process and goes through quality checks.",
  },
  {
    icon: MapPinned,
    title: `±${totalCultivationArea} ha developed`,
    text: "Cultivation area development across East, Central and West Java between 2022 and 2025.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-forest-deep">
        <img
          src={hero.src}
          width={hero.width}
          height={hero.height}
          alt="Large green avocados hanging from a tree in a misty highland orchard"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-bottom-overlay" aria-hidden />

        <div className="container-site flex flex-1 items-center pb-16 pt-32 md:pt-36">
          <div className="max-w-3xl animate-rise">
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span className="h-px w-8 bg-gold/60" aria-hidden />
              {company.brand} · Malang, Indonesia
            </p>
            <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.04] text-cream sm:text-6xl md:text-7xl">
              Premium Avocado, <span className="text-avocado">Naturally</span> Delivered.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
              {company.name} supplies premium jumbo Pameling avocados — sourced directly from trusted
              local farmers in the volcanic highlands of East Java — for local and international markets.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/products">
                  Explore Our Products <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/about">About the Company</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="container-site pb-8 md:pb-12">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream/15 bg-cream/15 backdrop-blur-md md:grid-cols-4">
            {keyFigures.map((f) => (
              <div key={f.label} className="bg-forest-deep/55 px-5 py-5 md:px-7 md:py-6">
                <dt className="text-xs font-medium uppercase tracking-wider text-cream/60">{f.label}</dt>
                <dd className="mt-1.5 font-display text-xl font-semibold text-cream md:text-2xl">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Why choose */}
      <section className="container-site py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                Why buyers choose <span className="text-forest">Alpukat Pameling</span>
              </>
            }
          />
          <p className="max-w-sm text-muted-foreground">
            A distinctive Indonesian variety, grown at origin and handled with care from farm to partner.
          </p>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-transform duration-300 hover:-translate-y-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-avocado-soft text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                  <r.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-forest-deep">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* About intro */}
      <section className="bg-cream">
        <div className="container-site grid items-center gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <Reveal className="relative">
            <img
              src={photos.cut.src}
              width={photos.cut.width}
              height={photos.cut.height}
              loading="lazy"
              alt="A halved Pameling avocado showing its thick, light greenish-yellow flesh"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 right-4 max-w-[15rem] rounded-2xl bg-forest p-5 text-cream shadow-soft md:-right-6">
              <p className="font-display text-3xl font-semibold">80.7–88%</p>
              <p className="mt-1 text-sm text-cream/75">edible portion — thick flesh, savoury and slightly sweet</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow="About Our Company" title="Indonesia's finest jumbo avocados, from farm to partner." />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              {company.about.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <Button asChild variant="forestOutline" size="xl" className="mt-8">
              <Link to="/about">
                Our story, vision &amp; mission <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Product showcase */}
      <section className="container-site py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Product"
              title="Pameling Avocado"
              intro={company.tagline}
            />
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {[
                ["Fruit shape", "Elongated, mango-like"],
                ["Skin", "Stays green when ripe"],
                ["Flesh", "Light greenish yellow, finely fibrous"],
                ["Harvest seasons", "March & November"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline justify-between gap-6 py-4 text-sm">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="text-right font-medium text-forest-deep">{v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="forest" size="xl">
                <Link to="/products">
                  View Product Details <ArrowRight />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100} className="grid grid-cols-2 gap-4 lg:col-span-7">
            <img
              src={photos.inHand.src}
              width={photos.inHand.width}
              height={photos.inHand.height}
              loading="lazy"
              alt="A whole Pameling avocado held in hand, showing its size"
              className="col-span-2 aspect-[16/9] w-full rounded-3xl object-cover"
            />
            <img
              src={photos.onTree.src}
              width={photos.onTree.width}
              height={photos.onTree.height}
              loading="lazy"
              alt="Pameling avocados growing on the tree"
              className="aspect-square w-full rounded-3xl object-cover"
            />
            <img
              src={photos.crates.src}
              width={photos.crates.width}
              height={photos.crates.height}
              loading="lazy"
              alt="Harvested Pameling avocados arranged in yellow crates"
              className="aspect-square w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Plantation */}
      <section className="relative isolate overflow-hidden bg-forest-deep text-cream">
        <div className="absolute inset-0 -z-10 leaf-pattern opacity-60" aria-hidden />
        <div className="container-site py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <SectionHeading
              tone="dark"
              eyebrow="Our Plantation"
              title={company.plantation.title}
              intro={company.plantation.subtitle}
            />
            <p className="leading-relaxed text-cream/75">{company.plantation.text}</p>
          </div>
          <Reveal className="mt-12">
            <img
              src={photos.plantationAerial.src}
              width={photos.plantationAerial.width}
              height={photos.plantationAerial.height}
              loading="lazy"
              alt="Aerial view of the Pameling avocado plantation with rows of young trees"
              className="aspect-[16/7] w-full rounded-3xl object-cover md:aspect-[21/6]"
            />
          </Reveal>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="text-cream/75">
              <span className="font-display text-3xl font-semibold text-gold">±{totalCultivationArea} ha</span>
              <span className="ml-3">cultivation area developed, 2022–2025</span>
            </p>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/about" hash="plantation">
                See cultivation regions <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="container-site py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Gallery" title="From orchard to crate" />
          <Button asChild variant="forestOutline" size="xl">
            <Link to="/gallery">
              Open the gallery <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
          {[
            { img: photos.nursery, alt: "Pameling avocado seedlings at the nursery", cls: "col-span-2 row-span-2 aspect-square md:aspect-auto" },
            { img: photos.onTree, alt: "Avocados on the tree", cls: "aspect-square" },
            { img: photos.cut, alt: "Halved Pameling avocado", cls: "aspect-square" },
            { img: photos.visit3, alt: "Visitors at the avocado nursery", cls: "col-span-2 aspect-[2/1] md:aspect-auto" },
          ].map((g) => (
            <Reveal key={g.alt} className={`overflow-hidden rounded-3xl ${g.cls}`}>
              <img
                src={g.img.src}
                width={g.img.width}
                height={g.img.height}
                loading="lazy"
                alt={g.alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
