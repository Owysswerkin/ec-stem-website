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
      description: 'A gentle introduction to structured learning through sensory exploration and social interaction.',
      image: classroomImage,
      features: ['Sensory play activities', 'Basic social skills', 'Language development', 'Motor skills building'],
      schedule: [
        { time: '7:00 - 9:00 AM', activity: 'Arrival & Free Play' },
        { time: '9:00 - 9:30 AM', activity: 'Morning Circle Time' },
        { time: '9:30 - 10:30 AM', activity: 'Sensory Exploration' },
        { time: '10:30 - 11:00 AM', activity: 'Snack Time' },
        { time: '11:00 - 12:00 PM', activity: 'Outdoor Play' },
        { time: '12:00 - 1:00 PM', activity: 'Lunch & Rest Preparation' },
        { time: '1:00 - 3:00 PM', activity: 'Nap Time' },
        { time: '3:00 - 3:30 PM', activity: 'Afternoon Snack' },
        { time: '3:30 - 5:00 PM', activity: 'Creative Activities' },
        { time: '5:00 - 7:00 PM', activity: 'Extended Care & Pickup' }
      ],
      highlights: [
        'Low teacher-to-child ratio (1:4)',
        'Individualized attention',
        'Parent communication app',
        'Daily activity reports'
      ]
    },
    {
      id: 'prek',
      title: 'Pre-Kindergarten',
      ageRange: '3 - 4 years',
      description: 'Building foundation skills through creative activities, group interaction, and structured learning.',
      image: outdoorImage,
      features: ['Pre-literacy skills', 'Basic numeracy', 'Creative arts', 'Social-emotional learning'],
      schedule: [
        { time: '7:00 - 9:00 AM', activity: 'Arrival & Morning Play' },
        { time: '9:00 - 9:30 AM', activity: 'Circle Time & Calendar' },
        { time: '9:30 - 10:15 AM', activity: 'Language Arts' },
        { time: '10:15 - 10:30 AM', activity: 'Snack Time' },
        { time: '10:30 - 11:15 AM', activity: 'Math & Science Exploration' },
        { time: '11:15 AM - 12:00 PM', activity: 'Outdoor Activities' },
        { time: '12:00 - 1:00 PM', activity: 'Lunch & Quiet Time' },
        { time: '1:00 - 1:45 PM', activity: 'Creative Arts & Crafts' },
        { time: '1:45 - 2:30 PM', activity: 'Music & Movement' },
        { time: '2:30 - 3:00 PM', activity: 'Story Time' },
        { time: '3:00 - 7:00 PM', activity: 'Extended Activities & Pickup' }
      ],
      highlights: [
        'Introduction to phonics',
        'Creative problem solving',
        'Group project activities',
        'Regular parent updates'
      ]
    },
    {
      id: 'kindergarten',
      title: 'Kindergarten',
      ageRange: '4 - 6 years',
      description: 'Comprehensive preparation for primary school with advanced learning activities and independence building.',
      image: classroomImage,
      features: ['Reading & writing readiness', 'Mathematical concepts', 'Science exploration', 'School preparation'],
      schedule: [
        { time: '7:00 - 8:30 AM', activity: 'Early Arrival & Reading Corner' },
        { time: '8:30 - 9:00 AM', activity: 'Morning Meeting' },
        { time: '9:00 - 9:45 AM', activity: 'Literacy Workshop' },
        { time: '9:45 - 10:00 AM', activity: 'Brain Break & Snack' },
        { time: '10:00 - 10:45 AM', activity: 'Mathematics' },
        { time: '10:45 - 11:30 AM', activity: 'Science & Discovery' },
        { time: '11:30 AM - 12:15 PM', activity: 'Physical Education' },
        { time: '12:15 - 1:15 PM', activity: 'Lunch & Rest' },
        { time: '1:15 - 2:00 PM', activity: 'Art & Music' },
        { time: '2:00 - 2:45 PM', activity: 'Social Studies & Life Skills' },
        { time: '2:45 - 3:30 PM', activity: 'Project Work & Centers' },
        { time: '3:30 - 7:00 PM', activity: 'Enrichment & Extended Care' }
      ],
      highlights: [
        'Primary school readiness',
        'Independent learning skills',
        'Critical thinking development',
        'Portfolio assessment'
      ]
    }
  ];

  const enrichmentPrograms = [
    {
      icon: Music,
      title: 'Music & Movement',
      description: 'Developing rhythm, coordination, and musical appreciation through songs, instruments, and dance.',
      ages: 'All ages'
    },
    {
      icon: Palette,
      title: 'Creative Arts',
      description: 'Exploring creativity through various art mediums, fostering self-expression and fine motor skills.',
      ages: 'All ages'
    },
    {
      icon: Globe,
      title: 'Languages',
      description: 'Introduction to Mandarin through games, songs, and cultural activities.',
      ages: '3+ years'
    },
    {
      icon: BookOpen,
      title: 'Reading Club',
      description: 'Advanced reading program for children showing exceptional literacy interests.',
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

      {/* Detailed Programme Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Daily Schedules & Activities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each programme follows a carefully structured daily routine that balances learning, play, rest, and exploration.
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Schedule */}
                  <Card className="border-none shadow-gentle">
                    <CardHeader>
                      <h3 className="text-2xl font-bold text-foreground flex items-center">
                        <Clock className="h-6 w-6 text-primary mr-3" />
                        Daily Schedule
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {programme.schedule.map((item, index) => (
                          <div key={index} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                            <div className="text-sm font-semibold text-primary min-w-[120px]">
                              {item.time}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {item.activity}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Programme Highlights */}
                  <Card className="border-none shadow-gentle">
                    <CardHeader>
                      <h3 className="text-2xl font-bold text-foreground flex items-center">
                        <Users className="h-6 w-6 text-primary mr-3" />
                        Programme Highlights
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {programme.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-muted-foreground">
                                <Star className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Special Highlights</h4>
                          <ul className="space-y-2">
                            {programme.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-center text-muted-foreground">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Enrichment Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Enrichment Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Additional programs to expand learning opportunities and discover new interests and talents.
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