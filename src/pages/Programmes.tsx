import React from 'react';
import { Users, Calendar, Star, BookOpen, Palette, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Programmes = () => {

  const enrichmentPrograms = [
    {
      icon: Users,
      title: 'Robotics & Coding',
      description: 'Introduction to programming concepts and robotic systems through age-appropriate activities.',
      ages: 'All ages'
    },
    {
      icon: BookOpen,
      title: 'Science Experiments',
      description: 'Hands-on experiments that demonstrate scientific principles and encourage discovery.',
      ages: 'All ages'
    },
    {
      icon: Palette,
      title: 'Engineering Challenges',
      description: 'Building and design challenges that develop problem-solving and engineering thinking.',
      ages: '3+ years'
    },
    {
      icon: Globe,
      title: 'Math Adventures',
      description: 'Mathematical concepts explored through games, puzzles, and real-world applications.',
      ages: '4+ years'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-soft-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              STEM Education Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We partner with childcare centres to deliver innovative STEM education through specialized enrichment programs 
              and hands-on learning experiences designed for young learners.
            </p>
          </div>
        </div>
      </section>

      {/* STEM Enrichment Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              STEM Enrichment Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized STEM programs designed to deepen learning and explore advanced concepts.
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
              Partner with EC STEM
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We work with childcare centres to integrate STEM education into their existing programs. 
              Our enrichment activities are designed to complement your curriculum and inspire young learners.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Calendar,
                  title: 'Flexible Scheduling',
                  description: 'Programs designed to fit your centre\'s timetable and needs'
                },
                {
                  icon: BookOpen,
                  title: 'Curriculum Integration',
                  description: 'STEM activities that complement your existing educational programs'
                },
                {
                  icon: Users,
                  title: 'Professional Support',
                  description: 'Ongoing training and support for your educators'
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

            <Button variant="default" size="lg">
              Contact Us for Partnership
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programmes;