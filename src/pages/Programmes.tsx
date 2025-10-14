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
      title: 'Early Explorers',
      level: 'Nursery 2',
      description: 'Children explore building blocks, learning to interlock pieces and create simple structures. Focused on fine motor skills, problem-solving, and curiosity, this stage lays the foundation for hands-on STEM learning.'
    },
    {
      icon: Palette,
      title: 'Curious Creators',
      level: 'Kindergarten 1',
      description: 'Children use simple tools like screws to connect blocks securely, developing coordination, precision, and early engineering thinking. Creativity and collaboration are nurtured through guided and open-ended construction challenges.'
    },
    {
      icon: BookOpen,
      title: 'Super Solvers',
      level: 'Kindergarten 2',
      description: 'Children engage with gears and mechanisms, exploring a new mechanism concept in each lesson. Hands-on experimentation builds problem-solving, critical thinking, and engineering understanding in a fun, interactive way.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* STEM Enrichment Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Program Highlights
            </h2>
            <div className="max-w-2xl mx-auto text-left">
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span><strong>Duration:</strong> 30–45 minutes per session</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span><strong>Class size:</strong> up to 10–12 children per group</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span><strong>Flexible models:</strong> weekly enrichment / holiday camps / STEM week themes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span><strong>All materials and setup</strong> provided by our team</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enrichmentPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 border-none shadow-gentle">
                <CardContent className="p-8">
                  <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                  <div className="text-sm font-semibold text-primary bg-primary-glow px-3 py-1 rounded-full inline-block mb-4">
                    {program.level}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
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