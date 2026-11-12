import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { photos } from "@/data/images";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Plantation, Harvest & Partners | PT Adiba Berjaya Abadi" },
      {
        name: "description",
        content:
          "Photos of the Pameling avocado plantation, nursery, fresh fruit, harvest crates and partner visits.",
      },
      { property: "og:title", content: "Gallery — Pameling Avocado" },
      {
        property: "og:description",
        content: "From the Wonorejo highland plantation to harvest crates and partner visits.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Category = "Plantation" | "Product" | "Harvest" | "Partner Visits";

const items: { img: { src: string; width: number; height: number }; alt: string; category: Category; wide?: boolean; tall?: boolean }[] = [
  { img: photos.plantationAerial, alt: "Aerial view of the Pameling avocado plantation", category: "Plantation", wide: true },
  { img: photos.nursery, alt: "Pameling avocado seedlings at the nursery", category: "Plantation" },
  { img: photos.onTree, alt: "Pameling avocados growing on the tree", category: "Plantation", tall: true },
  { img: photos.cut, alt: "Halved Pameling avocado with thick flesh", category: "Product" },
  { img: photos.inHand, alt: "A Pameling avocado held in hand", category: "Product" },
  { img: photos.cluster, alt: "Whole Pameling avocados", category: "Product", tall: true },
  { img: photos.crates, alt: "Harvested avocados arranged in crates", category: "Harvest", tall: true },
  { img: photos.visit1, alt: "Partners at an exhibition booth", category: "Partner Visits" },
  { img: photos.visit2, alt: "Visitors with PT Adiba Berjaya Abadi", category: "Partner Visits" },
  { img: photos.visit3, alt: "International visitor at the avocado nursery", category: "Partner Visits" },
  { img: photos.visit4, alt: "Partner meeting around the table", category: "Partner Visits" },
];

const filters: ("All" | Category)[] = ["All", "Plantation", "Product", "Harvest", "Partner Visits"];

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<(typeof items)[number] | null>(null);
  const shown = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="From orchard to crate."
        intro="A look at our plantation, fresh Pameling avocados, harvest and partner visits."
        image={photos.plantationAerial}
        imageAlt="Aerial view of the Pameling avocado plantation"
      />

      <section className="container-site py-16 md:py-24">
        <div role="tablist" aria-label="Filter photos" className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
                filter === f
                  ? "border-forest bg-forest text-primary-foreground"
                  : "border-border bg-card text-forest-deep hover:bg-avocado-soft/60",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid grid-flow-dense auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[240px] md:grid-cols-3 lg:grid-cols-4">
          {shown.map((item) => (
            <li
              key={item.img.src}
              className={cn(
                "animate-rise",
                item.wide && "col-span-2",
                item.tall && "row-span-2",
              )}
            >
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group relative block h-full w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Enlarge: ${item.alt}`}
              >
                <img
                  src={item.img.src}
                  width={item.img.width}
                  height={item.img.height}
                  loading="lazy"
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-bottom-overlay opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-forest-deep">
                  {item.category}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl border-none bg-ink p-2">
          <DialogTitle className="sr-only">{active?.alt}</DialogTitle>
          {active && (
            <figure>
              <img
                src={active.img.src}
                width={active.img.width}
                height={active.img.height}
                alt={active.alt}
                className="max-h-[80vh] w-full rounded-xl object-contain"
              />
              <figcaption className="px-3 py-3 text-sm text-cream/80">{active.alt}</figcaption>
            </figure>
          )}
        </DialogContent>
      </Dialog>

      <CtaBand />
    </>
  );
}
