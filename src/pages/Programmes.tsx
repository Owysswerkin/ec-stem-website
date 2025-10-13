import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Users, Calendar, Star, BookOpen, Palette, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Programmes = () => {
  const { t } = useTranslation();

  const enrichmentPrograms = [
    {
      icon: Users,
      title: t('programmesPage.enrichment.robotics.title'),
      description: t('programmesPage.enrichment.robotics.description'),
      ages: t('programmesPage.enrichment.robotics.ages')
    },
    {
      icon: BookOpen,
      title: t('programmesPage.enrichment.science.title'),
      description: t('programmesPage.enrichment.science.description'),
      ages: t('programmesPage.enrichment.science.ages')
    },
    {
      icon: Palette,
      title: t('programmesPage.enrichment.engineering.title'),
      description: t('programmesPage.enrichment.engineering.description'),
      ages: t('programmesPage.enrichment.engineering.ages')
    },
    {
      icon: Globe,
      title: t('programmesPage.enrichment.math.title'),
      description: t('programmesPage.enrichment.math.description'),
      ages: t('programmesPage.enrichment.math.ages')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-soft-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t('programmesPage.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('programmesPage.subtitle')}
            </p>
          </div>
        </div>
      </section>


      {/* STEM Enrichment Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('programmesPage.enrichment.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('programmesPage.enrichment.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enrichmentPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 border-none shadow-gentle">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{program.description}</p>
                  <div className="text-xs font-semibold text-primary bg-primary-glow px-3 py-1 rounded-full">
                    {program.ages}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Information */}
      <section className="py-20 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('programmesPage.partnership.title')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {t('programmesPage.partnership.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Calendar,
                  title: t('programmesPage.partnership.scheduling.title'),
                  description: t('programmesPage.partnership.scheduling.description')
                },
                {
                  icon: BookOpen,
                  title: t('programmesPage.partnership.integration.title'),
                  description: t('programmesPage.partnership.integration.description')
                },
                {
                  icon: Users,
                  title: t('programmesPage.partnership.support.title'),
                  description: t('programmesPage.partnership.support.description')
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              <Link to="/contact">{t('programmesPage.partnership.button')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programmes;