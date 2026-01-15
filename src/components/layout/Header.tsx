import { useState } from "react";
import { Menu, X, Search, Globe, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Why Korea", href: "#" },
  { label: "Plan your studies", href: "#" },
  { label: "Life in Korea", href: "#" },
  { label: "Work in Korea", href: "#" },
  { label: "Education Fair", href: "#" },
  { label: "Community", href: "#" },
  { label: "Notice", href: "#" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-4 py-2 text-sm">
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="h-4 w-4" />
              <span>한국어</span>
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              로그인
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              회원가입
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">Study</span>
              <span className="text-2xl font-bold text-foreground">in</span>
              <span className="text-2xl font-bold text-secondary">Korea</span>
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
