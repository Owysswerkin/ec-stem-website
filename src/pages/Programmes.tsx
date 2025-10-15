import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Users, Calendar, Star, BookOpen, Palette, Globe, Clock, Package, Sparkles, CheckCircle, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Programmes = () => {
  const { t } = useTranslation();

  const enrichmentPrograms = [
    {
      icon: Users,
      title: 'Early Explorers',
      level: 'Nursery 2',
      description: 'Children explore building blocks, learning to interlock pieces and create simple structures. Focused on fine motor skills, problem-solving, and curiosity, this stage lays the foundation for hands-on STEM learning.'
    },
    {
      icon: Palette,
      title: 'Curious Creators',
      level: 'Kindergarten 1',
      description: 'Children use simple tools like screws to connect blocks securely, developing coordination, precision, and early engineering thinking. Creativity and collaboration are nurtured through guided and open-ended construction challenges.'
    },
    {
      icon: BookOpen,
      title: 'Super Solvers',
      level: 'Kindergarten 2',
      description: 'Children engage with gears and mechanisms, exploring a new mechanism concept in each lesson. Hands-on experimentation builds problem-solving, critical thinking, and engineering understanding in a fun, interactive way.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* STEM Enrichment Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Program Highlights
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50">
                  <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">Duration</h3>
                    <p className="text-muted-foreground">30–45 minutes per session</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50">
                  <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">Class Size</h3>
                    <p className="text-muted-foreground">up to 8 children</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50">
                  <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">Flexible Models</h3>
                    <p className="text-muted-foreground">Weekly enrichment / holiday camps / STEM week themes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50">
                  <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">All Materials Provided</h3>
                    <p className="text-muted-foreground">Complete setup provided by our team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enrichmentPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 border-none shadow-gentle">
                <CardContent className="p-8">
                  <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                  <div className="text-sm font-semibold text-primary bg-primary-glow px-3 py-1 rounded-full inline-block mb-4">
                    {program.level}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Information */}
      {/* Why Preschools Love Our Program */}
      <section className="py-20 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Why Preschools Love Our Program
            </h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Spanning 2 columns on large screens */}
            <Card className="lg:col-span-2 border-none shadow-warm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Children Learn Science Through Play
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Every build becomes a discovery: bridges teach balance, cars teach motion, and towers teach structure and stability.
                </p>
                <div className="bg-primary-glow p-4 rounded-xl border-l-4 border-primary">
                  <p className="text-foreground font-semibold italic">
                    "We make STEM concepts come alive — one LEGO brick at a time."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-none shadow-warm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-accent w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  100% Aligned with Singapore's NEL Framework
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our lessons reinforce key learning areas:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Discovery of the World — exploring how things work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Motor Skills Development — fine hand coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Creative Expression — design and imagination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Social & Emotional Development — teamwork, sharing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-none shadow-warm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-secondary w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                  <Star className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Builds 21st Century Skills
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Through open-ended challenges, children develop:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Problem-solving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Critical thinking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Collaboration and communication</span>
                  </li>
                </ul>
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <p className="text-foreground text-sm font-semibold italic">
                    "Every build is a teamwork challenge that grows both the mind and the heart."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 4 - Spanning 2 columns on large screens */}
            <Card className="lg:col-span-2 border-none shadow-warm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-sunshine w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Safe, Clean & Mess-Free STEM Learning
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  No chemicals, no wires, no clutter — just creative exploration with child-safe LEGO® DUPLO® blocks.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-card p-4 rounded-xl text-center border-2 border-primary/20">
                    <p className="text-sm font-semibold text-foreground">✅ Suitable for ages 3–6</p>
                  </div>
                  <div className="bg-card p-4 rounded-xl text-center border-2 border-primary/20">
                    <p className="text-sm font-semibold text-foreground">✅ Easy to set up and clean</p>
                  </div>
                  <div className="bg-card p-4 rounded-xl text-center border-2 border-primary/20">
                    <p className="text-sm font-semibold text-foreground">✅ All materials provided</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 5 */}
            <Card className="border-none shadow-warm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-lavender w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Zero Prep for Teachers — We Handle Everything
                </h3>
                <p className="text-muted-foreground text-sm mb-4">We bring:</p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-lavender mt-0.5 flex-shrink-0" />
                    <span>Trained STEM instructors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-lavender mt-0.5 flex-shrink-0" />
                    <span>Complete lesson kits and LEGO® sets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-lavender mt-0.5 flex-shrink-0" />
                    <span>Post-class reports and activity photos</span>
                  </li>
                </ul>
                <div className="bg-lavender/10 p-3 rounded-lg">
                  <p className="text-foreground text-sm font-semibold italic">
                    "We bring everything your centre needs — lessons, materials, and the smiles."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 6 - Spanning 2 columns on large screens */}
            <Card className="lg:col-span-2 border-none shadow-warm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Parent-Engaging & School-Enhancing
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Each class ends with a tangible creation that children can proudly share. We also provide photo and story templates for your school's Facebook, newsletter, or parent communications.
                </p>
                <div className="bg-accent/10 p-4 rounded-xl">
                  <p className="text-foreground font-semibold">
                    Boost parent satisfaction and showcase your preschool's innovation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programmes;