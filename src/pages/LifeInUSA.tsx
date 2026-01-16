import { useTranslation } from 'react-i18next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Plane, 
  Home, 
  MapPin, 
  Wallet, 
  FileText, 
  Scale,
  Heart,
  Users,
  Camera,
  Tag,
  ArrowRight,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface LifeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  gradient?: string;
}

const LifeCard = ({ icon, title, description, link, gradient = 'from-primary/10 via-green-light/20 to-primary/5' }: LifeCardProps) => {
  const CardWrapper = link ? 'a' : 'div';
  const cardProps = link ? { href: link } : {};

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden border-2 hover:border-primary/50">
      <CardContent className="p-0">
        <CardWrapper {...cardProps} className="block">
          <div className={`aspect-video bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="text-primary z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              {icon}
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
            {link && (
              <div className="flex items-center text-primary mt-4 text-sm font-medium">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
              </div>
            )}
          </div>
        </CardWrapper>
      </CardContent>
    </Card>
  );
};

const LifeInUSA = () => {
  const { t } = useTranslation();

  const mainCategories = [
    {
      icon: <Plane className="w-16 h-16" />,
      titleKey: 'lifeInUSA.categories.immigration.title',
      descKey: 'lifeInUSA.categories.immigration.desc',
      gradient: 'from-blue-50 via-blue-100/50 to-blue-50',
    },
    {
      icon: <Home className="w-16 h-16" />,
      titleKey: 'lifeInUSA.categories.housing.title',
      descKey: 'lifeInUSA.categories.housing.desc',
      gradient: 'from-green-50 via-green-100/50 to-green-50',
    },
    {
      icon: <MapPin className="w-16 h-16" />,
      titleKey: 'lifeInUSA.categories.regions.title',
      descKey: 'lifeInUSA.categories.regions.desc',
      gradient: 'from-purple-50 via-purple-100/50 to-purple-50',
    },
    {
      icon: <Wallet className="w-16 h-16" />,
      titleKey: 'lifeInUSA.categories.livingCosts.title',
      descKey: 'lifeInUSA.categories.livingCosts.desc',
      gradient: 'from-amber-50 via-amber-100/50 to-amber-50',
    },
    {
      icon: <FileText className="w-16 h-16" />,
      titleKey: 'lifeInUSA.categories.stayDuration.title',
      descKey: 'lifeInUSA.categories.stayDuration.desc',
      gradient: 'from-teal-50 via-teal-100/50 to-teal-50',
    },
    {
      icon: <Scale className="w-16 h-16" />,
      titleKey: 'lifeInUSA.categories.legalInfo.title',
      descKey: 'lifeInUSA.categories.legalInfo.desc',
      gradient: 'from-indigo-50 via-indigo-100/50 to-indigo-50',
    },
  ];

  const additionalInfo = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      titleKey: 'lifeInUSA.additional.scholarships.title',
      descKey: 'lifeInUSA.additional.scholarships.desc',
      link: '/plan-studies#scholarships',
    },
    {
      icon: <Users className="w-12 h-12" />,
      titleKey: 'lifeInUSA.additional.consultation.title',
      descKey: 'lifeInUSA.additional.consultation.desc',
      link: '/chat',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      titleKey: 'lifeInUSA.additional.findSchool.title',
      descKey: 'lifeInUSA.additional.findSchool.desc',
    },
  ];

  const stories = [
    {
      titleKey: 'lifeInUSA.stories.dailyLife.title',
      descKey: 'lifeInUSA.stories.dailyLife.desc',
      videoId: 'wKoIBPsumWY',
    },
    {
      titleKey: 'lifeInUSA.stories.budgetTips.title',
      descKey: 'lifeInUSA.stories.budgetTips.desc',
      videoId: 'B066M4NHbJ0',
    },
    {
      titleKey: 'lifeInUSA.stories.travelExperience.title',
      descKey: 'lifeInUSA.stories.travelExperience.desc',
      videoId: 'DcGM4Gz1lmI',
    },
  ];

  const tags = [
    { label: 'lifeInUSA.tags.studentVlog', link: '#vlog' },
    { label: 'lifeInUSA.tags.budgetTips', link: '#budget' },
    { label: 'lifeInUSA.tags.campusLife', link: '#campus' },
    { label: 'lifeInUSA.tags.cityGuide', link: '#cities' },
  ];

  const quickLinks = [
    { icon: <ShoppingBag className="w-5 h-5" />, label: 'lifeInUSA.quickLinks.findSchool' },
    { icon: <GraduationCap className="w-5 h-5" />, label: 'lifeInUSA.quickLinks.scholarships' },
    { icon: <FileText className="w-5 h-5" />, label: 'lifeInUSA.quickLinks.onlineApplication' },
    { icon: <Briefcase className="w-5 h-5" />, label: 'lifeInUSA.quickLinks.guidebook' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-primary/5 to-green-light/10">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">{t('lifeInUSA.hero.badge')}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t('lifeInUSA.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {t('lifeInUSA.hero.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground">
                {t('lifeInUSA.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Main Categories Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('lifeInUSA.sections.lifeInUSA')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('lifeInUSA.sections.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {mainCategories.map((category, index) => (
                <LifeCard
                  key={index}
                  icon={category.icon}
                  title={t(category.titleKey)}
                  description={t(category.descKey)}
                  gradient={category.gradient}
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
                {t('lifeInUSA.sections.additionalInfo')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {additionalInfo.map((info, index) => (
                <LifeCard
                  key={index}
                  icon={info.icon}
                  title={t(info.titleKey)}
                  description={t(info.descKey)}
                  link={info.link}
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
                {t('lifeInUSA.sections.stories')}
              </h2>
              <p className="text-muted-foreground">
                {t('lifeInUSA.sections.storiesSubtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {stories.map((story, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-black relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Camera className="w-16 h-16 text-white opacity-50" />
                      </div>
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${story.videoId}`}
                        title={t(story.titleKey)}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 z-10"
                      ></iframe>
                    </div>
                    <div className="p-4 bg-card">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {t(story.titleKey)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t(story.descKey)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tags Section */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Tag className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">
                  {t('lifeInUSA.sections.tags')}
                </h2>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  #{t(tag.label)}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('lifeInUSA.sections.quickMore')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {quickLinks.map((link, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  className="h-auto py-6 flex flex-col items-center gap-3 hover:bg-primary hover:text-primary-foreground transition-all group"
                  asChild
                >
                  <a href="#">
                    <div className="text-primary group-hover:text-primary-foreground">
                      {link.icon}
                    </div>
                    <span className="text-center text-sm">{t(link.label)}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-blue-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('lifeInUSA.cta.title')}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('lifeInUSA.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/plan-studies">
                  {t('lifeInUSA.cta.planStudies')}
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white border-white hover:bg-white/10" 
                asChild
              >
                <Link to="/chat">
                  {t('lifeInUSA.cta.askQuestions')}
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

export default LifeInUSA;
