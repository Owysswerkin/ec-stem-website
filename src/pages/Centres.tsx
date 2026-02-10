import React from 'react';
import { MapPin, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import edventureLogo from '@/assets/edventure-logo.png';
import lcentralLogo from '@/assets/lcentral-logo.png';
import chickyOliveLogo from '@/assets/chicky-olive-logo.png';

const Centres = () => {
  const centres = [
    {
      id: 1,
      name: 'Edventure Learning Academy',
      address: 'Esr Bizpark @Chai Chee, 750 Chai Chee Rd Singapore 46',
      color: 'from-primary/20 to-lavender/20',
      logo: edventureLogo
    },
    {
      id: 2,
      name: 'LCENTRAL English (NOVENA)',
      address: '157B THOMSON ROAD Singapore 307610',
      color: 'from-sunshine/20 to-coral/20',
      logo: lcentralLogo
    },
    {
      id: 3,
      name: 'Chicky&Olive International Preschool',
      address: '52 MEDWAY DRIVE Singapore 556552',
      color: 'from-lavender/20 to-primary/20',
      logo: chickyOliveLogo
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-sunshine/10">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-sunshine/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              Our Partner Centres
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Locations
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Discover where Ec stem brings hands-on STEM education to young learners across Singapore.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Where We Teach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We partner with quality preschools and enrichment centres to bring our STEM curriculum to children.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {centres.map((centre) => (
              <Card 
                key={centre.id} 
                className={`relative overflow-hidden border-0 shadow-warm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${centre.color} opacity-50`} />
                <CardContent className="relative p-6 flex flex-col items-center text-center">
                  <div className="w-48 h-48 flex items-center justify-center mb-4">
                    {centre.logo ? (
                      <img src={centre.logo} alt={centre.name} className="max-w-full max-h-full object-contain" />
                    ) : (
                      <Building2 className="h-16 w-16 text-primary" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {centre.name}
                  </h3>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed">{centre.address}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Want Ec stem at Your Centre?
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Partner with us to bring engaging STEM education to your preschool or enrichment centre.
            </p>
            <Button size="lg" className="bg-[#F8B529] hover:bg-[#e6a418] text-white font-semibold" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Centres;