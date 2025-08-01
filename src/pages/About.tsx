
import React from 'react';
import { Heart, Users, Trophy, Star, BookOpen, Shield, Target, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import msHuangPortrait from '@/assets/ms-huang-portrait.jpg';
import classroomImage from '@/assets/classroom-activities.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Bringing cutting-edge STEM education to early childhood learning environments.'
    },
    {
      icon: BookOpen,
      title: 'Excellence',
      description: 'Delivering the highest quality STEM programs and professional development.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building strong collaborative relationships with childcare centres and educators.'
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Ensuring all programs meet the highest safety standards for young learners.'
    },
    {
      icon: Star,
      title: 'Accessibility',
      description: 'Making quality STEM education accessible to every childcare centre.'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'Creating meaningful learning experiences that inspire lifelong curiosity.'
    }
  ];

  const team = [
    {
      name: 'Ms Huang',
      role: 'Founder & STEM Director',
      image: msHuangPortrait,
      description: 'Passionate educator with extensive experience in early childhood STEM education and curriculum development.'
    },
    {
      name: 'Ms. Jennifer Lim',
      role: 'Head of Programs',
      image: classroomImage,
      description: 'Specialist in robotics education for young children with extensive experience in program implementation.'
    },
    {
      name: 'Mr. David Wong',
      role: 'Technology Director',
      image: classroomImage,
      description: 'Former engineer turned educator, passionate about making technology accessible to young minds.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-soft-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About Ec stem
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Singapore's premier provider of early childhood STEM education services, 
              empowering childcare centres with innovative robotics training and comprehensive STEM programs since 2019.
            </p>
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
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To transform early childhood education by providing childcare centres with world-class STEM programs, 
                    robotics training, and educator development services that inspire young minds and prepare children 
                    for a technology-driven future.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading STEM education service provider in Southeast Asia, making quality early childhood 
                    STEM learning accessible to every childcare centre and nurturing the next generation of innovators, 
                    problem-solvers, and critical thinkers.
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
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These values guide our approach to serving childcare centres and developing STEM programs for young learners.
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
                    A Message from Our Founder
                  </h2>
                  <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                    "Every child deserves the opportunity to explore, discover, and fall in love with learning. 
                    At EC STEM, we bring the wonder of science, technology, engineering, and mathematics directly 
                    to childcare centres, empowering educators and inspiring young minds to see the world as their laboratory."
                  </blockquote>
                  <div>
                    <p className="font-semibold text-foreground">Ms Huang</p>
                    <p className="text-muted-foreground">Founder & STEM Director</p>
                    <p className="text-sm text-muted-foreground">Passionate educator and early childhood STEM specialist</p>
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
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our passionate team combines deep expertise in early childhood development with cutting-edge STEM knowledge.
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
              Recognition & Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: '2023', award: 'Best STEM Education Provider', body: 'Singapore Education Awards' },
              { year: '2022', award: 'Innovation in Early Learning', body: 'Child Development Council' },
              { year: '2021', award: 'Excellence in Educator Training', body: 'Professional Development SG' },
              { year: '2020', award: 'Outstanding Service to Childcare', body: 'Childcare Association SG' }
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
