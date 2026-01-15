import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SearchCards } from "@/components/home/SearchCards";
import { StudySteps } from "@/components/home/StudySteps";
import { HelpfulResources } from "@/components/home/HelpfulResources";
import { VideoSection } from "@/components/home/VideoSection";
import { NoticeSection } from "@/components/home/NoticeSection";
import { CommunitySection } from "@/components/home/CommunitySection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SearchCards />
        <StudySteps />
        <HelpfulResources />
        <VideoSection />
        <NoticeSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
