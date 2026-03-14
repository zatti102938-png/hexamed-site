import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import logoBanner from "@/assets/logo-banner.webp";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const location = useLocation();

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-center gap-2 py-2 text-center text-xs font-medium sm:text-sm">
          <span>CLIQUE AQUI E CONHEÇA HEXAI E REVOLUCIONE SEU CENTRO DE IMAGEM</span>
          <Link to="/hexai" className="inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:opacity-80">
            Saiba mais <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-dark-surface backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
            <img src={logoBanner} alt="Hexamedical — Taking Care Your Equipment" className="h-9 w-auto md:h-10" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((item) => {
              const hasDropdown = item.children || item.groups;
              return (
                <div
                  key={item.label}
                  className="group relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                      location.pathname.startsWith(item.href) && item.href !== "#"
                        ? "text-primary"
                        : "text-white/80"
                    )}
                  >
                    {item.label}
                    {hasDropdown && (
                      <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Mega-menu (grouped) */}
                  {item.groups && openDropdown === item.label && (
                    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 rounded-lg border border-border bg-card p-4 shadow-xl animate-in fade-in-0 zoom-in-95">
                      <div className="flex gap-8">
                        {item.groups.map((group) => (
                          <div key={group.groupLabel} className="min-w-[200px]">
                            <div className="mb-2 px-3 text-xs font-bold uppercase tracking-widest text-primary">
                              {group.groupLabel}
                            </div>
                            <div className="space-y-0.5">
                              {group.items.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 border-t border-border pt-3">
                        <Link
                          to={item.href}
                          className="flex items-center gap-1 px-3 text-xs font-semibold text-primary hover:underline"
                        >
                          Ver todos os produtos
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Simple dropdown */}
                  {item.children && !item.groups && openDropdown === item.label && (
                    <div className="absolute left-0 top-full z-50 min-w-[260px] rounded-lg border border-border bg-card p-2 shadow-xl animate-in fade-in-0 zoom-in-95">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block rounded-md px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-border bg-card lg:hidden">
            <div className="container space-y-1 py-4">
              {navigation.map((item) => (
                <div key={item.label}>
                  {/* Grouped nav (Produtos) */}
                  {item.groups ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80"
                      >
                        {item.label}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === item.label && "rotate-180")} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="ml-3 space-y-3 border-l-2 border-primary/30 pl-3">
                          {item.groups.map((group) => (
                            <div key={group.groupLabel}>
                              <button
                                onClick={() => setOpenMobileGroup(openMobileGroup === group.groupLabel ? null : group.groupLabel)}
                                className="flex w-full items-center justify-between py-1.5 text-xs font-bold uppercase tracking-widest text-primary"
                              >
                                {group.groupLabel}
                                <ChevronDown className={cn("h-3 w-3 transition-transform", openMobileGroup === group.groupLabel && "rotate-180")} />
                              </button>
                              {openMobileGroup === group.groupLabel && (
                                <div className="ml-2 space-y-0.5 border-l border-border pl-3">
                                  {group.items.map((child) => (
                                    <Link
                                      key={child.href}
                                      to={child.href}
                                      className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-primary"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : item.children ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80"
                      >
                        {item.label}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === item.label && "rotate-180")} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="ml-3 space-y-1 border-l-2 border-primary/30 pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <Button asChild className="w-full border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link to="/area-veterinaria" onClick={() => setMobileOpen(false)}>
                    Área Veterinária
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
