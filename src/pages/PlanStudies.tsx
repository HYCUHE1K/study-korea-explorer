import { useTranslation } from 'react-i18next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  School, 
  Award, 
  BookOpen, 
  DollarSign, 
  CreditCard,
  FileText,
  MapPin,
  ClipboardList,
  FileCheck,
  Download,
  Users,
  ArrowRight,
  Youtube
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlanCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  external?: boolean;
}

const PlanCard = ({ icon, title, description, link, external }: PlanCardProps) => {
  const CardWrapper = link ? 'a' : 'div';
  const cardProps = link ? {
    href: link,
    ...(external && { target: '_blank', rel: 'noopener noreferrer' })
  } : {};

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
      <CardContent className="p-0">
        <CardWrapper {...cardProps} className="block">
          <div className="aspect-video bg-gradient-to-br from-primary/10 via-green-light/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="text-primary z-10 transform group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {description}
            </p>
            {link && (
              <div className="flex items-center text-primary mt-4 text-sm font-medium">
                <span>{external ? '자세히 보기' : '알아보기'}</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            )}
          </div>
        </CardWrapper>
      </CardContent>
    </Card>
  );
};

const PlanStudies = () => {
  const { t } = useTranslation();

  const mainCategories = [
    {
      icon: <GraduationCap className="w-16 h-16" />,
      titleKey: 'planStudies.categories.educationSystem.title',
      descKey: 'planStudies.categories.educationSystem.desc',
    },
    {
      icon: <School className="w-16 h-16" />,
      titleKey: 'planStudies.categories.schoolType.title',
      descKey: 'planStudies.categories.schoolType.desc',
    },
    {
      icon: <Award className="w-16 h-16" />,
      titleKey: 'planStudies.categories.certifiedUniversity.title',
      descKey: 'planStudies.categories.certifiedUniversity.desc',
    },
    {
      icon: <BookOpen className="w-16 h-16" />,
      titleKey: 'planStudies.categories.examAndKorean.title',
      descKey: 'planStudies.categories.examAndKorean.desc',
    },
    {
      icon: <DollarSign className="w-16 h-16" />,
      titleKey: 'planStudies.categories.expenses.title',
      descKey: 'planStudies.categories.expenses.desc',
    },
    {
      icon: <CreditCard className="w-16 h-16" />,
      titleKey: 'planStudies.categories.scholarship.title',
      descKey: 'planStudies.categories.scholarship.desc',
    },
    {
      icon: <FileText className="w-16 h-16" />,
      titleKey: 'planStudies.categories.visa.title',
      descKey: 'planStudies.categories.visa.desc',
    },
    {
      icon: <ClipboardList className="w-16 h-16" />,
      titleKey: 'planStudies.categories.flowChart.title',
      descKey: 'planStudies.categories.flowChart.desc',
    },
    {
      icon: <FileCheck className="w-16 h-16" />,
      titleKey: 'planStudies.categories.onlineApplication.title',
      descKey: 'planStudies.categories.onlineApplication.desc',
    },
    {
      icon: <Download className="w-16 h-16" />,
      titleKey: 'planStudies.categories.guidebook.title',
      descKey: 'planStudies.categories.guidebook.desc',
    },
  ];

  const additionalInfo = [
    {
      icon: <School className="w-12 h-12" />,
      titleKey: 'planStudies.additional.findSchool.title',
      descKey: 'planStudies.additional.findSchool.desc',
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      titleKey: 'planStudies.additional.onlineKorean.title',
      descKey: 'planStudies.additional.onlineKorean.desc',
      link: 'https://www.kosnet.go.kr/',
      external: true,
    },
    {
      icon: <Users className="w-12 h-12" />,
      titleKey: 'planStudies.additional.consultation.title',
      descKey: 'planStudies.additional.consultation.desc',
    },
  ];

  const stories = [
    {
      videoId: 'mzc6edXyzUg',
      titleKey: 'planStudies.stories.gks.title',
      descKey: 'planStudies.stories.gks.desc',
    },
    {
      videoId: 'gKUCf29MV88',
      titleKey: 'planStudies.stories.interview.title',
      descKey: 'planStudies.stories.interview.desc',
    },
    {
      videoId: 'eFapa9Ed2qk',
      titleKey: 'planStudies.stories.opportunity.title',
      descKey: 'planStudies.stories.opportunity.desc',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-primary/5 to-green-light/10">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-green-light/10"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t('planStudies.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                {t('planStudies.hero.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground">
                {t('planStudies.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Main Categories Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('planStudies.sections.planYourStudy')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {mainCategories.map((category, index) => (
                <PlanCard
                  key={index}
                  icon={category.icon}
                  title={t(category.titleKey)}
                  description={t(category.descKey)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('planStudies.sections.additionalInfo')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {additionalInfo.map((info, index) => (
                <PlanCard
                  key={index}
                  icon={info.icon}
                  title={t(info.titleKey)}
                  description={t(info.descKey)}
                  link={info.link}
                  external={info.external}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stories Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('planStudies.sections.stories')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {stories.map((story, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-black relative">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${story.videoId}`}
                        title={t(story.titleKey)}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{t(story.titleKey)}</h3>
                      <p className="text-sm text-muted-foreground">{t(story.descKey)}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('planStudies.sections.quickMore')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <Button variant="outline" className="h-auto py-4 justify-between" asChild>
                <a href="#" className="flex items-center">
                  <span>{t('planStudies.quickLinks.findUniversity')}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 justify-between" asChild>
                <a href="#" className="flex items-center">
                  <span>{t('planStudies.quickLinks.guidebook')}</span>
                  <Download className="w-4 h-4 ml-2" />
                </a>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 justify-between" asChild>
                <a href="#" className="flex items-center">
                  <span>{t('planStudies.quickLinks.certifiedUniversity')}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 justify-between" asChild>
                <a href="#" className="flex items-center">
                  <span>{t('planStudies.quickLinks.onlineApplication')}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 justify-between" asChild>
                <a href="https://www.topik.go.kr/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <span>{t('planStudies.quickLinks.topik')}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 justify-between" asChild>
                <a href="#" className="flex items-center">
                  <span>{t('planStudies.quickLinks.scholarship')}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('planStudies.cta.title')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('planStudies.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/signup">
                  {t('planStudies.cta.getStarted')}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <Link to="/chat">
                  {t('planStudies.cta.askQuestions')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlanStudies;
