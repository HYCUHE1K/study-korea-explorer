import { Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const videoCategories = [
  {
    id: "prospective",
    label: "유학준비생",
    videos: [
      {
        id: 1,
        title: "미국 유학을 결심한 이유",
        thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80",
        duration: "5:32",
      },
      {
        id: 2,
        title: "미국 대학 입학 준비 가이드",
        thumbnail: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&q=80",
        duration: "8:15",
      },
      {
        id: 3,
        title: "장학금 지원 팁",
        thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80",
        duration: "6:45",
      },
    ],
  },
  {
    id: "current",
    label: "재학생",
    videos: [
      {
        id: 1,
        title: "미국 대학 생활 브이로그",
        thumbnail: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=400&q=80",
        duration: "10:22",
      },
      {
        id: 2,
        title: "영어 빠르게 배우는 법",
        thumbnail: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=400&q=80",
        duration: "7:18",
      },
      {
        id: 3,
        title: "알바와 학업 병행하기",
        thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
        duration: "9:05",
      },
    ],
  },
  {
    id: "graduated",
    label: "졸업생",
    videos: [
      {
        id: 1,
        title: "미국에서 취업 성공기",
        thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=400&q=80",
        duration: "12:30",
      },
      {
        id: 2,
        title: "미국 유학이 내 커리어에 미친 영향",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        duration: "8:45",
      },
      {
        id: 3,
        title: "졸업 후 비자 전환 경험담",
        thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
        duration: "6:20",
      },
    ],
  },
];

export const VideoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            유학 영상
          </h2>
          <p className="text-muted-foreground">Study in USA Videos</p>
        </div>

        <Tabs defaultValue="prospective" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            {videoCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {videoCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.videos.map((video) => (
                  <a
                    key={video.id}
                    href="#"
                    className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="aspect-video relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="h-6 w-6 text-primary-foreground ml-1" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 px-2 py-1 bg-foreground/80 text-primary-foreground text-xs rounded">
                        {video.duration}
                      </span>
                    </div>
                    <div className="p-4 bg-card">
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
