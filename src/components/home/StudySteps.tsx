import { ArrowRight, Info, School, FileText, Award, Plane } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Info,
    title: "유학정보 수집",
    titleEn: "Gathering Study Abroad Information",
    items: [
      "한국 유학 평균 비용 조사하기",
      "한국 교육 시스템 및 전반적인 유학 경험 탐색하기",
    ],
    color: "bg-primary",
  },
  {
    number: 2,
    icon: School,
    title: "학교 및 전공 선택",
    titleEn: "Choosing a School and Major",
    items: [
      "입학 요건, 커리큘럼, 장학금 프로그램 확인하기",
      "각 대학의 입학 가이드라인 및 일정 검토하기",
    ],
    color: "bg-secondary",
  },
  {
    number: 3,
    icon: FileText,
    title: "입학 지원",
    titleEn: "Applying for Admission",
    items: [
      "대학의 입학 절차에 따라 지원서류 제출하기 (온라인 또는 우편)",
    ],
    color: "bg-teal",
  },
  {
    number: 4,
    icon: Award,
    title: "표준입학허가서 획득",
    titleEn: "Obtaining a Standard Admission Letter",
    items: ["대학으로부터 표준입학허가서 수령하기"],
    color: "bg-orange",
  },
  {
    number: 5,
    icon: Plane,
    title: "비자 발급 및 출국 준비",
    titleEn: "Visa Issuance and Departure Preparation",
    items: [
      "체류 자격에 따라 비자 신청 및 발급받기",
      "출국 전 필수 준비사항 확인하기",
    ],
    color: "bg-blue",
  },
];

export const StudySteps = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            한국 유학 5단계
          </h2>
          <p className="text-muted-foreground">
            Plan your studies with Korea in 5 steps
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-background rounded-xl p-5 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg`}
                    >
                      {step.number}
                    </div>
                    <step.icon className={`h-5 w-5`} style={{ color: `hsl(var(--${step.color.replace('bg-', '')}))` }} />
                  </div>
                  <h3 className="font-bold text-foreground mb-1 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {step.titleEn}
                  </p>
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground flex items-start gap-1"
                      >
                        <span className="text-primary mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
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
