import { useTranslation } from 'react-i18next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  ShoppingBag,
  Briefcase,
  GraduationCap,
    Shield,
    FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface LifeCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link?: string;
}

const LifeCard = ({ imageUrl, title, description, link }: LifeCardProps) => {
  const CardWrapper = link ? 'a' : 'div';
  const cardProps = link ? { href: link } : {};

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
      <CardContent className="p-0">
        <CardWrapper {...cardProps} className="block">
          <div className="aspect-video relative overflow-hidden bg-gray-100">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5">
            <h3 className="font-bold text-base mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {description}
            </p>
            {link && (
              <div className="flex items-center text-primary mt-3 text-sm font-medium">
                <span>→</span>
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
      imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      titleKey: 'lifeInUSA.categories.immigration.title',
      descKey: 'lifeInUSA.categories.immigration.desc',
      link: '#immigration',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      titleKey: 'lifeInUSA.categories.housing.title',
      descKey: 'lifeInUSA.categories.housing.desc',
      link: '#housing',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&q=80',
      titleKey: 'lifeInUSA.categories.regions.title',
      descKey: 'lifeInUSA.categories.regions.desc',
      link: '#regions',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
      titleKey: 'lifeInUSA.categories.livingCosts.title',
      descKey: 'lifeInUSA.categories.livingCosts.desc',
      link: '#costs',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      titleKey: 'lifeInUSA.categories.stayDuration.title',
      descKey: 'lifeInUSA.categories.stayDuration.desc',
      link: '#duration',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      titleKey: 'lifeInUSA.categories.legalInfo.title',
      descKey: 'lifeInUSA.categories.legalInfo.desc',
      link: '#legal',
    },
  ];

  const additionalInfo = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
      titleKey: 'lifeInUSA.additional.scholarships.title',
      descKey: 'lifeInUSA.additional.scholarships.desc',
      link: '/plan-studies#scholarships',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      titleKey: 'lifeInUSA.additional.consultation.title',
      descKey: 'lifeInUSA.additional.consultation.desc',
      link: '/chat',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80',
      titleKey: 'lifeInUSA.additional.findSchool.title',
      descKey: 'lifeInUSA.additional.findSchool.desc',
      link: '#',
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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80" 
              alt="Life in USA"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 h-full relative z-10 flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('lifeInUSA.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                {t('lifeInUSA.hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Main Categories Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('lifeInUSA.sections.lifeInUSA')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {mainCategories.map((category, index) => (
                <LifeCard
                  key={index}
                  imageUrl={category.imageUrl}
                  title={t(category.titleKey)}
                  description={t(category.descKey)}
                  link={category.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('lifeInUSA.sections.additionalInfo')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {additionalInfo.map((info, index) => (
                <LifeCard
                  key={index}
                  imageUrl={info.imageUrl}
                  title={t(info.titleKey)}
                  description={t(info.descKey)}
                  link={info.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stories Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('lifeInUSA.sections.stories')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {stories.map((story, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-black relative overflow-hidden">
                      <img 
                        src={`https://img.youtube.com/vi/${story.videoId}/maxresdefault.jpg`}
                        alt={t(story.titleKey)}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://img.youtube.com/vi/${story.videoId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-white">
                      <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {t(story.titleKey)}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
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
        <section className="py-12 px-4 bg-white border-t border-gray-200">
          <div className="container mx-auto">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900">Tag</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 max-w-4xl">
              {tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-4 py-2 text-sm bg-white hover:bg-gray-50 border-gray-300 text-gray-700 cursor-pointer rounded-full"
                >
                  #{t(tag.label)}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-12 px-4 bg-gray-100">
          <div className="container mx-auto">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900">Quick more</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {quickLinks.map((link, index) => (
                <button 
                  key={index}
                  className="bg-white border border-gray-300 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all text-left group"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-1">
                      {link.icon}
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                      {t(link.label)}
                    </span>
                  </div>
                  <div className="text-primary text-sm mt-2">→</div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LifeInUSA;
