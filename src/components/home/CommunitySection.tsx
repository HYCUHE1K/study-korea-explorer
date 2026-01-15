import { Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const countryFlags: Record<string, string> = {
  "China": "🇨🇳",
  "中国": "🇨🇳",
  "Trung Quốc": "🇨🇳",
  "Хятад": "🇨🇳",
  "India": "🇮🇳",
  "印度": "🇮🇳",
  "Ấn Độ": "🇮🇳",
  "インド": "🇮🇳",
  "Энэтхэг": "🇮🇳",
  "South Korea": "🇰🇷",
  "韩国": "🇰🇷",
  "Hàn Quốc": "🇰🇷",
  "韓国": "🇰🇷",
  "Өмнөд Солонгос": "🇰🇷",
  "Vietnam": "🇻🇳",
  "越南": "🇻🇳",
  "Việt Nam": "🇻🇳",
  "ベトナム": "🇻🇳",
  "Вьетнам": "🇻🇳",
  "Taiwan": "🇹🇼",
  "台湾": "🇹🇼",
  "Đài Loan": "🇹🇼",
  "Тайвань": "🇹🇼",
  "Japan": "🇯🇵",
  "日本": "🇯🇵",
  "Nhật Bản": "🇯🇵",
  "Япон": "🇯🇵",
  "Saudi Arabia": "🇸🇦",
  "沙特阿拉伯": "🇸🇦",
  "Ả Rập Saudi": "🇸🇦",
  "サウジアラビア": "🇸🇦",
  "Саудын Араб": "🇸🇦",
  "Canada": "🇨🇦",
  "加拿大": "🇨🇦",
  "カナダ": "🇨🇦",
  "Канад": "🇨🇦",
  "Mexico": "🇲🇽",
  "墨西哥": "🇲🇽",
  "メキシコ": "🇲🇽",
  "Мексик": "🇲🇽",
  "Brazil": "🇧🇷",
  "巴西": "🇧🇷",
  "ブラジル": "🇧🇷",
  "Бразил": "🇧🇷",
};

export const CommunitySection = () => {
  const { t } = useTranslation();

  const countries = t("community.countries", { returnObjects: true }) as string[];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t("community.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("community.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  {t("community.subtitle")}
                </h3>
                <Button variant="ghost" size="sm" className="text-primary">
                  {t("notice.viewAll")} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {countries.map((country) => (
                  <a
                    key={country}
                    href="#"
                    className="p-3 bg-muted rounded-lg hover:bg-primary/10 transition-colors text-center group"
                  >
                    <span className="text-2xl mb-1 block">{countryFlags[country] || "🌍"}</span>
                    <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                      {country}
                    </p>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
