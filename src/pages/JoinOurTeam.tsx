import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lightbulb, MessageCircle, TrendingUp, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import WaveDivider from '@/components/WaveDivider';
import teamBuildingLego from '@/assets/team-building-lego.jpg';
import childBuildingBlocks from '@/assets/child-building-blocks.jpg';

const JoinOurTeam = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: Lightbulb,
      title: t('joinOurTeamPage.pillars.impact.title'),
      description: t('joinOurTeamPage.pillars.impact.description'),
      color: 'bg-emerald-500',
    },
    {
      icon: MessageCircle,
      title: t('joinOurTeamPage.pillars.voice.title'),
      description: t('joinOurTeamPage.pillars.voice.description'),
      color: 'bg-sky-500',
    },
    {
      icon: TrendingUp,
      title: t('joinOurTeamPage.pillars.growth.title'),
      description: t('joinOurTeamPage.pillars.growth.description'),
      color: 'bg-teal-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden bg-cover bg-top"
        style={{ backgroundImage: `url(${teamBuildingLego})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/50" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-emerald-700">{t('joinOurTeamPage.hero.headline1')}</span>
              <br />
              <span className="text-sky-600">{t('joinOurTeamPage.hero.headline2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl leading-relaxed font-medium">
              {t('joinOurTeamPage.hero.subtitle')}
            </p>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full shadow-lg font-semibold"
              asChild
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5GqK8rdRMyO7oKEYi75GPFhwEm3aZeVhw5QKJx-v3qjf7Mg/viewform?usp=sharing&ouid=116558226394152860899" target="_blank" rel="noopener noreferrer">
                {t('joinOurTeamPage.hero.cta')}
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      

      {/* Three Pillars Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={childBuildingBlocks}
                alt={t('joinOurTeamPage.altText.childBuilding')}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('joinOurTeamPage.community.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('joinOurTeamPage.community.body')}
              </p>
              <div className="space-y-6">
                {pillars.map((pillar, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className={`w-12 h-12 shrink-0 ${pillar.color} rounded-xl flex items-center justify-center`}>
                      <pillar.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{pillar.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="wave2" colorClass="fill-emerald-50" flip />

      {/* CTA Footer Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('joinOurTeamPage.cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('joinOurTeamPage.cta.body')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full shadow-lg font-semibold"
                asChild
              >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5GqK8rdRMyO7oKEYi75GPFhwEm3aZeVhw5QKJx-v3qjf7Mg/viewform?usp=sharing&ouid=116558226394152860899" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  {t('joinOurTeamPage.hero.cta')}
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white px-8 py-6 text-lg rounded-full font-semibold"
                asChild
              >
                <a href="https://www.linkedin.com/company/ecstemeducation/" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinOurTeam;
