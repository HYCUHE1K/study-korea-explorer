import { Bell, ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const NoticeSection = () => {
  const { t } = useTranslation();

  const notices = t("notice.notices", { returnObjects: true }) as Array<{ title: string; date: string }>;

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Notice Board */}
          <Card className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Bell className="h-5 w-5 text-primary" />
                {t("notice.title")}
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">
                {t("notice.viewAll")} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {notices.map((notice, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-start justify-between gap-4 py-2 group hover:bg-muted/50 rounded px-2 -mx-2 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                          {notice.title}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {notice.date}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Resources Card */}
          <Card className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Calendar className="h-5 w-5 text-secondary" />
                {t("resources.title")}
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-secondary">
                {t("notice.viewAll")} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {(t("resources.items", { returnObjects: true }) as Array<{ title: string; description: string }>).map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="block p-4 bg-muted rounded-lg hover:bg-secondary/10 transition-colors group"
                    >
                      <span className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                        {item.title}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
