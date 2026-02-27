import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Users, Calendar, Clock, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

import programmesHero from '@/assets/programmes-hero.png';
import earlyExplorers from '@/assets/early-explorers.png';
import k1Robots from '@/assets/k1-robots-playing.png';
import stemBuilding from '@/assets/stem-child-building.jpg';

const Programmes = () => {
  const { t } = useTranslation();

  const programs = [
    {
      title: t('programmesPage.programs.earlyExplorers.title'),
      level: t('programmesPage.programs.earlyExplorers.level'),
      description: t('programmesPage.programs.earlyExplorers.description'),
      image: earlyExplorers,
      bg: 'bg-sky-50',
    },
    {
      title: t('programmesPage.programs.curiousCreators.title'),
      level: t('programmesPage.programs.curiousCreators.level'),
      description: t('programmesPage.programs.curiousCreators.description'),
      image: k1Robots,
      bg: 'bg-amber-50',
    },
    {
      title: t('programmesPage.programs.superSolvers.title'),
      level: t('programmesPage.programs.superSolvers.level'),
      description: t('programmesPage.programs.superSolvers.description'),
      image: stemBuilding,
      bg: 'bg-rose-50',
    },
  ];

  const highlights = [
    { icon: Clock, title: t('programmesPage.highlights.duration.title'), desc: t('programmesPage.highlights.duration.description') },
    { icon: Users, title: t('programmesPage.highlights.classSize.title'), desc: t('programmesPage.highlights.classSize.description') },
    { icon: Calendar, title: t('programmesPage.highlights.flexible.title'), desc: t('programmesPage.highlights.flexible.description') },
    { icon: Package, title: t('programmesPage.highlights.materials.title'), desc: t('programmesPage.highlights.materials.description') },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={programmesHero} alt="STEM classroom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-sky-800/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg">
            For Preschool
          </h1>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="py-16 bg-gradient-to-r from-sky-50 via-amber-50 to-rose-50">
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

      {/* Program Levels */}
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

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bring STEM to Your Preschool
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us to deliver engaging, hands-on STEM enrichment for your students.
          </p>
          <Button asChild size="lg" variant="hero">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Programmes;
