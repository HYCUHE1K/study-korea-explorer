import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-primary">Study in Korea</span>
            <br />
            <span className="text-foreground">Discover your full potential</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            한국에서 여러분의 잠재력을 발견하세요. 세계적 수준의 교육과 풍부한 문화 경험이 기다리고 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              대학 검색하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              장학금 알아보기
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent/30 rounded-full blur-xl" />
    </section>
  );
};
