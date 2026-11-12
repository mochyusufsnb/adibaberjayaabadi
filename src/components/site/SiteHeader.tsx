import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/data/company";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div
        className={cn(
          "container-site flex h-16 items-center justify-between rounded-2xl border bg-cream/95 backdrop-blur-md transition-shadow md:h-[4.5rem]",
          scrolled ? "border-border shadow-soft" : "border-cream/40",
        )}
      >
        <Link to="/" aria-label="PT Adiba Berjaya Abadi — home" className="flex items-center">
          <Logo className="w-[8rem] md:w-[9.5rem]" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 text-sm font-medium text-forest-deep/75 transition-colors hover:bg-avocado-soft/60 hover:text-forest-deep"
              activeProps={{ className: "bg-avocado-soft/70 !text-forest-deep" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="forest" size="lg">
            <Link to="/products" hash="specifications">
              Product Specs
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-forest-deep hover:bg-avocado-soft/60 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="container-site mt-2 animate-rise rounded-2xl border border-border bg-cream p-3 shadow-soft lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: true }}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-forest-deep/80"
                  activeProps={{ className: "bg-avocado-soft/70 !text-forest-deep" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild variant="forest" size="xl" className="mt-2 w-full">
            <Link to="/products" hash="specifications">
              Product Specifications
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
