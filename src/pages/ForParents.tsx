import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Clock, 
  Users, 
  Calendar, 
  Package,
  Bot,
  GraduationCap,
  Award,
  Rocket
} from 'lucide-react';
import enrichmentHero from '@/assets/enrichment-centre-hero.jpg';
import earlyExplorers from '@/assets/early-explorers.png';
import k1Robots from '@/assets/k1-robots-playing.png';
import stemBuilding from '@/assets/stem-child-building.jpg';

const ForParents = () => {
  const { t } = useTranslation();

  const programs = [
    {
      title: t('forParentsPage.levels.n2.title'),
      level: t('forParentsPage.levels.n2.level'),
      description: t('forParentsPage.levels.n2.description'),
      image: earlyExplorers,
      bg: 'bg-sky-50',
    },
    {
      title: t('forParentsPage.levels.k1.title'),
      level: t('forParentsPage.levels.k1.level'),
      description: t('forParentsPage.levels.k1.description'),
      image: k1Robots,
      bg: 'bg-amber-50',
    },
    {
      title: t('forParentsPage.levels.k2.title'),
      level: t('forParentsPage.levels.k2.level'),
      description: t('forParentsPage.levels.k2.description'),
      image: stemBuilding,
      bg: 'bg-rose-50',
    },
  ];

  const highlights = [
    { icon: Clock, title: t('forParentsPage.highlights.duration.title'), desc: t('forParentsPage.highlights.duration.description') },
    { icon: Users, title: t('forParentsPage.highlights.classSize.title'), desc: t('forParentsPage.highlights.classSize.description') },
    { icon: Calendar, title: t('forParentsPage.highlights.flexible.title'), desc: t('forParentsPage.highlights.flexible.description') },
    { icon: Package, title: t('forParentsPage.highlights.materials.title'), desc: t('forParentsPage.highlights.materials.description') },
  ];

  const benefits = [
    {
      icon: Bot,
      title: t('forParentsPage.benefits.robot.title'),
      description: t('forParentsPage.benefits.robot.description'),
    },
    {
      icon: GraduationCap,
      title: t('forParentsPage.benefits.facilitators.title'),
      description: t('forParentsPage.benefits.facilitators.description'),
    },
    {
      icon: Award,
      title: t('forParentsPage.benefits.quality.title'),
      description: t('forParentsPage.benefits.quality.description'),
    },
  ];

  const nelItems = [
    { key: 'discovery', color: 'bg-sky-100 text-sky-800 hover:bg-sky-200' },
    { key: 'numeracy', color: 'bg-amber-100 text-amber-800 hover:bg-amber-200' },
    { key: 'motor', color: 'bg-rose-100 text-rose-800 hover:bg-rose-200' },
    { key: 'creative', color: 'bg-violet-100 text-violet-800 hover:bg-violet-200' },
    { key: 'social', color: 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={enrichmentHero} alt="EC STEM classroom" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/50 via-foreground/30 to-foreground/40" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4 drop-shadow-lg">
            {t('forParentsPage.title')}
          </h1>
          <p className="text-lg md:text-xl text-background/90 mb-8 drop-shadow-sm">
            {t('forParentsPage.subtitle')}
          </p>
          <Button asChild size="lg">
            <Link to="/trial-class">
              {t('forParentsPage.signUpTrial')}
            </Link>
          </Button>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="py-12 bg-gradient-to-r from-sky-50 via-amber-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-card rounded-2xl shadow-gentle">
                <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Levels — Alternating Image + Text */}
      {programs.map((program, index) => {
        const isReversed = index % 2 === 1;
        return (
          <section key={index} className={`${program.bg} py-16 md:py-24`}>
            <div className="container mx-auto px-4">
              <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}>
                <div className="w-full md:w-1/2">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-[300px] md:h-[400px] object-cover rounded-3xl shadow-warm"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                    {program.level}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{program.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{program.description}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Parents Love Us — 3 Key Points */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t('forParentsPage.whyParentsLove.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEL Framework — Badge Row */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-foreground mb-6">
            {t('forParentsPage.nel.title')}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {nelItems.map((item) => (
              <Badge
                key={item.key}
                variant="outline"
                className={`${item.color} border-0 px-5 py-2.5 text-sm font-medium rounded-full`}
              >
                {t(`forParentsPage.nel.items.${item.key}`)}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Company Motto + CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-12 w-12 text-primary-foreground mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-bold text-primary-foreground max-w-3xl mx-auto mb-8">
            "{t('forParentsPage.motto')}"
          </blockquote>
          <Button size="lg" className="bg-sunshine hover:bg-sunshine/90 text-foreground font-semibold" asChild>
            <Link to="/trial-class">{t('forParentsPage.cta')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ForParents;
