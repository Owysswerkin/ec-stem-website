import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Trophy, BookOpen, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-preschool.jpg';
import classroomImage from '@/assets/classroom-activities.jpg';
import outdoorImage from '@/assets/outdoor-play.jpg';

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: 'STEM Foundation',
      description: 'Building strong foundations in Science, Technology, Engineering & Math through hands-on exploration.',
      color: 'bg-primary'
    },
    {
      icon: BookOpen,
      title: 'Inquiry-Based Learning',
      description: 'Encouraging curiosity and critical thinking through guided discovery and experimentation.',
      color: 'bg-accent-vibrant'
    },
    {
      icon: Users,
      title: 'Collaborative Projects',
      description: 'Small group activities that foster teamwork, communication, and problem-solving skills.',
      color: 'bg-secondary'
    },
    {
      icon: Play,
      title: 'Play-Based STEM',
      description: 'Making STEM concepts accessible and fun through creative play and interactive learning.',
      color: 'bg-sunshine'
    }
  ];

  const programs = [
    {
      title: 'Nursery (18 months - 3 years)',
      description: 'Gentle introduction to structured learning with plenty of sensory exploration.',
      image: classroomImage,
      highlights: ['Social skills', 'Motor development', 'Language basics']
    },
    {
      title: 'Pre-K (3 - 4 years)',
      description: 'Building foundation skills through creative activities and group interaction.',
      image: outdoorImage,
      highlights: ['Pre-literacy', 'Math concepts', 'Creative arts']
    },
    {
      title: 'Kindergarten (4 - 6 years)',
      description: 'Comprehensive preparation for primary school with advanced learning activities.',
      image: classroomImage,
      highlights: ['Reading readiness', 'Problem solving', 'School preparation']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Happy children learning" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                Inspiring Young
                <span className="block text-sunshine animate-bounce-gentle">STEM Minds</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                Where curiosity meets discovery! Nurturing future innovators through early childhood STEM education 
                for children aged 18 months to 6 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="hero" asChild>
                  <Link to="/admissions">
                    Enroll Your Child
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
                <Button variant="outline" size="hero" className="border-white text-white hover:bg-white/20">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="h-8 w-8 text-sunshine" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{animationDelay: '1s'}}>
          <Heart className="h-12 w-12 text-primary" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Ec stem?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We integrate Science, Technology, Engineering & Math into playful early childhood learning experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 border-none shadow-gentle">
                <CardContent className="p-8 text-center">
                  <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Age-appropriate curricula designed to foster development at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-warm transition-all duration-300 transform hover:scale-105 border-none shadow-gentle">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/programmes">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15+', label: 'Years of Excellence' },
              { number: '500+', label: 'Happy Families' },
              { number: '50+', label: 'Caring Teachers' },
              { number: '3', label: 'Convenient Locations' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Child's Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Join our loving community and give your child the best foundation for lifelong learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="hero" asChild>
              <Link to="/admissions">Schedule a Visit</Link>
            </Button>
            <Button variant="outline" size="hero" className="border-white text-white hover:bg-white/20">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;