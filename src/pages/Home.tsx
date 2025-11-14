
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Heart, Users, Trophy, BookOpen, Play, Sparkles, Zap, Cpu, Lightbulb, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import asianChildrenStem from '@/assets/asian-children-stem.jpg';
import asianKidsRobotics from '@/assets/asian-kids-robotics.jpg';
import asianKidsScience from '@/assets/asian-kids-science.jpg';
import learningBuddyHero from '@/assets/learning-buddy-hero.png';

const Home = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: BookOpen,
      title: t('services.curriculum.title'),
      description: t('services.curriculum.description'),
      points: t('services.curriculum.points', { returnObjects: true }) as string[],
      color: 'bg-primary'
    },
    {
      icon: Heart,
      title: t('services.satisfaction.title'),
      description: t('services.satisfaction.description'),
      points: t('services.satisfaction.points', { returnObjects: true }) as string[],
      color: 'bg-accent-vibrant'
    },
    {
      icon: Trophy,
      title: t('services.partnership.title'),
      description: t('services.partnership.description'),
      points: t('services.partnership.points', { returnObjects: true }) as string[],
      color: 'bg-secondary'
    }
  ];

  const programs = [
    {
      title: t('programs.toddler.title'),
      description: t('programs.toddler.description'),
      image: asianKidsScience,
      highlights: t('programs.toddler.highlights', { returnObjects: true }) as string[]
    },
    {
      title: t('programs.preK.title'),
      description: t('programs.preK.description'),
      image: asianKidsRobotics,
      highlights: t('programs.preK.highlights', { returnObjects: true }) as string[]
    },
    {
      title: t('programs.kindergarten.title'),
      description: t('programs.kindergarten.description'),
      image: asianChildrenStem,
      highlights: t('programs.kindergarten.highlights', { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="absolute inset-0">
          <img 
            src={learningBuddyHero}
            alt="Children engaged in STEM learning" 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        
        {/* Decorative clouds and elements */}
        <div className="absolute top-10 right-10 w-32 h-24 bg-white/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-16 w-24 h-18 bg-blue-200/40 rounded-full blur-lg"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-left">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full shadow-lg"
                    asChild
                  >
                    <Link to="/programmes">
                      {t('hero.cta')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    variant="blueAccent" 
                    size="lg"
                    className="px-8 py-6 text-lg rounded-full shadow-lg"
                    asChild
                  >
                    <a href="/EC_STEM_Booklet.pdf" target="_blank" rel="noopener noreferrer">
                      Download Brochure
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Right side - Hero image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={learningBuddyHero} 
                  alt="Children engaged in STEM learning with robotics" 
                  className="w-full h-96 lg:h-[500px] object-cover object-top"
                />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full animate-bounce-gentle"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400 rounded-full animate-float"></div>
              <div className="absolute top-1/3 -left-8 w-12 h-12 bg-orange-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group p-8 hover:shadow-xl transition-all duration-300 bg-white border-none">
                <div className={`w-20 h-20 mb-6 ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-3 text-left">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="bg-soft-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-secondary rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-1/2 right-8 w-6 h-6 bg-accent rounded-full animate-pulse delay-1000"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse delay-300"></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-500"></div>
                </div>
                <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    "{t('aboutPage.slogan')}"
                  </span>
                </blockquote>
                <div className="flex items-center justify-center mt-6">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse delay-200"></div>
                  <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse delay-600"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t('about.subtitle')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t('about.description')}
            </p>
            <Button 
              variant="default" 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full"
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {t('programs.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 border-none shadow-gentle">
                <CardContent className="p-8">
                  <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {index === 0 && <Users className="h-8 w-8 text-white" />}
                    {index === 1 && <Lightbulb className="h-8 w-8 text-white" />}
                    {index === 2 && <Cpu className="h-8 w-8 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                  <div className="text-sm font-semibold text-primary bg-primary-glow px-3 py-1 rounded-full inline-block mb-4">
                    {index === 0 && 'Nursery 2'}
                    {index === 1 && 'Kindergarten 1'}
                    {index === 2 && 'Kindergarten 2'}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/programmes">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
