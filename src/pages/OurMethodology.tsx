import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import methodologyPhoto from '@/assets/methodology-child-building.jpg';

const OurMethodology: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero / Intro Section */}
      <section className="relative py-20 md:py-28 bg-background overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              {t('methodologyPage.hero.title')}
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              {t('methodologyPage.hero.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('methodologyPage.hero.narrative')}
            </p>
            {/* Speech Bubble */}
            <div className="relative inline-block mb-10">
              <div className="relative bg-primary text-primary-foreground rounded-2xl px-8 py-5 text-xl md:text-2xl font-bold shadow-lg">
                {t('methodologyPage.hero.speechBubble')}
                <div
                  className="absolute -bottom-4 left-10"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '16px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '18px solid hsl(var(--primary))',
                  }}
                />
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {t('methodologyPage.hero.foundation')}
            </p>
            <img
              src={methodologyPhoto}
              alt={t('methodologyPage.hero.imageAlt')}
              loading="lazy"
              className="rounded-3xl shadow-xl w-full max-w-xl mx-auto border-4 border-primary/20 object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* Sys-STEM-ic Approach Section */}
      <section className="relative py-20 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sys-<span className="text-primary">STEM</span>-ic {t('methodologyPage.systematic.titleSuffix')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('methodologyPage.systematic.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-3xl p-10 md:p-14 overflow-hidden text-center">
              <div className="absolute top-4 left-4 w-10 h-10 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-accent/30 rounded-full animate-pulse delay-300" />
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground italic leading-snug">
                {t('methodologyPage.quote')}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Productive Struggle Section */}
      <section className="relative py-20 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('methodologyPage.productiveStruggle.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('methodologyPage.productiveStruggle.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Empowering Fixers Section */}
      <section className="relative py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('methodologyPage.empoweringFixers.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('methodologyPage.empoweringFixers.description')}
            </p>
            <img
              alt={t('methodologyPage.empoweringFixers.imageAlt')}
              loading="lazy"
              className="rounded-3xl shadow-xl w-full max-w-xl mx-auto object-cover aspect-[4/3] mb-8 border-accent-vibrant border-8" src="/lovable-uploads/a2cb5db0-dbdc-4564-8949-d9f975791fc9.jpg" />

            <p className="text-xl font-semibold text-foreground mb-6">
              {t('methodologyPage.empoweringFixers.cta')}
            </p>
            <Link to="/trial-class">
              <Button variant="hero" size="hero" className="rounded-full">
                {t('methodologyPage.empoweringFixers.button')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>);
};

export default OurMethodology;
