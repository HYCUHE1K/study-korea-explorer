import { GraduationCap, BookOpen, Award, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const searchOptions = [
  {
    icon: GraduationCap,
    title: "대학교",
    titleEn: "Universities",
    description: "학위 수준, 캠퍼스 위치, 기관 유형 등으로 대학을 검색하세요.",
    buttonText: "대학 검색",
    color: "bg-primary",
    hoverColor: "hover:bg-primary/90",
  },
  {
    icon: BookOpen,
    title: "학과",
    titleEn: "Courses",
    description: "전공, 학문 분야, 수업 언어 등으로 학과를 검색하세요.",
    buttonText: "학과 검색",
    color: "bg-secondary",
    hoverColor: "hover:bg-secondary/90",
  },
  {
    icon: Award,
    title: "장학금",
    titleEn: "Scholarships",
    description: "정부(GKS), 대학, 기업, 재단에서 제공하는 장학금을 찾아보세요.",
    buttonText: "장학금 검색",
    color: "bg-orange",
    hoverColor: "hover:bg-orange/90",
  },
];

export const SearchCards = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            한국 유학에 관심이 있으신가요?
          </h2>
          <p className="text-muted-foreground">
            Explore the best study options for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {searchOptions.map((option) => (
            <Card
              key={option.title}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}
                >
                  <option.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {option.titleEn}
                </p>
                <p className="text-sm text-muted-foreground mb-6 min-h-[60px]">
                  {option.description}
                </p>
                <button
                  className={`inline-flex items-center justify-center px-6 py-2 ${option.color} ${option.hoverColor} text-primary-foreground rounded-full text-sm font-medium transition-colors`}
                >
                  {option.buttonText}
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
