import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileBadge2 } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { company, futureProducts, keyFigures, specifications, varietyRegistration } from "@/data/company";
import { photos } from "@/data/images";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Pameling Avocado — Products & Specifications | PT Adiba Berjaya Abadi" },
      {
        name: "description",
        content:
          "Pameling jumbo avocado specifications: 579.5–1,300 g per fruit, 80.7–88% edible portion, 500–900 kg yield per tree per year.",
      },
      { property: "og:title", content: "Pameling Avocado — Product Specifications" },
      {
        property: "og:description",
        content: "Extra large, thick flesh, premium quality jumbo avocado from Malang, Indonesia.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Pameling Avocado",
          brand: { "@type": "Brand", name: "Alpukat Pameling" },
          description: "Jumbo avocado variety from Wonorejo, Lawang, Malang, East Java, Indonesia.",
          manufacturer: { "@type": "Organization", name: "PT Adiba Berjaya Abadi" },
        }),
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Products"
        title="Pameling Jumbo Avocado"
        intro={company.tagline}
        image={photos.inHand}
        imageAlt="A Pameling avocado held in hand"
      />

      {/* Showcase */}
      <section className="container-site py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-3xl bg-ink shadow-soft">
              <img
                src={photos.cluster.src}
                width={photos.cluster.width}
                height={photos.cluster.height}
                loading="lazy"
                alt="Whole Pameling avocados with smooth green skin"
                className="mx-auto aspect-[4/5] w-full object-cover"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-foreground">
              Fresh whole fruit
            </span>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Alpukat Pameling"
              title="Extra large fruit with thick, savoury flesh"
              intro="Pameling is an avocado variety originating from Wonorejo Village, Lawang, Malang Regency, East Java. Its elongated, mango-like fruit keeps its moderate yellowish-green skin even when ripe, revealing light greenish-yellow flesh with a finely fibrous texture and a savoury, slightly sweet taste."
            />
            <dl className="mt-10 grid grid-cols-2 gap-4">
              {keyFigures.map((f) => (
                <div key={f.label} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{f.label}</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-forest">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="scroll-mt-28 bg-cream">
        <div className="container-site py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Product Specifications"
                title="Official variety description"
                intro="Figures below are taken from the official description of the Pameling avocado variety."
              />
              <div className="mt-8 flex gap-4 rounded-2xl border border-border bg-card p-5">
                <FileBadge2 className="mt-0.5 h-6 w-6 shrink-0 text-forest" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Appendix to the {varietyRegistration}.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <Tabs defaultValue={specifications[0].title}>
                <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 rounded-2xl bg-cream-deep p-1.5">
                  {specifications.map((g) => (
                    <TabsTrigger
                      key={g.title}
                      value={g.title}
                      className="rounded-xl px-4 py-2 text-sm data-[state=active]:bg-forest data-[state=active]:text-primary-foreground"
                    >
                      {g.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {specifications.map((g) => (
                  <TabsContent key={g.title} value={g.title} className="mt-4">
                    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                      <table className="w-full text-left text-sm">
                        <caption className="sr-only">{g.title} specifications</caption>
                        <tbody className="divide-y divide-border">
                          {g.rows.map((r) => (
                            <tr key={r.label} className="flex flex-col gap-1 px-5 py-4 sm:table-row sm:p-0">
                              <th scope="row" className="font-medium text-muted-foreground sm:w-2/5 sm:px-6 sm:py-4">
                                {r.label}
                              </th>
                              <td className="font-semibold text-forest-deep sm:px-6 sm:py-4">{r.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Future products */}
      <section className="container-site py-20 md:py-28">
        <SectionHeading
          eyebrow="Coming Soon"
          title="Our future value-added products"
          intro="Beyond fresh whole avocados, we are preparing processed products — avocado oil, avocado seed powder and frozen avocado — to offer value-added solutions for a wider range of market needs."
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {futureProducts.map((p, i) => {
            const img = photos[p.key];
            return (
              <Reveal as="li" key={p.key} delay={i * 80}>
                <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={img.src}
                      width={img.width}
                      height={img.height}
                      loading="lazy"
                      alt={`${p.name} — illustrative image`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-3 py-1 text-[0.7rem] font-medium text-cream backdrop-blur">
                      Illustrative image
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <h3 className="text-lg font-semibold text-forest-deep">{p.name}</h3>
                    <span className="rounded-full bg-avocado-soft px-3 py-1 text-xs font-semibold text-forest">Upcoming</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
        <div className="mt-12">
          <Button asChild variant="forestOutline" size="xl">
            <Link to="/quality">
              How we handle quality <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
