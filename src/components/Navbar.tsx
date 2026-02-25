import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/i18n/LanguageContext";
import { languageLabels, t } from "@/i18n/translations";
import type { Language } from "@/i18n/translations";

const navKeys = ["problem", "architecture", "engineering", "validation", "impact", "principles", "evolution", "media"] as const;

const linkHrefs: Record<string, string> = {
  problem: "#problem",
  architecture: "#architecture",
  engineering: "#engineering",
  validation: "#deployment",
  impact: "#impact",
  principles: "#principles",
  evolution: "#evolution",
  media: "#media",
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = navKeys.map((key) => ({
    label: t.nav[key][lang],
    href: linkHrefs[key],
  }));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-mono font-bold text-primary text-sm tracking-wider">
          INDUSTRIAL.DEV
        </a>
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <span>{languageLabels[lang].flag}</span>
              <span>{languageLabels[lang].name}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 glass rounded-lg shadow-xl py-1 min-w-[140px] z-50">
                {(Object.keys(languageLabels) as Language[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => { setLang(key); setLangOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-xs transition-colors ${
                      lang === key ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>{languageLabels[key].flag}</span>
                    <span>{languageLabels[key].name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-border px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t border-border mt-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            {(Object.keys(languageLabels) as Language[]).map((key) => (
              <button
                key={key}
                onClick={() => setLang(key)}
                className={`flex items-center gap-1 px-2 py-1 rounded text-xs ${
                  lang === key ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {languageLabels[key].flag} {languageLabels[key].name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
