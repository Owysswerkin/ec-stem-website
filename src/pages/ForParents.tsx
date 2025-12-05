import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import parentsDuploImage from '@/assets/parents-child-duplo.jpg';
import {
  Clock, 
  Users, 
  Calendar, 
  Package,
  Brain,
  Globe,
  Bot,
  GraduationCap,
  Award,
  CheckCircle,
  Lightbulb,
  Blocks,
  Cog,
  Rocket
} from 'lucide-react';

const ForParents = () => {
  const { t } = useTranslation();

  const programLevels = [
    {
      icon: Blocks,
      title: t('forParentsPage.levels.n2.title'),
      level: t('forParentsPage.levels.n2.level'),
      description: t('forParentsPage.levels.n2.description'),
      color: 'bg-sunshine/20 text-sunshine-dark'
    },
    {
      icon: Lightbulb,
      title: t('forParentsPage.levels.k1.title'),
      level: t('forParentsPage.levels.k1.level'),
      description: t('forParentsPage.levels.k1.description'),
      color: 'bg-lavender/20 text-lavender-dark'
    },
    {
      icon: Cog,
      title: t('forParentsPage.levels.k2.title'),
      level: t('forParentsPage.levels.k2.level'),
      description: t('forParentsPage.levels.k2.description'),
      color: 'bg-primary/20 text-primary'
    }
  ];

  const highlights = [
    {
      icon: Clock,
      title: t('forParentsPage.highlights.duration.title'),
      description: t('forParentsPage.highlights.duration.description')
    },
    {
      icon: Users,
      title: t('forParentsPage.highlights.classSize.title'),
      description: t('forParentsPage.highlights.classSize.description')
    },
    {
      icon: Calendar,
      title: t('forParentsPage.highlights.flexible.title'),
      description: t('forParentsPage.highlights.flexible.description')
    },
    {
      icon: Package,
      title: t('forParentsPage.highlights.materials.title'),
      description: t('forParentsPage.highlights.materials.description')
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: t('forParentsPage.benefits.development.title'),
      description: t('forParentsPage.benefits.development.description')
    },
    {
      icon: Globe,
      title: t('forParentsPage.benefits.realWorld.title'),
      description: t('forParentsPage.benefits.realWorld.description')
    },
    {
      icon: Bot,
      title: t('forParentsPage.benefits.robot.title'),
      description: t('forParentsPage.benefits.robot.description')
    },
    {
      icon: GraduationCap,
      title: t('forParentsPage.benefits.facilitators.title'),
      description: t('forParentsPage.benefits.facilitators.description')
    },
    {
      icon: Award,
      title: t('forParentsPage.benefits.quality.title'),
      description: t('forParentsPage.benefits.quality.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${parentsDuploImage})` }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-background/85 to-sunshine/70" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 drop-shadow-sm">
              {t('forParentsPage.title')}
            </h1>
            <p className="text-lg text-foreground/90 mb-8 drop-shadow-sm">
              {t('forParentsPage.subtitle')}
            </p>
            <Button asChild size="lg">
              <a href="/EC_STEM_Booklet.pdf" target="_blank" rel="noopener noreferrer">
                {t('forParentsPage.downloadBrochure')}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('forParentsPage.learningOutcomes.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('forParentsPage.learningOutcomes.description')}
            </p>
          </div>

          {/* Program Levels */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programLevels.map((level, index) => (
              <Card key={index} className="shadow-warm hover:shadow-lg transition-shadow duration-300 border-0">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-2xl ${level.color} flex items-center justify-center mb-4`}>
                    <level.icon className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-medium text-primary mb-1 block">{level.level}</span>
                  <h3 className="text-xl font-bold text-foreground mb-3">{level.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{level.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t('forParentsPage.highlights.title')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center shadow-warm border-0">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Parents Love Us */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            {t('forParentsPage.whyParentsLove.title')}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t('forParentsPage.whyParentsLove.subtitle')}
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-warm hover:shadow-lg transition-shadow duration-300 border-0">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* NEL Framework Alignment */}
          <Card className="max-w-4xl mx-auto shadow-warm border-0 bg-gradient-to-br from-primary/5 to-lavender/10">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {t('forParentsPage.nel.title')}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t('forParentsPage.nel.intro')}
                  </p>
                </div>
              </div>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{t('forParentsPage.nel.items.discovery')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{t('forParentsPage.nel.items.numeracy')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{t('forParentsPage.nel.items.motor')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{t('forParentsPage.nel.items.creative')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{t('forParentsPage.nel.items.social')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Motto */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-12 w-12 text-primary-foreground mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-bold text-primary-foreground max-w-3xl mx-auto mb-8">
            "{t('forParentsPage.motto')}"
          </blockquote>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">{t('forParentsPage.cta')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ForParents;
