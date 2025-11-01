import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Users, Calendar, Star, BookOpen, Palette, Globe, Clock, Package, Sparkles, CheckCircle, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Programmes = () => {
  const { t } = useTranslation();

  const enrichmentPrograms = [
    {
      icon: Users,
      title: t('programmesPage.programs.earlyExplorers.title'),
      level: t('programmesPage.programs.earlyExplorers.level'),
      description: t('programmesPage.programs.earlyExplorers.description')
    },
    {
      icon: Palette,
      title: t('programmesPage.programs.curiousCreators.title'),
      level: t('programmesPage.programs.curiousCreators.level'),
      description: t('programmesPage.programs.curiousCreators.description')
    },
    {
      icon: BookOpen,
      title: t('programmesPage.programs.superSolvers.title'),
      level: t('programmesPage.programs.superSolvers.level'),
      description: t('programmesPage.programs.superSolvers.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* STEM Enrichment Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {t('programmesPage.highlights.title')}
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50">
                  <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">{t('programmesPage.highlights.duration.title')}</h3>
                    <p className="text-muted-foreground">{t('programmesPage.highlights.duration.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50">
                  <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">{t('programmesPage.highlights.classSize.title')}</h3>
                    <p className="text-muted-foreground">{t('programmesPage.highlights.classSize.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50">
                  <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">{t('programmesPage.highlights.flexible.title')}</h3>
                    <p className="text-muted-foreground">{t('programmesPage.highlights.flexible.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50">
                  <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">{t('programmesPage.highlights.materials.title')}</h3>
                    <p className="text-muted-foreground">{t('programmesPage.highlights.materials.description')}</p>
                  </div>
                </div>
              </div>
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
      {/* Why Preschools Love Our Program */}
      <section className="py-20 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {t('programmesPage.whyTitle')}
            </h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Spanning 2 columns on large screens */}
            <Card className="lg:col-span-2 border-none shadow-warm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {t('programmesPage.benefits.playBased.title')}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t('programmesPage.benefits.playBased.description')}
                </p>
                <div className="bg-primary-glow p-4 rounded-xl border-l-4 border-primary">
                  <p className="text-foreground font-semibold italic">
                    "{t('programmesPage.benefits.playBased.quote')}"
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-none shadow-warm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-accent w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t('programmesPage.benefits.aligned.title')}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t('programmesPage.benefits.aligned.intro')}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('programmesPage.benefits.aligned.items.discovery')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('programmesPage.benefits.aligned.items.motor')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('programmesPage.benefits.aligned.items.creative')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('programmesPage.benefits.aligned.items.social')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-none shadow-warm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-secondary w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                  <Star className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t('programmesPage.benefits.skills.title')}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t('programmesPage.benefits.skills.intro')}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{t('programmesPage.benefits.skills.items.problem')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{t('programmesPage.benefits.skills.items.critical')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{t('programmesPage.benefits.skills.items.collaboration')}</span>
                  </li>
                </ul>
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <p className="text-foreground text-sm font-semibold italic">
                    "{t('programmesPage.benefits.skills.quote')}"
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 4 - Spanning 2 columns on large screens */}
            <Card className="lg:col-span-2 border-none shadow-warm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-sunshine w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {t('programmesPage.benefits.safe.title')}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  {t('programmesPage.benefits.safe.description')}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-card p-4 rounded-xl text-center border-2 border-primary/20">
                    <p className="text-sm font-semibold text-foreground">{t('programmesPage.benefits.safe.features.ages')}</p>
                  </div>
                  <div className="bg-card p-4 rounded-xl text-center border-2 border-primary/20">
                    <p className="text-sm font-semibold text-foreground">{t('programmesPage.benefits.safe.features.setup')}</p>
                  </div>
                  <div className="bg-card p-4 rounded-xl text-center border-2 border-primary/20">
                    <p className="text-sm font-semibold text-foreground">{t('programmesPage.benefits.safe.features.materials')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 5 */}
            <Card className="border-none shadow-warm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-lavender w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t('programmesPage.benefits.zeroPrep.title')}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{t('programmesPage.benefits.zeroPrep.intro')}</p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-lavender mt-0.5 flex-shrink-0" />
                    <span>{t('programmesPage.benefits.zeroPrep.items.instructors')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-lavender mt-0.5 flex-shrink-0" />
                    <span>{t('programmesPage.benefits.zeroPrep.items.kits')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-lavender mt-0.5 flex-shrink-0" />
                    <span>{t('programmesPage.benefits.zeroPrep.items.reports')}</span>
                  </li>
                </ul>
                <div className="bg-lavender/10 p-3 rounded-lg">
                  <p className="text-foreground text-sm font-semibold italic">
                    "{t('programmesPage.benefits.zeroPrep.quote')}"
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 6 - Spanning 2 columns on large screens */}
            <Card className="lg:col-span-2 border-none shadow-warm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {t('programmesPage.benefits.engaging.title')}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t('programmesPage.benefits.engaging.description')}
                </p>
                <div className="bg-accent/10 p-4 rounded-xl">
                  <p className="text-foreground font-semibold">
                    {t('programmesPage.benefits.engaging.benefit')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programmes;