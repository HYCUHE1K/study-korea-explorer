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

const resources = [
  {
    icon: GraduationCap,
    title: "대학 검색",
    titleEn: "University Search",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FileText,
    title: "온라인 원서접수",
    titleEn: "Online Application",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: MessageCircle,
    title: "온라인 문의",
    titleEn: "Online Inquiry",
    color: "text-teal",
    bgColor: "bg-teal/10",
  },
  {
    icon: Award,
    title: "GKS 장학금",
    titleEn: "GKS Scholarship",
    color: "text-orange",
    bgColor: "bg-orange/10",
  },
  {
    icon: Book,
    title: "가이드북",
    titleEn: "Guidebook",
    color: "text-blue",
    bgColor: "bg-blue/10",
  },
  {
    icon: Calendar,
    title: "유학박람회",
    titleEn: "Study in Korea Fair",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Briefcase,
    title: "취업정보",
    titleEn: "Job Information",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Users,
    title: "서포터즈",
    titleEn: "Supporters",
    color: "text-teal",
    bgColor: "bg-teal/10",
  },
  {
    icon: Globe,
    title: "재한유학생회",
    titleEn: "Student Association",
    color: "text-orange",
    bgColor: "bg-orange/10",
  },
  {
    icon: Heart,
    title: "유학스토리",
    titleEn: "Study Abroad Stories",
    color: "text-blue",
    bgColor: "bg-blue/10",
  },
];

export const HelpfulResources = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            유용한 자료
          </h2>
          <p className="text-muted-foreground">Helpful resources</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href="#"
              className="group p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
            >
              <div
                className={`w-14 h-14 ${resource.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
              >
                <resource.icon className={`h-7 w-7 ${resource.color}`} />
              </div>
              <h3 className="font-medium text-foreground text-sm mb-1">
                {resource.title}
              </h3>
              <p className="text-xs text-muted-foreground">{resource.titleEn}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
