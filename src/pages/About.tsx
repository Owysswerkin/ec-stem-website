import React from 'react';
import { Heart, Users, Trophy, Star, BookOpen, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import principalImage from '@/assets/principal-portrait.jpg';
import classroomImage from '@/assets/classroom-activities.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Love & Care',
      description: 'Every child is valued and nurtured in a warm, supportive environment.'
    },
    {
      icon: BookOpen,
      title: 'Excellence',
      description: 'We strive for the highest standards in early childhood education.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong partnerships with families and the wider community.'
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Ensuring a secure, healthy environment where children can explore freely.'
    },
    {
      icon: Star,
      title: 'Potential',
      description: 'Recognizing and developing the unique talents in every child.'
    },
    {
      icon: Trophy,
      title: 'Achievement',
      description: 'Celebrating growth and success in all areas of development.'
    }
  ];

  const team = [
    {
      name: 'Mrs. Sarah Chen',
      role: 'Principal & Founder',
      image: principalImage,
      description: 'With over 20 years in early childhood education, Mrs. Chen brings passion and expertise to leading our wonderful team.'
    },
    {
      name: 'Ms. Jennifer Lim',
      role: 'Head of Curriculum',
      image: classroomImage,
      description: 'A specialist in child development with 15 years of experience creating engaging learning programs.'
    },
    {
      name: 'Mr. David Wong',
      role: 'Art & Music Director',
      image: classroomImage,
      description: 'Bringing creativity and joy to learning through arts, music, and movement activities.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-soft-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About Little Stars
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over 15 years, we've been dedicated to providing exceptional early childhood education 
              in a nurturing, play-based environment where every child can thrive and discover their potential.
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
                alt="Children learning together" 
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
                    To provide a safe, nurturing, and stimulating environment where young children 
                    can develop their full potential through play-based learning, quality care, 
                    and meaningful relationships.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be Singapore's leading preschool, raising confident, creative, and caring 
                    individuals who are ready to shine bright in their educational journey and beyond.
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
              These values guide everything we do, from curriculum design to daily interactions with children and families.
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

      {/* Principal's Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-glow rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <img 
                    src={principalImage} 
                    alt="Mrs. Sarah Chen - Principal" 
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-warm"
                  />
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    A Message from Our Principal
                  </h2>
                  <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                    "Every child who walks through our doors brings their own unique light. 
                    Our role is to nurture that light, help it grow brighter, and guide each 
                    little star to discover their own special way of shining. At Little Stars, 
                    we don't just prepare children for school – we prepare them for life."
                  </blockquote>
                  <div>
                    <p className="font-semibold text-foreground">Mrs. Sarah Chen</p>
                    <p className="text-muted-foreground">Principal & Founder</p>
                    <p className="text-sm text-muted-foreground">M.Ed in Early Childhood Education, 20+ years experience</p>
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
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our passionate educators are the heart of Little Stars, bringing expertise, creativity, and genuine care to every interaction.
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
              { year: '2023', award: 'Outstanding Preschool Award', body: 'Singapore Education Awards' },
              { year: '2022', award: 'Best Early Learning Program', body: 'Child Development Council' },
              { year: '2021', award: 'Community Excellence Award', body: 'Local Community Board' },
              { year: '2020', award: 'Innovation in Education', body: 'Preschool Association SG' }
            ].map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-warm transition-all duration-300 border-none shadow-gentle">
                <div className="bg-sunshine w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-white" />
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