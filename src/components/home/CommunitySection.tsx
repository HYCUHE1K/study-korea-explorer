import { Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const countries = [
  { name: "베트남", flag: "🇻🇳", members: 1250 },
  { name: "중국", flag: "🇨🇳", members: 2340 },
  { name: "몽골", flag: "🇲🇳", members: 890 },
  { name: "인도네시아", flag: "🇮🇩", members: 1120 },
  { name: "우즈베키스탄", flag: "🇺🇿", members: 760 },
  { name: "일본", flag: "🇯🇵", members: 680 },
  { name: "미국", flag: "🇺🇸", members: 450 },
  { name: "프랑스", flag: "🇫🇷", members: 320 },
];

const recentPosts = [
  {
    id: 1,
    author: "Nguyen Van A",
    country: "베트남",
    content: "서울대학교 기숙사 신청 팁 공유합니다! 신청 시즌에 미리 준비하세요.",
    time: "2시간 전",
  },
  {
    id: 2,
    author: "Wang Li",
    country: "중국",
    content: "외국인등록증 발급 완료! 생각보다 빨리 나왔어요.",
    time: "4시간 전",
  },
  {
    id: 3,
    author: "Batbayar",
    country: "몽골",
    content: "이번 주말 유학생 모임 있어요. 관심 있으신 분 연락주세요!",
    time: "6시간 전",
  },
];

export const CommunitySection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            재미유학생 커뮤니티
          </h2>
          <p className="text-muted-foreground">
            International Student Association Community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Country Associations */}
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  국가별 재미유학생회
                </h3>
                <Button variant="ghost" size="sm" className="text-primary">
                  전체보기 <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {countries.map((country) => (
                  <a
                    key={country.name}
                    href="#"
                    className="p-3 bg-muted rounded-lg hover:bg-primary/10 transition-colors text-center group"
                  >
                    <span className="text-2xl mb-1 block">{country.flag}</span>
                    <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                      {country.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {country.members.toLocaleString()}명
                    </p>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Posts */}
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">최근 게시글</h3>
                <Button variant="ghost" size="sm" className="text-primary">
                  더보기 <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <ul className="space-y-4">
                {recentPosts.map((post) => (
                  <li key={post.id}>
                    <a
                      href="#"
                      className="block p-4 bg-muted rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {post.author}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.time}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {post.content}
                      </p>
                      <span className="inline-block mt-2 text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded">
                        {post.country}
                      </span>
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
