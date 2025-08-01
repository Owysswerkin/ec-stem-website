import React from 'react';
import { Clock, Users, Calendar, Star, BookOpen, Palette, Music, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import classroomImage from '@/assets/classroom-activities.jpg';
import outdoorImage from '@/assets/outdoor-play.jpg';

const Programmes = () => {
  const programmes = [
    {
      id: 'nursery',
      title: 'Nursery Program',
      ageRange: '18 months - 3 years',
      description: 'A gentle introduction to STEM learning through sensory exploration and discovery.',
      image: classroomImage,
      features: ['STEM sensory play', 'Basic scientific observation', 'Pattern recognition', 'Simple problem solving'],
      highlights: [
        'Hands-on exploration activities',
        'Introduction to cause and effect',
        'Early math concepts through play',
        'Building curiosity and wonder'
      ]
    },
    {
      id: 'prek',
      title: 'Pre-Kindergarten',
      ageRange: '3 - 4 years',
      description: 'Building STEM foundation skills through creative activities and structured discovery.',
      image: outdoorImage,
      features: ['Basic engineering challenges', 'Simple coding concepts', 'Nature science exploration', 'Mathematical thinking'],
      highlights: [
        'Building and construction activities',
        'Introduction to robotics',
        'Science experiments and observations',
        'Technology exploration'
      ]
    },
    {
      id: 'kindergarten',
      title: 'Kindergarten',
      ageRange: '4 - 6 years',
      description: 'Comprehensive STEM preparation with advanced learning activities and project-based discovery.',
      image: classroomImage,
      features: ['Advanced robotics projects', 'Mathematical problem solving', 'Scientific method introduction', 'Engineering design process'],
      highlights: [
        'Independent STEM projects',
        'Collaborative problem solving',
        'Critical thinking development',
        'Real-world application skills'
      ]
    }
  ];

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
              Our Programmes
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Age-appropriate curricula designed to nurture development, creativity, and school readiness 
              through play-based learning and hands-on exploration.
            </p>
          </div>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {programmes.map((programme, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 border-none shadow-gentle">
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <img 
                    src={programme.image} 
                    alt={programme.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {programme.ageRange}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{programme.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{programme.description}</p>
                  <ul className="space-y-2 mb-6">
                    {programme.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* STEM Activities */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              STEM Activities by Program
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each programme focuses on age-appropriate STEM activities that encourage exploration, discovery, and hands-on learning.
            </p>
          </div>

          <Tabs defaultValue={programmes[0].id} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {programmes.map((programme) => (
                <TabsTrigger 
                  key={programme.id} 
                  value={programme.id}
                  className="text-base font-semibold"
                >
                  {programme.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {programmes.map((programme) => (
              <TabsContent key={programme.id} value={programme.id}>
                <Card className="border-none shadow-gentle">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                          <Star className="h-6 w-6 text-primary mr-3" />
                          STEM Activities
                        </h3>
                        <ul className="space-y-3">
                          {programme.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-muted-foreground">
                              <div className="w-3 h-3 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                              <span className="text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                          <Users className="h-6 w-6 text-primary mr-3" />
                          Learning Outcomes
                        </h3>
                        <ul className="space-y-3">
                          {programme.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center text-muted-foreground">
                              <div className="w-3 h-3 bg-accent rounded-full mr-4 flex-shrink-0"></div>
                              <span className="text-base">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
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

      {/* Assessment & Portfolio */}
      <section className="py-20 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Assessment & Progress Tracking
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We use developmentally appropriate assessment methods to track each child's progress 
              and share meaningful insights with families.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Calendar,
                  title: 'Regular Observations',
                  description: 'Daily observations documented to track developmental milestones'
                },
                {
                  icon: BookOpen,
                  title: 'Portfolio System',
                  description: 'Collection of work samples showing progress over time'
                },
                {
                  icon: Users,
                  title: 'Parent Conferences',
                  description: 'Quarterly meetings to discuss progress and set goals'
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
              Schedule a Programme Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programmes;