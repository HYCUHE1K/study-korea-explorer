import { ArrowRight, Search, ClipboardList, Send, Stamp, Plane } from "lucide-react";
import { useTranslation } from "react-i18next";

export const StudySteps = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: 1,
      icon: Search,
      title: t("studySteps.step1.title"),
      items: t("studySteps.step1.items", { returnObjects: true }) as string[],
      color: "bg-primary",
    },
    {
      number: 2,
      icon: ClipboardList,
      title: t("studySteps.step2.title"),
      items: t("studySteps.step2.items", { returnObjects: true }) as string[],
      color: "bg-almond",
    },
    {
      number: 3,
      icon: Send,
      title: t("studySteps.step3.title"),
      items: t("studySteps.step3.items", { returnObjects: true }) as string[],
      color: "bg-gold",
    },
    {
      number: 4,
      icon: Stamp,
      title: t("studySteps.step4.title"),
      items: t("studySteps.step4.items", { returnObjects: true }) as string[],
      color: "bg-sage",
    },
    {
      number: 5,
      icon: Plane,
      title: t("studySteps.step5.title"),
      items: t("studySteps.step5.items", { returnObjects: true }) as string[],
      color: "bg-green-dark",
    },
  ];

  return (
    <section className="py-16 bg-green-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t("studySteps.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("studySteps.subtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-background rounded-xl p-5 h-full shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md`}
                    >
                      {step.number}
                    </div>
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3 text-sm">
                    {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-0.5 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
