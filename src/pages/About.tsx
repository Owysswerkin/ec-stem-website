
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Users, Trophy, Star, BookOpen, Shield, Target, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import msHuangPortrait from '@/assets/ms-huang-portrait.jpg';
import classroomImage from '@/assets/classroom-activities.jpg';

const About = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: Star,
      title: t('aboutPage.values.curiosity.title'),
      description: t('aboutPage.values.curiosity.description')
    },
    {
      icon: Zap,
      title: t('aboutPage.values.understanding.title'),
      description: t('aboutPage.values.understanding.description')
    },
    {
      icon: Heart,
      title: t('aboutPage.values.handsMinds.title'),
      description: t('aboutPage.values.handsMinds.description')
    }
  ];

  const team = [
    {
      name: t('aboutPage.team.msHuang.name'),
      role: t('aboutPage.team.msHuang.role'),
      image: msHuangPortrait,
      description: t('aboutPage.team.msHuang.description')
    },
    {
      name: t('aboutPage.team.jennifer.name'),
      role: t('aboutPage.team.jennifer.role'),
      image: classroomImage,
      description: t('aboutPage.team.jennifer.description')
    },
    {
      name: t('aboutPage.team.david.name'),
      role: t('aboutPage.team.david.role'),
      image: classroomImage,
      description: t('aboutPage.team.david.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-soft-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t('aboutPage.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {t('aboutPage.subtitle')}
            </p>
            <div className="bg-primary/10 rounded-2xl p-6 inline-block">
              <p className="text-lg font-semibold text-primary italic">
                "{t('aboutPage.slogan')}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={classroomImage} 
                alt="STEM training session at childcare centre" 
                className="rounded-3xl shadow-warm w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                {t('aboutPage.mission.title')}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{t('aboutPage.mission.missionHeader')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('aboutPage.mission.missionText')}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{t('aboutPage.mission.visionHeader')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('aboutPage.mission.visionText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('aboutPage.values.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('aboutPage.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 border-none shadow-gentle bg-card">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-glow rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <img 
                    src={msHuangPortrait} 
                    alt="Ms Huang - Founder" 
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-warm"
                  />
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    {t('aboutPage.founder.title')}
                  </h2>
                  <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                    "{t('aboutPage.founder.quote')}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-foreground">{t('aboutPage.founder.name')}</p>
                    <p className="text-muted-foreground">{t('aboutPage.founder.role')}</p>
                    <p className="text-sm text-muted-foreground">{t('aboutPage.founder.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('aboutPage.team.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('aboutPage.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 border-none shadow-gentle">
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('aboutPage.achievements.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: '2023', award: t('aboutPage.achievements.award2023'), body: t('aboutPage.achievements.body2023') },
              { year: '2022', award: t('aboutPage.achievements.award2022'), body: t('aboutPage.achievements.body2022') },
              { year: '2021', award: t('aboutPage.achievements.award2021'), body: t('aboutPage.achievements.body2021') },
              { year: '2020', award: t('aboutPage.achievements.award2020'), body: t('aboutPage.achievements.body2020') }
            ].map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-warm transition-all duration-300 border-none shadow-gentle">
                <div className="bg-sunshine w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-primary mb-2">{achievement.year}</p>
                <h3 className="font-semibold text-foreground mb-2">{achievement.award}</h3>
                <p className="text-sm text-muted-foreground">{achievement.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
