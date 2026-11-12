import { createFileRoute } from "@tanstack/react-router";
import { Check, Eye, Target } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  company,
  cultivationArea,
  totalCultivationArea,
  totalOutsideMalang,
} from "@/data/company";
import { photos } from "@/data/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Vision, Mission & Plantation | PT Adiba Berjaya Abadi" },
      {
        name: "description",
        content:
          "Learn about PT Adiba Berjaya Abadi, our vision and mission, and the Pameling avocado plantation in Wonorejo, Lawang, Malang.",
      },
      { property: "og:title", content: "About PT Adiba Berjaya Abadi" },
      {
        property: "og:description",
        content:
          "An Indonesian trading company supplying premium jumbo Pameling avocados sourced directly from trusted local farmers.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const maxHa = cultivationArea.malangRegency;
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Rooted in Indonesian farming partnerships."
        intro="An Indonesian trading company supplying premium jumbo avocados to local and international markets."
        image={photos.nursery}
        imageAlt="Rows of young Pameling avocado trees at the nursery"
      />

      {/* Company intro */}
      <section className="container-site grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-5">
          <SectionHeading eyebrow="Who We Are" title={company.name} />
        </Reveal>
        <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-7">
          {company.about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </Reveal>
      </section>

      {/* Vision & Mission */}
      <section className="bg-cream">
        <div className="container-site py-20 md:py-28">
          <SectionHeading eyebrow="Vision & Mission" title="What guides our business" align="center" />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal className="rounded-3xl bg-forest p-8 text-cream shadow-soft md:p-12">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream/10 text-gold">
                <Eye className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-2xl font-semibold">Our Vision</h3>
              <p className="mt-4 text-lg leading-relaxed text-cream/80">{company.vision}</p>
            </Reveal>
            <Reveal delay={100} className="rounded-3xl border border-border bg-card p-8 shadow-card md:p-12">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-avocado-soft text-forest">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-forest-deep">Our Mission</h3>
              <ul className="mt-5 space-y-4">
                {company.mission.map((m) => (
                  <li key={m} className="flex gap-3 text-lg leading-relaxed text-muted-foreground">
                    <Check className="mt-1.5 h-5 w-5 shrink-0 text-avocado" />
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Plantation */}
      <section id="plantation" className="scroll-mt-28 container-site py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="Our Plantation" title={company.plantation.title} intro={company.plantation.subtitle} />
          <p className="leading-relaxed text-muted-foreground">{company.plantation.text}</p>
        </div>
        <Reveal className="mt-12">
          <img
            src={photos.plantationAerial.src}
            width={photos.plantationAerial.width}
            height={photos.plantationAerial.height}
            loading="lazy"
            alt="Aerial view of the Pameling avocado plantation in Wonorejo, Lawang"
            className="aspect-[16/7] w-full rounded-3xl object-cover md:aspect-[21/6]"
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <Reveal className="rounded-3xl bg-forest-deep p-8 text-cream md:p-10 lg:col-span-5">
            <p className="eyebrow text-gold">Cultivation Area Development</p>
            <p className="mt-2 text-sm text-cream/60">{cultivationArea.period}</p>
            <p className="mt-8 font-display text-6xl font-semibold">±{totalCultivationArea}</p>
            <p className="mt-1 text-cream/70">hectares in total (approx.)</p>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-cream/15 pt-8">
              <div>
                <dt className="text-sm text-cream/60">Malang Regency</dt>
                <dd className="mt-1 font-display text-3xl font-semibold text-avocado">{cultivationArea.malangRegency} ha</dd>
              </div>
              <div>
                <dt className="text-sm text-cream/60">Outside Malang</dt>
                <dd className="mt-1 font-display text-3xl font-semibold text-gold">±{totalOutsideMalang} ha</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={100} className="rounded-3xl border border-border bg-card p-8 shadow-card md:p-10 lg:col-span-7">
            <h3 className="text-lg font-semibold text-forest-deep">Regions outside Malang Regency</h3>
            <ul className="mt-6 space-y-4">
              {cultivationArea.outsideMalang.map((r) => (
                <li key={r.region}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-medium text-forest-deep">{r.region}</span>
                    <span className="text-muted-foreground">±{r.ha} ha</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-cream-deep">
                    <div
                      className="h-full rounded-full bg-avocado"
                      style={{ width: `${Math.max(3, (r.ha / maxHa) * 100)}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">Bars are scaled relative to Malang Regency (360 ha).</p>
          </Reveal>
        </div>
      </section>

      {/* Partner visits */}
      <section className="bg-cream">
        <div className="container-site py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-5">
              <SectionHeading eyebrow="Partner Visits" title="Welcoming international visitors" intro={company.partnerVisits} />
            </Reveal>
            <div className="grid grid-cols-2 gap-4 lg:col-span-7">
              {[photos.visit1, photos.visit2, photos.visit3, photos.visit4].map((img, i) => (
                <Reveal key={img.src} delay={i * 60}>
                  <img
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    alt="Partners and visitors with PT Adiba Berjaya Abadi"
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
