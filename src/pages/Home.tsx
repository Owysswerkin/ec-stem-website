
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Heart, Users, Trophy, BookOpen, Play, Sparkles, Zap, Cpu, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import asianChildrenStem from '@/assets/asian-children-stem.jpg';
import asianKidsRobotics from '@/assets/asian-kids-robotics.jpg';
import asianKidsScience from '@/assets/asian-kids-science.jpg';

const Home = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: Heart,
      title: t('services.experienced.title'),
      description: t('services.experienced.description'),
      color: 'bg-primary'
    },
    {
      icon: BookOpen,
      title: t('services.curriculum.title'),
      description: t('services.curriculum.description'),
      color: 'bg-accent-vibrant'
    },
    {
      icon: Users,
      title: t('services.development.title'),
      description: t('services.development.description'),
      color: 'bg-secondary'
    },
    {
      icon: Trophy,
      title: t('services.partnership.title'),
      description: t('services.partnership.description'),
      color: 'bg-sunshine'
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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-champagne via-white to-gold-muted/30">
        <div className="absolute inset-0">
          <img 
            src={asianChildrenStem}
            alt="Children engaged in STEM learning" 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        
        {/* Decorative clouds and elements */}
        <div className="absolute top-10 right-10 w-32 h-24 bg-gold-light/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-16 w-24 h-18 bg-gold-accent/30 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gold-gradient rounded-full opacity-60 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-left">
              <div className="animate-fade-in">
                <div className="inline-flex items-center px-4 py-2 bg-gold-gradient rounded-full text-white text-sm font-semibold mb-6 shadow-gold-glow">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Excellence in STEM Education
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-gold-dark via-gold-accent to-bronze bg-clip-text text-transparent">
                    {t('hero.title')}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="bg-gold-gradient hover:bg-premium-gradient text-white px-8 py-6 text-lg rounded-full shadow-gold-glow hover:shadow-premium transition-all duration-300"
                    asChild
                  >
                    <Link to="/programmes">
                      {t('hero.cta')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Right side - Hero image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-premium">
                <img 
                  src={asianChildrenStem} 
                  alt="Children engaged in STEM learning with robotics" 
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gold-dark/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold-gradient rounded-full animate-bounce-gentle shadow-gold-glow"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gold-accent rounded-full animate-float shadow-gold"></div>
              <div className="absolute top-1/3 -left-8 w-12 h-12 bg-gold-light rounded-full animate-float shadow-gold-glow" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-champagne/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gold-muted/40 rounded-full text-gold-dark text-sm font-semibold mb-4">
              <Trophy className="w-4 h-4 mr-2" />
              Premium Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-gold-dark to-bronze bg-clip-text text-transparent">
                {t('services.title')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group text-center p-8 hover:shadow-gold transition-all duration-300 bg-white border border-gold-muted/20 hover:border-gold-light/40">
                <div className={`w-20 h-20 mx-auto mb-6 ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-gold-glow`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="w-full h-0.5 bg-gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gold-gradient rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-bronze/20 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gold-subtle rounded-full text-gold-dark text-sm font-semibold mb-4">
              <Heart className="w-4 h-4 mr-2" />
              About Excellence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-gold-dark to-bronze bg-clip-text text-transparent">
                {t('about.title')}
              </span>
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
              className="bg-gold-gradient hover:bg-premium-gradient text-white px-8 py-4 rounded-full shadow-gold-glow hover:shadow-premium transition-all duration-300"
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-gradient-to-b from-white to-champagne/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gold-muted/40 rounded-full text-gold-dark text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Featured Programs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-gold-dark to-bronze bg-clip-text text-transparent">
                {t('programs.title')}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('programs.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-gold transition-all duration-300 transform hover:scale-105 border border-gold-muted/20 hover:border-gold-light/40 shadow-gentle">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gold-gradient/20 group-hover:bg-gold-gradient/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-gold-gradient rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="w-full h-0.5 bg-gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-4"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" className="bg-gold-gradient hover:bg-premium-gradient text-white shadow-gold-glow hover:shadow-premium transition-all duration-300" asChild>
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
