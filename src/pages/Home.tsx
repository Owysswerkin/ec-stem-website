import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Heart, Users, Trophy, BookOpen, Play, Sparkles, Zap, Cpu, Lightbulb, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import WaveDivider from '@/components/WaveDivider';
import asianChildrenStem from '@/assets/asian-children-stem.jpg';
import asianKidsRobotics from '@/assets/asian-kids-robotics.jpg';
import asianKidsScience from '@/assets/asian-kids-science.jpg';
import heroRobotClassroom from '@/assets/hero-robot-classroom.png';
import stemGearsYellowBlue from '@/assets/stem-gears-yellow-blue.png';
import stemChildBuilding from '@/assets/stem-child-building.jpg';
import stemChildScrewdriver from '@/assets/stem-child-screwdriver.jpg';
import AnimatedGear from '@/components/AnimatedGear';
import YouTubeVideoSection from '@/components/YouTubeVideoSection';
const Home = () => {
  const { t } = useTranslation();

  const services = [{
    icon: BookOpen,
    title: t('services.curriculum.title'),
    description: t('services.curriculum.description'),
    points: t('services.curriculum.points', {
      returnObjects: true
    }) as string[],
    color: 'bg-primary'
  }, {
    icon: Heart,
    title: t('services.satisfaction.title'),
    description: t('services.satisfaction.description'),
    points: t('services.satisfaction.points', {
      returnObjects: true
    }) as string[],
    color: 'bg-accent-vibrant'
  }, {
    icon: Trophy,
    title: t('services.partnership.title'),
    description: t('services.partnership.description'),
    points: t('services.partnership.points', {
      returnObjects: true
    }) as string[],
    color: 'bg-secondary'
  }];
  const programs = [{
    title: t('programs.toddler.title'),
    description: t('programs.toddler.description'),
    image: asianKidsScience,
    highlights: t('programs.toddler.highlights', {
      returnObjects: true
    }) as string[]
  }, {
    title: t('programs.preK.title'),
    description: t('programs.preK.description'),
    image: asianKidsRobotics,
    highlights: t('programs.preK.highlights', {
      returnObjects: true
    }) as string[]
  }, {
    title: t('programs.kindergarten.title'),
    description: t('programs.kindergarten.description'),
    image: asianChildrenStem,
    highlights: t('programs.kindergarten.highlights', {
      returnObjects: true
    }) as string[]
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${heroRobotClassroom})`, backgroundPosition: '18% center' }}
        />
        {/* Light overlay for soft washed-out look */}
        <div className="absolute inset-0 bg-white/[0.78]" />
        {/* Grain noise overlay - subtle rasterised texture */}
        <div 
          className="absolute inset-0 opacity-[0.18] pointer-events-none z-[1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Decorative STEM gears */}
        <img src={stemGearsYellowBlue} alt="" aria-hidden="true" className="absolute top-4 right-4 md:top-8 md:right-8 z-[2] w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 opacity-60 pointer-events-none select-none object-contain" />
        
        {/* Main content - centered */}
        <div className="relative z-[3] flex flex-col items-center justify-center px-4 pt-20 pb-16">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-dark mb-6 leading-[1.1] tracking-tight">
              Early Childhood
              <br />
              <span className="text-primary">STEM Education</span>
              <br />
              <span className="text-secondary">in Singapore</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              From <span className="inline-block relative bg-red-100 text-red-600 font-semibold px-3 py-0.5 rounded-full">'I can't'<span className="absolute -bottom-1.5 left-4 w-2.5 h-2.5 bg-red-100 rotate-45"></span></span> to <span className="inline-block relative bg-green-100 text-green-700 font-semibold px-3 py-0.5 rounded-full">'Let's fix it!'<span className="absolute -bottom-1.5 left-4 w-2.5 h-2.5 bg-green-100 rotate-45"></span></span> Our hands-on STEM play empowers your child to manage frustration and find solutions with others. We give them the tools to look at any challenge and say, <span className="inline-block relative bg-primary/15 text-primary font-semibold px-3 py-0.5 rounded-full">'I've got this.'<span className="absolute -bottom-1.5 left-4 w-2.5 h-2.5 bg-primary/15 rotate-45"></span></span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-coral hover:bg-coral/90 text-white px-8 py-6 text-lg rounded-full shadow-lg font-semibold" 
                asChild
              >
                <Link to="/trial-class">
                  Sign Up for a Trial Class
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-6 text-lg rounded-full font-semibold" 
                asChild
              >
                <a href="/EC_STEM_Booklet.pdf" target="_blank" rel="noopener noreferrer">
                  Download Brochure
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <YouTubeVideoSection />

      {/* Wave Divider - Hero to Services */}
      <WaveDivider variant="wave1" colorClass="fill-gray-50" />

      {/* Services Overview */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
            <div className="w-full md:w-1/2 relative ml-auto md:ml-8 lg:ml-16">
              <img src={stemChildBuilding} alt="Child engaged in hands-on STEM building activity" className="rounded-2xl shadow-lg w-[85%] ml-auto object-cover aspect-[4/3] relative z-10 -mt-4" />
              <img src={stemChildScrewdriver} alt="Child using screwdriver in STEM activity" className="rounded-2xl shadow-lg w-[55%] object-cover aspect-[4/3] absolute -bottom-8 -left-4 z-20 border-4 border-white" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Learning Through Play, with the <span className="text-primary">"Fix-it Mindset"</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We provide STEM learning that is active, child-led experimentation—where play becomes real-world scientific inquiry that develops critical thinking, creativity, and the problem-solving skills future innovators need.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="group p-8 hover:shadow-xl transition-all duration-300 bg-white border-none">
                <div className={`w-20 h-20 mb-6 ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-3 text-left">
                  {service.points.map((point, idx) => <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>)}
                </ul>
              </Card>)}
          </div>
        </div>
      </section>

        {/* Wave Divider - Services to Slogan */}
        <WaveDivider variant="wave2" colorClass="fill-background" flip />

      {/* Slogan Section */}
      <section className="bg-soft-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-secondary rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-1/2 right-8 w-6 h-6 bg-accent rounded-full animate-pulse delay-1000"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse delay-300"></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-500"></div>
                </div>
                <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    "{t('aboutPage.slogan')}"
                  </span>
                </blockquote>
                <div className="flex items-center justify-center mt-6">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse delay-200"></div>
                  <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse delay-600"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Wave Divider - Slogan to Programs */}
        <WaveDivider variant="wave1" colorClass="fill-teal-soft" flip />

      {/* Programs Preview */}
        <section className="py-20 bg-teal-soft relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {t('programs.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 border-none shadow-gentle">
                <CardContent className="p-8">
                  <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {index === 0 && <Users className="h-8 w-8 text-white" />}
                    {index === 1 && <Lightbulb className="h-8 w-8 text-white" />}
                    {index === 2 && <Cpu className="h-8 w-8 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                  <div className="text-sm font-semibold text-primary bg-primary-glow px-3 py-1 rounded-full inline-block mb-4">
                    {index === 0 && 'Nursery 2'}
                    {index === 1 && 'Kindergarten 1'}
                    {index === 2 && 'Kindergarten 2'}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>)}
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

    </div>;
};
export default Home;