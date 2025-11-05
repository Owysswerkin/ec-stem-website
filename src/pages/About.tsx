import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Users, Trophy, Star, BookOpen, Shield, Target, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import msHuangPortrait from '@/assets/ms-huang-founder-cropped.jpg';
import gearClippyCharacter from '@/assets/gear-clippy-character.jpg';
import teacherClairabel from '@/assets/teacher-clairabel.jpg';
import teamPhoto from '@/assets/team-photo.jpg';
import teacherWanRong from '@/assets/teacher-wan-rong.jpg';
import teacherJayne from '@/assets/teacher-jayne.jpg';
const About = () => {
  const {
    t
  } = useTranslation();
  const values = [{
    icon: Star,
    title: t('aboutPage.values.curiosity.title'),
    description: t('aboutPage.values.curiosity.description')
  }, {
    icon: Zap,
    title: t('aboutPage.values.understanding.title'),
    description: t('aboutPage.values.understanding.description')
  }, {
    icon: Heart,
    title: t('aboutPage.values.handsMinds.title'),
    description: t('aboutPage.values.handsMinds.description')
  }];
  const team = [{
    name: t('aboutPage.team.msHuang.name'),
    role: t('aboutPage.team.msHuang.role'),
    image: teacherClairabel,
    description: t('aboutPage.team.msHuang.description')
  }, {
    name: t('aboutPage.team.jennifer.name'),
    role: t('aboutPage.team.jennifer.role'),
    image: teacherWanRong,
    description: t('aboutPage.team.jennifer.description')
  }, {
    name: t('aboutPage.team.david.name'),
    role: t('aboutPage.team.david.role'),
    image: teacherJayne,
    description: t('aboutPage.team.david.description')
  }];
  return <div className="min-h-screen">
      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={teamPhoto} alt="EC STEM education team collaborating with STEM materials and technology" className="rounded-3xl shadow-warm w-full" />
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
            {values.map((value, index) => <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 border-none shadow-gentle bg-card">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('aboutPage.founder.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
                  <blockquote className="relative text-lg text-muted-foreground leading-relaxed italic mb-8">
                    "{t('aboutPage.founder.quote')}"
                  </blockquote>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-xl font-bold text-foreground">{t('aboutPage.founder.name')}</p>
                    <p className="text-primary font-semibold mb-2">{t('aboutPage.founder.role')}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t('aboutPage.founder.description')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
                  <img 
                    src={msHuangPortrait} 
                    alt="Ms Huang, Founder of EC STEM, passionate early childhood STEM educator" 
                    className="relative rounded-3xl shadow-warm w-full"
                  />
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
            {team.map((member, index) => <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 border-none shadow-gentle">
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

    </div>;
};
export default About;