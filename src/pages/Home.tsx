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
import heroRobotClassroom from '@/assets/hero-classroom-robot.jpg';
import stemGearsYellowBlue from '@/assets/stem-gears-yellow-blue.png';
import stemChildBuilding from '@/assets/stem-child-building.jpg';
import stemChildScrewdriver from '@/assets/stem-child-screwdriver.jpg';
import AnimatedGear from '@/components/AnimatedGear';
import YouTubeVideoSection from '@/components/YouTubeVideoSection';
import PartnersMarquee from '@/components/PartnersMarquee';
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
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url(${heroRobotClassroom})`, backgroundPosition: 'right 85%', backgroundSize: '140%' }}
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Early Childhood
              <br />
              <span style={{ color: '#2980B9' }}>S</span>
              <span style={{ color: '#E74C3C' }}>T</span>
              <span style={{ color: '#F1C40F' }}>E</span>
              <span style={{ color: '#27AE60' }}>M</span>
              {' '}Education
              <br />
              <span className="text-foreground">in Singapore</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              From <span className="inline-block relative bg-red-100 text-red-600 font-semibold px-3 py-0.5 rounded-full">'I can't'<span className="absolute -bottom-1.5 left-4 w-2.5 h-2.5 bg-red-100 rotate-45"></span></span> to <span className="inline-block relative bg-green-100 text-green-700 font-semibold px-3 py-0.5 rounded-full">'Let's fix it!'<span className="absolute -bottom-1.5 left-4 w-2.5 h-2.5 bg-green-100 rotate-45"></span></span> Our hands-on STEM play empowers your child to manage frustration and find solutions with others. We give them the tools to look at any challenge and say, <span className="inline-block relative bg-primary/15 text-primary font-semibold px-3 py-0.5 rounded-full">'I've got this.'<span className="absolute -bottom-1.5 left-4 w-2.5 h-2.5 bg-primary/15 rotate-45"></span></span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 justify-center items-center">
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

      {/* Building Blocks of Early STEM */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building Blocks of Early <span className="text-primary">STEM</span>
            </h2>
          </div>

          {/* Lego Bricks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
            {/* Red Brick - Observation */}
            <div className="relative">
              <div className="flex justify-center gap-2 mb-[-4px] relative z-10">
                <div className="w-5 h-3 rounded-full bg-red-600 border-b-2 border-red-700 shadow-inner" />
                <div className="w-5 h-3 rounded-full bg-red-600 border-b-2 border-red-700 shadow-inner" />
              </div>
              <div className="bg-red-500 rounded-lg p-6 md:p-8 text-center shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.15)] border-b-4 border-red-700">
                <span className="text-white font-bold text-sm md:text-base tracking-wide">Observation</span>
              </div>
            </div>

            {/* Green Brick - Exploration */}
            <div className="relative">
              <div className="flex justify-center gap-2 mb-[-4px] relative z-10">
                <div className="w-5 h-3 rounded-full bg-green-600 border-b-2 border-green-700 shadow-inner" />
                <div className="w-5 h-3 rounded-full bg-green-600 border-b-2 border-green-700 shadow-inner" />
              </div>
              <div className="bg-green-500 rounded-lg p-6 md:p-8 text-center shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.15)] border-b-4 border-green-700">
                <span className="text-white font-bold text-sm md:text-base tracking-wide">Exploration</span>
              </div>
            </div>

            {/* Yellow Brick - Imagination */}
            <div className="relative">
              <div className="flex justify-center gap-2 mb-[-4px] relative z-10">
                <div className="w-5 h-3 rounded-full bg-yellow-500 border-b-2 border-yellow-600 shadow-inner" />
                <div className="w-5 h-3 rounded-full bg-yellow-500 border-b-2 border-yellow-600 shadow-inner" />
              </div>
              <div className="bg-yellow-400 rounded-lg p-6 md:p-8 text-center shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.15)] border-b-4 border-yellow-600">
                <span className="text-white font-bold text-sm md:text-base tracking-wide drop-shadow-sm">Imagination</span>
              </div>
            </div>

            {/* Blue Brick - Construction */}
            <div className="relative">
              <div className="flex justify-center gap-2 mb-[-4px] relative z-10">
                <div className="w-5 h-3 rounded-full bg-blue-600 border-b-2 border-blue-700 shadow-inner" />
                <div className="w-5 h-3 rounded-full bg-blue-600 border-b-2 border-blue-700 shadow-inner" />
              </div>
              <div className="bg-blue-500 rounded-lg p-6 md:p-8 text-center shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.15)] border-b-4 border-blue-700">
                <span className="text-white font-bold text-sm md:text-base tracking-wide">Construction</span>
              </div>
            </div>
          </div>

          {/* Our Core Curriculum */}
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Core Curriculum</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* FIX-IT Mindset */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-foreground mb-3">"FIX-IT" <span className="text-red-500">Mindset</span></h4>
              <div className="relative inline-block mb-4">
                <div className="bg-red-500 text-white px-5 py-2 rounded-2xl font-semibold text-sm">
                  "I try again"
                </div>
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-red-500" />
              </div>
              <p className="text-muted-foreground leading-relaxed mt-2">
                We direct children to view challenges as opportunities to learn, persist, and get better.
              </p>
            </div>

            {/* Applied INNOVATION */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-foreground mb-3">Applied <span className="text-blue-500">INNOVATION</span></h4>
              <div className="relative inline-block mb-4">
                <div className="bg-blue-500 text-white px-5 py-2 rounded-2xl font-semibold text-sm">
                  "I think and figure things out"
                </div>
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-blue-500" />
              </div>
              <p className="text-muted-foreground leading-relaxed mt-2">
                We guide children toward solutions that are useful, testable, and rooted in real-world needs.
              </p>
            </div>

            {/* CONSCIENTIOUS Making */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-foreground mb-3">CONSCIENTIOUS <span className="text-green-500">Making</span></h4>
              <div className="relative inline-block mb-4">
                <div className="bg-green-500 text-white px-5 py-2 rounded-2xl font-semibold text-sm">
                  "I care for people and the planet"
                </div>
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-green-500" />
              </div>
              <p className="text-muted-foreground leading-relaxed mt-2">
                We teach kids to design with empathy, safety, and consideration for our world.
              </p>
            </div>
          </div>

          {/* Side-by-side images + Our Methodology */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
              Learning Through Play, with the "Fix-it" <span className="text-primary">Mindset</span>
            </h3>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 leading-relaxed">
              Our hands-on approach turns everyday curiosity into meaningful STEM experiences, building confidence one challenge at a time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img
                src={stemChildBuilding}
                alt="Child building with STEM materials"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
              <img
                src={stemChildScrewdriver}
                alt="Child using screwdriver in STEM activity"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="text-center">
              <Link to="/our-methodology">
                <Button variant="outline" size="lg" className="rounded-full">
                  Our Methodology <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
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

      {/* Partners Marquee */}
      <PartnersMarquee />

        {/* Wave Divider - Partners to Programs */}
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