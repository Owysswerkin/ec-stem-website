import React from 'react';
import { MapPin, Phone, Clock, Users, Car, Train } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import classroomImage from '@/assets/classroom-activities.jpg';
import outdoorImage from '@/assets/outdoor-play.jpg';

const Centres = () => {
  const { t } = useTranslation();
  const centres = [
    {
      id: 1,
      name: 'Little Stars Main Campus',
      address: '123 Learning Street, Central District, Singapore 123456',
      phone: '+65 6234 5678',
      email: 'main@ecstem.club',
      image: classroomImage,
      features: [
        'Full-day programmes (18 months - 6 years)',
        'Indoor playground & gymnasium',
        'Art & music studios',
        'Library & reading corner',
        'Outdoor garden & nature area',
        'Parent meeting rooms'
      ],
      transport: [
        'MRT: Central Station (5 min walk)',
        'Bus: 123, 456, 789',
        'Parking: 20 covered lots available'
      ],
      capacity: '120 children',
      established: '2010',
      coordinates: { lat: 1.3521, lng: 103.8198 }
    },
    {
      id: 2,
      name: 'Little Stars East',
      address: '456 Sunshine Avenue, East District, Singapore 456789',
      phone: '+65 6345 6789',
      email: 'east@ecstem.club',
      image: outdoorImage,
      features: [
        'Full-day programmes (18 months - 6 years)',
        'Large outdoor playground',
        'Swimming pool facility',
        'Multi-purpose hall',
        'Science discovery lab',
        'Parent café'
      ],
      transport: [
        'MRT: East Park Station (3 min walk)',
        'Bus: 234, 567, 890',
        'Parking: 25 covered lots available'
      ],
      capacity: '100 children',
      established: '2015',
      coordinates: { lat: 1.3621, lng: 103.8398 }
    },
    {
      id: 3,
      name: 'Little Stars West',
      address: '789 Rainbow Road, West District, Singapore 789012',
      phone: '+65 6456 7890',
      email: 'west@ecstem.club',
      image: classroomImage,
      features: [
        'Full-day programmes (18 months - 6 years)',
        'Rooftop garden & greenhouse',
        'Technology learning lab',
        'Dance & movement studio',
        'Sensory play area',
        'Community exhibition space'
      ],
      transport: [
        'MRT: West Point Station (7 min walk)',
        'Bus: 345, 678, 901',
        'Parking: 15 covered lots available'
      ],
      capacity: '80 children',
      established: '2018',
      coordinates: { lat: 1.3421, lng: 103.7998 }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-soft-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t('centresPage.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('centresPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Centres Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {centres.map((centre, index) => (
              <div key={centre.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative h-96 rounded-3xl overflow-hidden shadow-warm">
                    <img 
                      src={centre.image} 
                      alt={centre.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold text-primary">{t('centresPage.established')} {centre.established}</p>
                            <p className="text-xs text-muted-foreground">{t('centresPage.servingCommunity')} {2024 - parseInt(centre.established)} {t('centresPage.years')}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-foreground">{t('centresPage.capacity')}</p>
                            <p className="text-xs text-muted-foreground">{centre.capacity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {centre.name}
                  </h2>
                  
                  {/* Contact Info */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{centre.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground">{centre.phone}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground">Mon - Fri: 7:00 AM - 7:00 PM</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{t('centresPage.centreFeatures')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {centre.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transport */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{t('centresPage.gettingHere')}</h3>
                    <div className="space-y-2">
                      {centre.transport.map((transport, idx) => {
                        const icon = transport.includes('MRT') ? Train : 
                                   transport.includes('Bus') ? Users : Car;
                        const IconComponent = icon;
                        return (
                          <div key={idx} className="flex items-center space-x-3">
                            <IconComponent className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{transport}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="default">
                      {t('centresPage.scheduleVisit')}
                    </Button>
                    <Button variant="outline">
                      {t('centresPage.viewOnMap')}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Find Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All our centres are conveniently located with excellent transport links and parking facilities.
            </p>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="bg-card rounded-3xl shadow-warm overflow-hidden">
            <div className="h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">
                  Visit our centres page to view detailed location information and directions.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {centres.map((centre) => (
              <Card key={centre.id} className="hover:shadow-warm transition-all duration-300 border-none shadow-gentle">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-3">{centre.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <p>{centre.phone}</p>
                    <p>{centre.email}</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Centre
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Centre Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Choose Your Preferred Location
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each centre offers the same high-quality education with unique features tailored to the local community.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-3xl shadow-gentle overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="text-left p-6 font-semibold">Feature</th>
                  <th className="text-center p-6 font-semibold">Main Campus</th>
                  <th className="text-center p-6 font-semibold">East Centre</th>
                  <th className="text-center p-6 font-semibold">West Centre</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-border">
                  <td className="p-6 font-medium text-foreground">Age Groups</td>
                  <td className="p-6 text-center text-muted-foreground">18m - 6yr</td>
                  <td className="p-6 text-center text-muted-foreground">18m - 6yr</td>
                  <td className="p-6 text-center text-muted-foreground">18m - 6yr</td>
                </tr>
                <tr className="border-t border-border bg-muted/30">
                  <td className="p-6 font-medium text-foreground">Capacity</td>
                  <td className="p-6 text-center text-muted-foreground">120 children</td>
                  <td className="p-6 text-center text-muted-foreground">100 children</td>
                  <td className="p-6 text-center text-muted-foreground">80 children</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-6 font-medium text-foreground">Special Features</td>
                  <td className="p-6 text-center text-muted-foreground">Main library</td>
                  <td className="p-6 text-center text-muted-foreground">Swimming pool</td>
                  <td className="p-6 text-center text-muted-foreground">Tech lab</td>
                </tr>
                <tr className="border-t border-border bg-muted/30">
                  <td className="p-6 font-medium text-foreground">Parking Lots</td>
                  <td className="p-6 text-center text-muted-foreground">20 covered</td>
                  <td className="p-6 text-center text-muted-foreground">25 covered</td>
                  <td className="p-6 text-center text-muted-foreground">15 covered</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Centres;