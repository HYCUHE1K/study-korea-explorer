import { useState } from "react";
import { Menu, X, Search, User, LogOut, MessageCircle, ChevronDown, FileText, ClipboardList, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
}

interface QuickLink {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const { t } = useTranslation();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const whyUSAItems: MegaMenuItem[] = [
    { 
      title: t("header.megaMenu.whyUSA.items.overview.title"), 
      description: t("header.megaMenu.whyUSA.items.overview.description"),
      href: "/why-usa/overview"
    },
    { 
      title: t("header.megaMenu.whyUSA.items.education.title"), 
      description: t("header.megaMenu.whyUSA.items.education.description"),
      href: "/why-usa/education"
    },
    { 
      title: t("header.megaMenu.whyUSA.items.rankings.title"), 
      description: t("header.megaMenu.whyUSA.items.rankings.description"),
      href: "/why-usa/rankings"
    },
    { 
      title: t("header.megaMenu.whyUSA.items.culture.title"), 
      description: t("header.megaMenu.whyUSA.items.culture.description"),
      href: "/why-usa/culture"
    },
    { 
      title: t("header.megaMenu.whyUSA.items.opportunities.title"), 
      description: t("header.megaMenu.whyUSA.items.opportunities.description"),
      href: "/why-usa/opportunities"
    },
    { 
      title: t("header.megaMenu.whyUSA.items.research.title"), 
      description: t("header.megaMenu.whyUSA.items.research.description"),
      href: "/why-usa/research"
    },
  ];

  const planStudiesItems: MegaMenuItem[] = [
    { 
      title: t("header.megaMenu.planStudies.items.educationSystem.title"), 
      description: t("header.megaMenu.planStudies.items.educationSystem.description"),
      href: "/plan-studies/education-system"
    },
    { 
      title: t("header.megaMenu.planStudies.items.typesOfSchools.title"), 
      description: t("header.megaMenu.planStudies.items.typesOfSchools.description"),
      href: "/plan-studies/types-of-schools"
    },
    { 
      title: t("header.megaMenu.planStudies.items.accreditedUniversities.title"), 
      description: t("header.megaMenu.planStudies.items.accreditedUniversities.description"),
      href: "/plan-studies/accredited-universities"
    },
    { 
      title: t("header.megaMenu.planStudies.items.englishTests.title"), 
      description: t("header.megaMenu.planStudies.items.englishTests.description"),
      href: "/plan-studies/english-tests"
    },
    { 
      title: t("header.megaMenu.planStudies.items.studyExpenses.title"), 
      description: t("header.megaMenu.planStudies.items.studyExpenses.description"),
      href: "/plan-studies/study-expenses"
    },
    { 
      title: t("header.megaMenu.planStudies.items.scholarships.title"), 
      description: t("header.megaMenu.planStudies.items.scholarships.description"),
      href: "/plan-studies/scholarships"
    },
    { 
      title: t("header.megaMenu.planStudies.items.visaStatus.title"), 
      description: t("header.megaMenu.planStudies.items.visaStatus.description"),
      href: "/plan-studies/visa-status"
    },
  ];

  const planStudiesQuickLinks: QuickLink[] = [
    {
      title: t("header.megaMenu.planStudies.quickLinks.flowchart"),
      href: "/plan-studies/flowchart",
      icon: <ClipboardList className="h-5 w-5" />
    },
    {
      title: t("header.megaMenu.planStudies.quickLinks.application"),
      href: "/plan-studies/application",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: t("header.megaMenu.planStudies.quickLinks.guidebook"),
      href: "/plan-studies/guidebook",
      icon: <BookOpen className="h-5 w-5" />
    },
  ];

  const lifeInUSAItems: MegaMenuItem[] = [
    { 
      title: t("header.megaMenu.lifeInUSA.items.immigration.title"), 
      description: t("header.megaMenu.lifeInUSA.items.immigration.description"),
      href: "/life-in-usa/immigration"
    },
    { 
      title: t("header.megaMenu.lifeInUSA.items.housing.title"), 
      description: t("header.megaMenu.lifeInUSA.items.housing.description"),
      href: "/life-in-usa/housing"
    },
    { 
      title: t("header.megaMenu.lifeInUSA.items.regions.title"), 
      description: t("header.megaMenu.lifeInUSA.items.regions.description"),
      href: "/life-in-usa/regions"
    },
    { 
      title: t("header.megaMenu.lifeInUSA.items.livingCosts.title"), 
      description: t("header.megaMenu.lifeInUSA.items.livingCosts.description"),
      href: "/life-in-usa/living-costs"
    },
    { 
      title: t("header.megaMenu.lifeInUSA.items.stayDuration.title"), 
      description: t("header.megaMenu.lifeInUSA.items.stayDuration.description"),
      href: "/life-in-usa/stay-duration"
    },
    { 
      title: t("header.megaMenu.lifeInUSA.items.legalInfo.title"), 
      description: t("header.megaMenu.lifeInUSA.items.legalInfo.description"),
      href: "/life-in-usa/legal-info"
    },
  ];

  const workInUSAItems: MegaMenuItem[] = [
    { 
      title: t("header.megaMenu.workInUSA.items.employment.title"), 
      description: t("header.megaMenu.workInUSA.items.employment.description"),
      href: "/work-in-usa/employment"
    },
    { 
      title: t("header.megaMenu.workInUSA.items.system.title"), 
      description: t("header.megaMenu.workInUSA.items.system.description"),
      href: "/work-in-usa/system"
    },
    { 
      title: t("header.megaMenu.workInUSA.items.internship.title"), 
      description: t("header.megaMenu.workInUSA.items.internship.description"),
      href: "/work-in-usa/internship"
    },
    { 
      title: t("header.megaMenu.workInUSA.items.opportunities.title"), 
      description: t("header.megaMenu.workInUSA.items.opportunities.description"),
      href: "/work-in-usa/opportunities"
    },
  ];

  const communityItems: MegaMenuItem[] = [
    { 
      title: t("header.megaMenu.community.items.stories.title"), 
      description: t("header.megaMenu.community.items.stories.description"),
      href: "/community/stories"
    },
    { 
      title: t("header.megaMenu.community.items.supporters.title"), 
      description: t("header.megaMenu.community.items.supporters.description"),
      href: "/community/supporters"
    },
    { 
      title: t("header.megaMenu.community.items.association.title"), 
      description: t("header.megaMenu.community.items.association.description"),
      href: "/community/association"
    },
    { 
      title: t("header.megaMenu.community.items.faq.title"), 
      description: t("header.megaMenu.community.items.faq.description"),
      href: "/community/faq"
    },
  ];

  const getMegaMenuItems = (menuKey: string) => {
    switch (menuKey) {
      case "whyUSA":
        return { items: whyUSAItems, quickLinks: null };
      case "planStudies":
        return { items: planStudiesItems, quickLinks: planStudiesQuickLinks };
      case "lifeInUSA":
        return { items: lifeInUSAItems, quickLinks: null };
      case "workInUSA":
        return { items: workInUSAItems, quickLinks: null };
      case "community":
        return { items: communityItems, quickLinks: null };
      default:
        return { items: [], quickLinks: null };
    }
  };

  const navItems = [
    { label: t("header.nav.whyUSA"), href: "#", hasMegaMenu: true, menuKey: "whyUSA" },
    { label: t("header.nav.planStudies"), href: "#", hasMegaMenu: true, menuKey: "planStudies" },
    { label: t("header.nav.lifeInUSA"), href: "#", hasMegaMenu: true, menuKey: "lifeInUSA" },
    { label: t("header.nav.workInUSA"), href: "#", hasMegaMenu: true, menuKey: "workInUSA" },
    { label: t("header.nav.community"), href: "#", hasMegaMenu: true, menuKey: "community" },
    { label: t("header.nav.universities"), href: "#" },
    { label: t("header.nav.aiChat"), href: "/chat", isHighlight: true },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-4 py-2 text-sm">
            <LanguageSwitcher />
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    {user.email}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    <User className="mr-2 h-4 w-4" />
                    {t("profile.title")}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    {t("auth.logout")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("header.login")}
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("header.signup")}
                  </button>
                </Link>
              </>
            )}
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
              item.hasMegaMenu ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(item.menuKey || null)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <button
                    className="text-foreground font-medium hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${hoveredMenu === item.menuKey ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mega Menu Dropdown */}
                  {hoveredMenu === item.menuKey && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2">
                      {item.menuKey === "planStudies" ? (
                        <div className="bg-background border border-border rounded-lg shadow-xl p-6 min-w-[900px] flex gap-6">
                          {/* Left: Menu Items Grid */}
                          <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-4">
                            {getMegaMenuItems(item.menuKey).items.map((menuItem) => (
                              <Link
                                key={menuItem.href}
                                to={menuItem.href}
                                className="group py-2 border-b border-border hover:border-primary transition-colors"
                              >
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                  {menuItem.title}
                                </h4>
                              </Link>
                            ))}
                          </div>
                          {/* Right: Quick Links */}
                          <div className="w-[200px] border-l border-border pl-6 flex flex-col gap-3">
                            {getMegaMenuItems(item.menuKey).quickLinks?.map((quickLink) => (
                              <Link
                                key={quickLink.href}
                                to={quickLink.href}
                                className="group flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary hover:bg-muted transition-colors"
                              >
                                <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                                  {quickLink.title}
                                </span>
                                {quickLink.icon}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-background border border-border rounded-lg shadow-xl p-6 min-w-[600px] grid grid-cols-2 gap-4">
                          {getMegaMenuItems(item.menuKey).items.map((menuItem) => (
                            <Link
                              key={menuItem.href}
                              to={menuItem.href}
                              className="group p-3 rounded-lg hover:bg-muted transition-colors"
                            >
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {menuItem.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {menuItem.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-medium transition-colors flex items-center gap-1 ${
                    item.isHighlight 
                      ? 'text-primary hover:text-primary/80 bg-primary/10 px-3 py-1.5 rounded-full' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.isHighlight && <MessageCircle className="h-4 w-4" />}
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              )
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
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block py-3 font-medium transition-colors border-b border-border last:border-0 flex items-center gap-2 ${
                    item.isHighlight ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.isHighlight && <MessageCircle className="h-4 w-4" />}
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 text-foreground font-medium hover:text-primary transition-colors border-b border-border last:border-0"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};