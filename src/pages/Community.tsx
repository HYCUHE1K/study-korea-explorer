import { useTranslation } from "react-i18next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Newspaper,
  Users,
  GraduationCap,
  Sparkles,
  MessageSquare,
  Globe,
  PlayCircle,
  BookOpen,
  Link2,
  ArrowRight,
} from "lucide-react";

interface SimpleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

interface MediaCardProps {
  title: string;
  author?: string;
  date?: string;
  imageUrl: string;
  link?: string;
  meta?: string;
}

const SimpleCard = ({ title, description, icon, link }: SimpleCardProps) => {
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link ? { href: link } : {};
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-200">
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            {link && (
              <div className="flex items-center gap-2 text-primary text-sm font-medium mt-3">
                <span>{"→"}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const MediaCard = ({ title, author, date, imageUrl, link, meta }: MediaCardProps) => {
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link ? { href: link, target: "_blank", rel: "noreferrer" } : {};
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-200">
      <Wrapper {...wrapperProps} className="block">
        <div className="aspect-video bg-gray-100">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-200"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-base text-foreground line-clamp-2 mb-2">{title}</h3>
          {author && <p className="text-sm text-muted-foreground">{author}</p>}
          {date && <p className="text-xs text-muted-foreground mt-1">{date}</p>}
          {meta && <p className="text-xs text-muted-foreground mt-2">{meta}</p>}
        </CardContent>
      </Wrapper>
    </Card>
  );
};

const Community = () => {
  const { t } = useTranslation();

  const updates = [
    {
      icon: <Newspaper className="w-6 h-6" />,
      title: t("community.updates.notice.title"),
      description: t("community.updates.notice.desc"),
      link: "/community/notice",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t("community.updates.stories.title"),
      description: t("community.updates.stories.desc"),
      link: "/community/stories",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("community.updates.supporters.title"),
      description: t("community.updates.supporters.desc"),
      link: "/community/supporters",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: t("community.updates.gks.title"),
      description: t("community.updates.gks.desc"),
      link: "/plan-studies#scholarships",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("community.updates.associations.title"),
      description: t("community.updates.associations.desc"),
      link: "/community/associations",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: t("community.updates.faq.title"),
      description: t("community.updates.faq.desc"),
      link: "/community/faq",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: t("community.updates.resources.title"),
      description: t("community.updates.resources.desc"),
      link: "/community/resources",
    },
  ];

  const supporterPosts: MediaCardProps[] = [
    {
      title: t("community.supporters.items.1.title"),
      author: t("community.supporters.items.1.author"),
      date: "2025-12-11",
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      link: "https://youtu.be/i1KtEdD6m6U",
      meta: t("community.supporters.items.1.meta"),
    },
    {
      title: t("community.supporters.items.2.title"),
      author: t("community.supporters.items.2.author"),
      date: "2025-12-11",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
      link: "https://youtu.be/zZd2yCsxtMQ",
      meta: t("community.supporters.items.2.meta"),
    },
    {
      title: t("community.supporters.items.3.title"),
      author: t("community.supporters.items.3.author"),
      date: "2025-12-10",
      imageUrl: "https://images.unsplash.com/photo-1529333166433-138c6d62b79a?w=800&q=80",
      link: "https://www.tiktok.com/@minhinkorea/video/7582076704730942721",
      meta: t("community.supporters.items.3.meta"),
    },
  ];

  const associations: MediaCardProps[] = [
    {
      title: t("community.associations.items.1.title"),
      author: t("community.associations.items.1.country"),
      imageUrl: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800&q=80",
      link: "https://decoc-elites.org/",
      meta: t("community.associations.items.1.meta"),
    },
    {
      title: t("community.associations.items.2.title"),
      author: t("community.associations.items.2.country"),
      imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      link: "https://www.facebook.com/FPVSAK",
      meta: t("community.associations.items.2.meta"),
    },
    {
      title: t("community.associations.items.3.title"),
      author: t("community.associations.items.3.country"),
      imageUrl: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?w=800&q=80",
      link: "https://www.instagram.com/ksak_kazkor",
      meta: t("community.associations.items.3.meta"),
    },
  ];

  const shorts = [
    {
      title: t("community.shorts.items.1.title"),
      imageUrl: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&q=80",
      link: "https://youtu.be/yw4zCtBrQp4",
    },
    {
      title: t("community.shorts.items.2.title"),
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      link: "https://youtu.be/eJASTm-WcUM",
    },
    {
      title: t("community.shorts.items.3.title"),
      imageUrl: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&q=80",
      link: "https://youtu.be/P8c-j3Ox2tE",
    },
  ];

  const quickLinks = [
    { icon: <Users className="w-5 h-5" />, label: t("community.quick.findSupporters"), link: "/community/supporters" },
    { icon: <GraduationCap className="w-5 h-5" />, label: t("community.quick.findSchool"), link: "/plan-studies" },
    { icon: <BookOpen className="w-5 h-5" />, label: t("community.quick.scholarships"), link: "/plan-studies#scholarships" },
    { icon: <Link2 className="w-5 h-5" />, label: t("community.quick.onlineApplication"), link: "https://www.studyinkorea.go.kr/ko/receipt/OnlineReceipt11.do" },
    { icon: <Newspaper className="w-5 h-5" />, label: t("community.quick.guidebook"), link: "/notice" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[380px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1600&q=80"
            alt="Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 h-full relative z-10 flex items-center">
          <div className="max-w-3xl text-white space-y-4">
            <Badge className="bg-white/20 text-white border-white/40" variant="secondary">
              {t("community.hero.badge")}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">{t("community.hero.title")}</h1>
            <p className="text-lg md:text-xl text-white/85">{t("community.hero.subtitle")}</p>
            <p className="text-base md:text-lg text-white/75">{t("community.hero.description")}</p>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Latest Updates */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("community.sections.updates")}</h2>
              <p className="text-muted-foreground max-w-3xl">{t("community.sections.updatesDesc")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {updates.map((item, idx) => (
                <SimpleCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Supporters */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("community.sections.supporters")}</h2>
                <p className="text-muted-foreground">{t("community.sections.supportersDesc")}</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href="/community/supporters">
                  {t("community.cta.viewAll")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supporterPosts.map((post, idx) => (
                <MediaCard key={idx} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* Student Associations */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("community.sections.associations")}</h2>
                <p className="text-muted-foreground">{t("community.sections.associationsDesc")}</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href="/community/associations">
                  {t("community.cta.viewAll")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {associations.map((assoc, idx) => (
                <MediaCard key={idx} {...assoc} />
              ))}
            </div>
          </div>
        </section>

        {/* Short form */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("community.sections.shorts")}</h2>
                <p className="text-muted-foreground">{t("community.sections.shortsDesc")}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shorts.map((item, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all duration-200">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-200"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow">
                          <PlayCircle className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-base text-foreground line-clamp-2 mb-1">{item.title}</h3>
                    </CardContent>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 px-4 bg-gray-100">
          <div className="container mx-auto">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900">{t("community.sections.quick")}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {quickLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all flex items-start gap-3"
                >
                  <div className="text-primary mt-1">{item.icon}</div>
                  <span className="text-sm text-gray-800 leading-snug">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
