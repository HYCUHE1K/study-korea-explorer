import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Briefcase,
  FileText,
  GraduationCap,
  Users,
  Building2,
  MessageSquare,
  BookOpen,
  Globe,
  ArrowRight,
  CheckCircle,
  Award,
  Lightbulb,
  Target,
  TrendingUp,
  Calendar,
} from "lucide-react";

const WorkCard = ({
  icon,
  title,
  description,
  link,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  gradient: string;
}) => (
  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
    <CardHeader>
      <div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-lg`}
      >
        <div className="text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
        {title}
      </h3>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      {link && (
        <Button
          variant="ghost"
          className="group/btn hover:bg-primary/5 p-0 h-auto font-semibold text-primary"
          asChild
        >
          <Link to={link}>
            <span className="flex items-center gap-2">
              더 알아보기
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </span>
          </Link>
        </Button>
      )}
    </CardContent>
  </Card>
);

const WorkInUSA = () => {
  const { t } = useTranslation();

  const mainCategories = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      title: t("workInUSA.categories.employment.title"),
      description: t("workInUSA.categories.employment.desc"),
      link: "#employment",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-emerald-500 via-emerald-600 to-emerald-700",
      title: t("workInUSA.categories.foreignerSystem.title"),
      description: t("workInUSA.categories.foreignerSystem.desc"),
      link: "#system",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: "from-purple-500 via-purple-600 to-purple-700",
      title: t("workInUSA.categories.internship.title"),
      description: t("workInUSA.categories.internship.desc"),
      link: "#internship",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      gradient: "from-amber-500 via-amber-600 to-amber-700",
      title: t("workInUSA.categories.recruitment.title"),
      description: t("workInUSA.categories.recruitment.desc"),
      link: "#recruitment",
    },
  ];

  const additionalInfo = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: t("workInUSA.additional.scholarships.title"),
      description: t("workInUSA.additional.scholarships.desc"),
      link: "/plan-studies",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: t("workInUSA.additional.consultation.title"),
      description: t("workInUSA.additional.consultation.desc"),
      link: "/chat",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("workInUSA.additional.schoolSearch.title"),
      description: t("workInUSA.additional.schoolSearch.desc"),
      link: "#",
    },
  ];

  const jobPlatforms = [
    {
      name: "LinkedIn",
      description: t("workInUSA.platforms.linkedin"),
      url: "https://www.linkedin.com/jobs",
      logo: "🔗",
    },
    {
      name: "Indeed",
      description: t("workInUSA.platforms.indeed"),
      url: "https://www.indeed.com",
      logo: "💼",
    },
    {
      name: "Glassdoor",
      description: t("workInUSA.platforms.glassdoor"),
      url: "https://www.glassdoor.com",
      logo: "🏢",
    },
    {
      name: "Handshake",
      description: t("workInUSA.platforms.handshake"),
      url: "https://www.joinhandshake.com",
      logo: "🤝",
    },
    {
      name: "USA Jobs",
      description: t("workInUSA.platforms.usajobs"),
      url: "https://www.usajobs.gov",
      logo: "🇺🇸",
    },
    {
      name: "AngelList",
      description: t("workInUSA.platforms.angellist"),
      url: "https://angel.co",
      logo: "🚀",
    },
    {
      name: "ZipRecruiter",
      description: t("workInUSA.platforms.ziprecruiter"),
      url: "https://www.ziprecruiter.com",
      logo: "📋",
    },
    {
      name: "Monster",
      description: t("workInUSA.platforms.monster"),
      url: "https://www.monster.com",
      logo: "👹",
    },
  ];

  const careerTips = [
    { icon: <Target className="w-5 h-5" />, key: "networking" },
    { icon: <CheckCircle className="w-5 h-5" />, key: "resume" },
    { icon: <Lightbulb className="w-5 h-5" />, key: "skills" },
    { icon: <Award className="w-5 h-5" />, key: "interview" },
    { icon: <TrendingUp className="w-5 h-5" />, key: "linkedin" },
    { icon: <Calendar className="w-5 h-5" />, key: "timing" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-green-600 to-emerald-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge
              variant="secondary"
              className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30 px-6 py-2 text-sm font-semibold"
            >
              <Briefcase className="w-4 h-4 mr-2 inline" />
              {t("workInUSA.hero.badge")}
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {t("workInUSA.hero.title")}
            </h1>

            <p className="text-xl md:text-2xl text-green-50 leading-relaxed max-w-3xl mx-auto">
              {t("workInUSA.hero.subtitle")}
            </p>

            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              {t("workInUSA.hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-green-50 font-semibold px-8 py-6 text-lg shadow-xl"
                asChild
              >
                <Link to="/signup">
                  {t("workInUSA.hero.cta")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
                asChild
              >
                <Link to="#recruitment">{t("workInUSA.hero.viewJobs")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
            {[
              "employment",
              "system",
              "internship",
              "recruitment",
              "platforms",
              "tips",
            ].map((section) => (
              <Button
                key={section}
                variant="ghost"
                size="sm"
                className="whitespace-nowrap font-medium hover:text-primary hover:bg-primary/5"
                asChild
              >
                <a href={`#${section}`}>{t(`workInUSA.sections.${section}`)}</a>
              </Button>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("workInUSA.mainTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("workInUSA.mainSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mainCategories.map((category, index) => (
              <WorkCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50/50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("workInUSA.additionalTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {additionalInfo.map((info, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 text-primary">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-lg">{info.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">{info.description}</p>
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <Link to={info.link}>
                      <span className="flex items-center gap-1">
                        바로가기
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stories/Videos Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("workInUSA.stories.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("workInUSA.stories.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((num) => (
              <Card key={num} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${t(`workInUSA.stories.video${num}.url`)}`}
                    title={t(`workInUSA.stories.video${num}.title`)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {t(`workInUSA.stories.video${num}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(`workInUSA.stories.video${num}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Platforms Section */}
      <section id="platforms" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("workInUSA.platformsTitle")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("workInUSA.platformsSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {jobPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{platform.logo}</div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-gray-600">{platform.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Career Tips Section */}
      <section id="tips" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("workInUSA.tipsTitle")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("workInUSA.tipsSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {careerTips.map((tip, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      {tip.icon}
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">
                        {t(`workInUSA.tips.${tip.key}.title`)}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {t(`workInUSA.tips.${tip.key}.desc`)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Banner */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t("workInUSA.notice.title")}
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                {t("workInUSA.notice.description")}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-green-600 hover:from-green-600 hover:to-primary"
                  asChild
                >
                  <Link to="#recruitment">
                    {t("workInUSA.notice.cta")}
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              {t("workInUSA.cta.title")}
            </h2>
            <p className="text-xl text-gray-600">{t("workInUSA.cta.description")}</p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-green-600 text-lg px-8 py-6"
                asChild
              >
                <Link to="/signup">
                  {t("workInUSA.cta.signup")}
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2"
                asChild
              >
                <Link to="/chat">{t("workInUSA.cta.chat")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkInUSA;
