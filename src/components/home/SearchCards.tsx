import { GraduationCap, Building2, Languages, School, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export const SearchCards = () => {
  const { t } = useTranslation();

  const programOptions = [
    {
      icon: GraduationCap,
      title: t("programs.university.title"),
      description: t("programs.university.description"),
      color: "bg-primary",
      hoverColor: "hover:bg-primary/90",
    },
    {
      icon: Building2,
      title: t("programs.ccTransfer.title"),
      description: t("programs.ccTransfer.description"),
      color: "bg-almond",
      hoverColor: "hover:bg-almond/90",
    },
    {
      icon: Languages,
      title: t("programs.language.title"),
      description: t("programs.language.description"),
      color: "bg-gold",
      hoverColor: "hover:bg-gold/90",
    },
    {
      icon: School,
      title: t("programs.k12.title"),
      description: t("programs.k12.description"),
      color: "bg-sage",
      hoverColor: "hover:bg-sage/90",
    },
  ];

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t("programs.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("programs.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {programOptions.map((option) => (
            <Card
              key={option.title}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 hover:border-primary/30 bg-background"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110 shadow-md`}
                >
                  <option.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 min-h-[60px]">
                  {option.description}
                </p>
                <button
                  className={`inline-flex items-center justify-center px-5 py-2 ${option.color} ${option.hoverColor} text-primary-foreground rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md`}
                >
                  {t("programs.explore")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
