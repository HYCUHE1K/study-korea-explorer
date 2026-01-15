import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { label: t("header.nav.whyUSA"), href: "#" },
    { label: t("header.nav.lifeInUSA"), href: "#" },
    { label: t("header.nav.workInUSA"), href: "#" },
    { label: t("header.nav.universities"), href: "#" },
    { label: t("header.nav.courses"), href: "#" },
    { label: t("header.nav.scholarships"), href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-4 py-2 text-sm">
            <LanguageSwitcher />
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              {t("header.login")}
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              {t("header.signup")}
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-xl">🌰</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">Go</span>
              <span className="text-2xl font-bold text-foreground ml-1">Almond</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="h-5 w-5 text-muted-foreground" />
            </button>
            <button
              className="lg:hidden p-2 hover:bg-muted rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-foreground font-medium hover:text-primary transition-colors border-b border-border last:border-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
