import React from 'react';
import edventureLogo from '@/assets/edventure-logo.png';
import lcentralLogo from '@/assets/lcentral-logo.png';
import chickyOliveLogo from '@/assets/chicky-olive-logo.png';

const partners = [
  { name: 'Edventure Learning Academy', logo: edventureLogo },
  { name: 'LCENTRAL English', logo: lcentralLogo },
  { name: 'Chicky & Olive International Preschool', logo: chickyOliveLogo },
];

// Duplicate for seamless loop
const allPartners = [...partners, ...partners, ...partners, ...partners];

const PartnersMarquee = () => {
  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h3 className="text-center text-lg font-semibold text-muted-foreground tracking-wide uppercase">
          Our Partner Centres
        </h3>
      </div>
      <div className="relative w-full">
        <div className="flex items-center gap-16 animate-marquee w-max">
          {allPartners.map((partner, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center h-20 w-40">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
