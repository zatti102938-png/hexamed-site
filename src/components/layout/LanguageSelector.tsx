import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const flags: Record<string, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
  es: "🇪🇸",
};

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentLang = i18n.language?.slice(0, 2) || "pt";

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-white/80 transition-colors hover:text-primary"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{flags[currentLang]}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[140px] rounded-lg border border-border bg-card p-1 shadow-xl animate-in fade-in-0 zoom-in-95">
          {(["pt", "en", "es"] as const).map((lng) => (
            <button
              key={lng}
              onClick={() => changeLang(lng)}
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-primary/10 hover:text-primary",
                currentLang === lng ? "font-semibold text-primary" : "text-foreground/80"
              )}
            >
              <span>{flags[lng]}</span>
              {t(`lang.${lng}`)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
