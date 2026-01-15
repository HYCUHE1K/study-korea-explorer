import { Bell, ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const notices = [
  {
    id: 1,
    title: "2024년도 Fulbright 외국인 장학생 선발 공고",
    date: "2024.03.15",
    category: "장학금",
  },
  {
    id: 2,
    title: "2024 Study in USA Fair 개최 안내",
    date: "2024.03.12",
    category: "박람회",
  },
  {
    id: 3,
    title: "외국인 유학생 비자(F-1) 변경 안내",
    date: "2024.03.10",
    category: "비자",
  },
  {
    id: 4,
    title: "TOEFL/IELTS 시험일정 안내",
    date: "2024.03.08",
    category: "시험",
  },
  {
    id: 5,
    title: "유학생 건강보험 가입 안내",
    date: "2024.03.05",
    category: "생활",
  },
];

const jobs = [
  {
    id: 1,
    company: "삼성전자",
    title: "Global Talent Program 모집",
    deadline: "2024.04.30",
  },
  {
    id: 2,
    company: "현대자동차",
    title: "외국인 인턴십 프로그램",
    deadline: "2024.04.15",
  },
  {
    id: 3,
    company: "LG전자",
    title: "글로벌 인재 채용",
    deadline: "2024.04.20",
  },
];

export const NoticeSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Notice Board */}
          <Card className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Bell className="h-5 w-5 text-primary" />
                공지사항
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">
                더보기 <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {notices.map((notice) => (
                  <li key={notice.id}>
                    <a
                      href="#"
                      className="flex items-start justify-between gap-4 py-2 group hover:bg-muted/50 rounded px-2 -mx-2 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="inline-block px-2 py-0.5 text-xs bg-primary/10 text-primary rounded mb-1">
                          {notice.category}
                        </span>
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

          {/* Job Board */}
          <Card className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Calendar className="h-5 w-5 text-secondary" />
                채용정보
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-secondary">
                더보기 <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {jobs.map((job) => (
                  <li key={job.id}>
                    <a
                      href="#"
                      className="block p-4 bg-muted rounded-lg hover:bg-secondary/10 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                          {job.company}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          마감: {job.deadline}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {job.title}
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
