import {
  GraduationCap,
  FileText,
  MessageCircle,
  Award,
  Book,
  Calendar,
  Briefcase,
  Users,
  Globe,
  Heart,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export const HelpfulResources = () => {
  const { t } = useTranslation();

  const resources = [
    {
      icon: GraduationCap,
      titleKey: "header.nav.universities",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: BookOpen,
      titleKey: "header.nav.courses",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Award,
      titleKey: "header.nav.scholarships",
      color: "text-orange",
      bgColor: "bg-orange/10",
    },
    {
      icon: FileText,
      titleKey: "resources.items.2.title",
      color: "text-teal",
      bgColor: "bg-teal/10",
    },
    {
      icon: Calendar,
      titleKey: "resources.items.0.title",
      color: "text-blue",
      bgColor: "bg-blue/10",
    },
    {
      icon: Users,
      titleKey: "resources.items.1.title",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t("resources.title")}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <a
              key={index}
              href="#"
              className="group p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
            >
              <div
                className={`w-14 h-14 ${resource.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
              >
                <resource.icon className={`h-7 w-7 ${resource.color}`} />
              </div>
              <h3 className="font-medium text-foreground text-sm">
                {t(resource.titleKey)}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

import { BookOpen } from "lucide-react";
