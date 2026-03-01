import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import msHuangPortrait from '@/assets/ms-huang-founder-cropped.jpg';


import teamPhoto from '@/assets/team-photo.jpg';
import missionBg from '@/assets/mission-bg.png';
import visionBg from '@/assets/vision-bg.png';
import teacherWanRong from '@/assets/teacher-wan-rong.jpg';
import teacherJayne from '@/assets/teacher-jayne.jpg';
import teacherFlynne from '@/assets/teacher-flynne.jpg';
const About = () => {
  const {
    t
  } = useTranslation();
  const [expandedTeacher, setExpandedTeacher] = useState<number | null>(null);
  const team = [{
    name: t('aboutPage.team.jennifer.name'),
    role: t('aboutPage.team.jennifer.role'),
    image: teacherWanRong,
    description: t('aboutPage.team.jennifer.description'),
    bgColor: 'bg-pink-200',
    badgeColor: 'bg-emerald-500 text-white'
  }, {
    name: t('aboutPage.team.david.name'),
    role: t('aboutPage.team.david.role'),
    image: teacherJayne,
    description: t('aboutPage.team.david.description'),
    bgColor: 'bg-lime-200',
    badgeColor: 'bg-teal-500 text-white'
  }, {
    name: t('aboutPage.team.flynne.name'),
    role: t('aboutPage.team.flynne.role'),
    image: teacherFlynne,
    description: t('aboutPage.team.flynne.description'),
    bgColor: 'bg-teal-200',
    badgeColor: 'bg-orange-500 text-white'
  }];
  return <div className="min-h-screen">
      {/* Header Hero - Soft Pastel */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-sky-50 via-rose-50 to-amber-50">
        <div className="absolute inset-0 overflow-hidden">
          <img src={teamPhoto} alt={t('aboutPage.altText.team')} className="w-full h-full object-cover opacity-15" loading="lazy" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {t('aboutPage.mission.title')}
          </h2>
          
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={missionBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-sky-800/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('aboutPage.mission.missionHeader')}
            </span>
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white font-semibold">
              {t('aboutPage.mission.missionText')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={visionBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-emerald-800/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('aboutPage.mission.visionHeader')}
            </span>
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white font-semibold">
              {t('aboutPage.mission.visionText')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Core Curriculum */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {t('home.coreCurriculum.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* FIX-IT Mindset */}
            <div className="text-center">
              <h4 className="text-2xl font-bold text-foreground mb-3">{t('home.coreCurriculum.fixIt.label')} <span className="text-red-500">{t('home.coreCurriculum.fixIt.highlight')}</span></h4>
              <div className="relative inline-block mb-4">
                <div className="bg-red-500 text-white px-5 py-3 rounded-2xl font-semibold text-base">
                  {t('home.coreCurriculum.fixIt.bubble')}
                </div>
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-red-500" />
              </div>
              <p className="text-muted-foreground leading-relaxed mt-2 text-lg">
                {t('home.coreCurriculum.fixIt.description')}
              </p>
            </div>

            {/* Applied INNOVATION */}
            <div className="text-center">
              <h4 className="text-2xl font-bold text-foreground mb-3">{t('home.coreCurriculum.innovation.label')} <span className="text-blue-500">{t('home.coreCurriculum.innovation.highlight')}</span></h4>
              <div className="relative inline-block mb-4">
                <div className="bg-blue-500 text-white px-5 py-3 rounded-2xl font-semibold text-base">
                  {t('home.coreCurriculum.innovation.bubble')}
                </div>
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-blue-500" />
              </div>
              <p className="text-muted-foreground leading-relaxed mt-2 text-lg">
                {t('home.coreCurriculum.innovation.description')}
              </p>
            </div>

            {/* CONSCIENTIOUS Making */}
            <div className="text-center">
              <h4 className="text-2xl font-bold text-foreground mb-3">{t('home.coreCurriculum.conscientious.label')} <span className="text-green-500">{t('home.coreCurriculum.conscientious.highlight')}</span></h4>
              <div className="relative inline-block mb-4">
                <div className="bg-green-500 text-white px-5 py-3 rounded-2xl font-semibold text-base">
                  {t('home.coreCurriculum.conscientious.bubble')}
                </div>
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-green-500" />
              </div>
              <p className="text-muted-foreground leading-relaxed mt-2 text-lg">
                {t('home.coreCurriculum.conscientious.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {t('aboutPage.founder.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <span className="absolute -top-6 -left-4 text-8xl text-primary/20 font-serif leading-none select-none">"</span>
                  <blockquote className="relative text-xl md:text-2xl text-muted-foreground leading-relaxed italic mb-8 pl-6">
                    {t('aboutPage.founder.quote')}
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
                    alt={t('aboutPage.altText.founder')}
                    className="relative rounded-3xl shadow-warm w-[70%] mx-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-soft-gradient">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* 2-column header: title left, subtitle right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {t('aboutPage.team.title')}
              </h2>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {t('aboutPage.team.heading')}
              </p>
            </div>
            <div className="max-w-sm">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('aboutPage.team.subtitle')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center [perspective:1000px]">
                {/* Flip card container */}
                <div
                  className={`relative w-full aspect-[3/4] cursor-pointer transition-transform duration-700 [transform-style:preserve-3d] ${expandedTeacher === index ? '[transform:rotateY(180deg)]' : ''}`}
                  onClick={() => setExpandedTeacher(expandedTeacher === index ? null : index)}
                >
                  {/* Front - Photo */}
                  <div className={`absolute inset-0 [backface-visibility:hidden] ${member.bgColor} rounded-3xl p-5 flex items-center justify-center overflow-hidden`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  {/* Back - Description */}
                  <div className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] ${member.bgColor} rounded-3xl p-6 flex flex-col items-center justify-center text-center`}>
                    <p className="text-primary font-bold text-lg mb-3">{member.role}</p>
                    <p className="text-foreground/80 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
                <div
                  className={`${member.badgeColor} mt-4 px-6 py-2 rounded-full text-lg font-bold shadow-md`}
                >
                  {member.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>;
};
export default About;