import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { navigation } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import logoBanner from "@/assets/logo-banner.webp";
import LanguageSelector from "./LanguageSelector";

const navKeys: Record<string, string> = {
  "Produtos": "nav.products",
  "Serviços": "nav.services",
  "Estrutura": "nav.structure",
  "Blog": "nav.blog",
  "Apoio": "nav.support",
  "Contato": "nav.contact",
};

const groupKeys: Record<string, string> = {
  "Ressonância Magnética": "nav.groupRM",
  "Raio-X": "nav.groupXray",
  "Inteligência Artificial": "nav.groupAI",
  "Bombas Injetoras": "nav.groupInjectors",
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const [openDesktopGroup, setOpenDesktopGroup] = useState<string | null>(null);
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-center gap-2 py-2 text-center text-xs font-medium sm:text-sm">
          <span>{t("announcement.text")}</span>
          <Link to="/hexai" className="inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:opacity-80">
            {t("announcement.cta")} <ArrowRight className="h-3.5 w-3.5" />
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
                    {t(navKeys[item.label] || item.label)}
                    {hasDropdown && (
                      <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Mega-menu (accordion style like mobile) */}
                  {item.groups && openDropdown === item.label && (
                    <div className="absolute left-0 top-full z-50 min-w-[280px] rounded-lg border border-border bg-card p-3 shadow-2xl animate-in fade-in-0 zoom-in-95">
                      <div className="space-y-1">
                        {item.groups.map((group) => (
                          <div key={group.groupLabel}>
                            <button
                              onClick={() => setOpenDesktopGroup(openDesktopGroup === group.groupLabel ? null : group.groupLabel)}
                              className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary/5"
                            >
                              {t(groupKeys[group.groupLabel] || group.groupLabel)}
                              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", openDesktopGroup === group.groupLabel && "rotate-180")} />
                            </button>
                            {openDesktopGroup === group.groupLabel && (
                              <div className="ml-3 space-y-0.5 border-l-2 border-primary/20 pl-3 pb-1">
                                {group.items.map((child) => (
                                  <Link
                                    key={child.href}
                                    to={child.href}
                                    className="block rounded-md px-2 py-2 text-sm text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 border-t border-border pt-2">
                        <Link
                          to={item.href}
                          className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-primary hover:underline"
                        >
                          {t("nav.viewAllProducts")}
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

          {/* Language Selector + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <LanguageSelector />
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
                  {item.groups ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80"
                      >
                        {t(navKeys[item.label] || item.label)}
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
                                {t(groupKeys[group.groupLabel] || group.groupLabel)}
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
                        {t(navKeys[item.label] || item.label)}
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
                      {t(navKeys[item.label] || item.label)}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
