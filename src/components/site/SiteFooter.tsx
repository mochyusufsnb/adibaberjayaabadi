import { Link } from "@tanstack/react-router";

import { company, navItems } from "@/data/company";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <div className="inline-block rounded-2xl bg-cream px-5 py-4">
            <Logo className="w-48" />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
            Premium jumbo Pameling avocados from the highlands of Malang, East Java — sourced directly
            from trusted local farmers for local and international markets.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-cream/80 transition-colors hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="eyebrow text-gold">Markets we serve</p>
          <ul className="mt-5 space-y-3 text-sm text-cream/80">
            {company.marketSegments.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-cream/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>{company.brand} · Malang, East Java, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
