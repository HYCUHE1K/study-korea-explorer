import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Import images
import heroImage from "@/assets/why-usa-hero.jpg";
import educationImage from "@/assets/why-usa-education.jpg";
import researchImage from "@/assets/why-usa-research.jpg";
import opportunitiesImage from "@/assets/why-usa-opportunities.jpg";
import cultureImage from "@/assets/why-usa-culture.jpg";
import lifeImage from "@/assets/why-usa-life.jpg";
import scholarshipImage from "@/assets/why-usa-scholarship.jpg";

interface FeatureCard {
  titleKey: string;
  descriptionKey: string;
  image: string;
  href: string;
}

const WhyUSA = () => {
  const { t } = useTranslation();

  const featureCards: FeatureCard[] = [
    {
      titleKey: "whyUSA.features.education.title",
      descriptionKey: "whyUSA.features.education.description",
      image: educationImage,
      href: "/why-usa/education",
    },
    {
      titleKey: "whyUSA.features.research.title",
      descriptionKey: "whyUSA.features.research.description",
      image: researchImage,
      href: "/why-usa/research",
    },
    {
      titleKey: "whyUSA.features.scholarship.title",
      descriptionKey: "whyUSA.features.scholarship.description",
      image: scholarshipImage,
      href: "/why-usa/scholarships",
    },
    {
      titleKey: "whyUSA.features.life.title",
      descriptionKey: "whyUSA.features.life.description",
      image: lifeImage,
      href: "/why-usa/life",
    },
    {
      titleKey: "whyUSA.features.opportunities.title",
      descriptionKey: "whyUSA.features.opportunities.description",
      image: opportunitiesImage,
      href: "/why-usa/opportunities",
    },
    {
      titleKey: "whyUSA.features.culture.title",
      descriptionKey: "whyUSA.features.culture.description",
      image: cultureImage,
      href: "/why-usa/culture",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t("whyUSA.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            {t("whyUSA.hero.subtitle")}
          </p>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mt-4">
            {t("whyUSA.hero.description")}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                <Home className="w-4 h-4" />
              </Link>
            </li>
            <li className="text-muted-foreground">&gt;</li>
            <li className="text-primary font-medium">
              {t("whyUSA.breadcrumb")}
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t("whyUSA.sectionTitle")}
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featureCards.map((card, index) => (
              <Link
                key={index}
                to={card.href}
                className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={card.image}
                    alt={t(card.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(card.descriptionKey)}
                  </p>
                  <div className="flex items-center justify-end">
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhyUSA;
