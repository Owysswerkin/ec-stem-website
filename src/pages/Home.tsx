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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Happy children learning" 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        
        {/* Decorative clouds and elements */}
        <div className="absolute top-10 right-10 w-32 h-24 bg-white/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-16 w-24 h-18 bg-blue-200/40 rounded-full blur-lg"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-left">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                  Raising innovators
                  <br />
                  <span className="text-blue-600">of tomorrow</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                  Heroes who think critically and solve problems creatively through STEM exploration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full shadow-lg"
                    asChild
                  >
                    <Link to="/programmes">
                      Find out how
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg rounded-full"
                    asChild
                  >
                    <Link to="/admissions">Register Interest</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Right side - Hero image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Children engaged in STEM learning" 
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full animate-bounce-gentle"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400 rounded-full animate-float"></div>
              <div className="absolute top-1/3 -left-8 w-12 h-12 bg-orange-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Experience Centres */}
            <Card className="group text-center p-8 hover:shadow-xl transition-all duration-300 bg-white border-none">
              <div className="w-20 h-20 mx-auto mb-6 bg-orange-100 rounded-2xl flex items-center justify-center">
                <Users className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Experience our Centres</h3>
              <p className="text-gray-600 mb-6">Visit our state-of-the-art STEM learning environments</p>
              <Button variant="outline" className="rounded-full" asChild>
                <Link to="/centres">Learn More</Link>
              </Button>
            </Card>

            {/* STEM Programmes */}
            <Card className="group text-center p-8 hover:shadow-xl transition-all duration-300 bg-white border-none">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">STEM Programmes</h3>
              <p className="text-gray-600 mb-6">Discover our innovative early childhood STEM curriculum</p>
              <Button variant="outline" className="rounded-full" asChild>
                <Link to="/programmes">Learn More</Link>
              </Button>
            </Card>

            {/* Find Centres */}
            <Card className="group text-center p-8 hover:shadow-xl transition-all duration-300 bg-white border-none">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-2xl flex items-center justify-center">
                <Trophy className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Locate Centres</h3>
              <p className="text-gray-600 mb-6">Find the most convenient location near you</p>
              <Button variant="outline" className="rounded-full" asChild>
                <Link to="/centres">Learn More</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Who we are
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are committed to providing the best care and education to young children in Singapore so parents, 
              like you, can head to work with peace of mind. We do this well across multiple child care centres 
              island-wide with clean and conducive learning spaces, a strong proprietary STEM curriculum and a team 
              of passionate educators who will be partners in your parenting journey.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Beyond that, we are committed to raising future innovators through early childhood STEM education 
              that builds critical thinking, creativity, and problem-solving skills from an early age.
            </p>
            <Button 
              variant="default" 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full"
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-20 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-16 left-16 w-32 h-32 bg-white/5 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Child's STEM Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our innovative learning community and give your child the foundation for future success in science, technology, engineering, and mathematics.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: '10+', label: 'Years of STEM Excellence' },
              { number: '400+', label: 'Future Innovators' },
              { number: '30+', label: 'Expert Educators' },
              { number: '3', label: 'Modern Centres' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-yellow-300">{stat.number}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full shadow-lg"
              asChild
            >
              <Link to="/admissions">Register Now</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;