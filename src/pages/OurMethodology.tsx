import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import methodologyPhoto from '@/assets/methodology-child-building.jpg';
import screwdriverPhoto from '@/assets/stem-child-screwdriver.jpg';

const OurMethodology: React.FC = () => {
  return (
    <>

      {/* Hero / Intro Section */}
      <section className="relative py-20 md:py-28 bg-background overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Our Methodology
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              Building a child's Self-Ecstem
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              We help our children develop a powerful internal narrative: "There is no problem I can't solve." This is the foundation for a resilient, confident, and inventive future. Discover the Self-Ecstem Methodology where every challenge builds a stronger sense of self.
            </p>
            <img
              src={methodologyPhoto}
              alt="Child building with STEM materials"
              className="rounded-3xl shadow-xl w-full max-w-xl mx-auto border-4 border-primary/20 object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Sys-STEM-ic Approach Section */}
      <section className="relative py-20 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sys-<span className="text-primary">STEM</span>-ic Approach
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We connect science, technology, engineering, and mathematics through integrated, hands-on learning. Every activity is purposeful play, meticulously designed to spark discovery and achieve clear learning objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-3xl p-10 md:p-14 overflow-hidden text-center">
              <div className="absolute top-4 left-4 w-10 h-10 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-accent/30 rounded-full animate-pulse delay-300" />
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground italic leading-snug">
                "No question is too silly,<br />No idea is too big."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Productive Struggle Section */}
      <section className="relative py-20 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Productive Struggle
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We guide children through challenges, fostering resilience. This "sweet spot" of learning—where effort meets support—builds perseverance and deep understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Empowering Fixers Section */}
      <section className="relative py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Empowering Fixers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our methodology shapes proactive problem-solvers. Children learn to see challenges as puzzles, equipped with the mindset and tools to innovate, tinker, and improve.
            </p>
            <img
              src={screwdriverPhoto}
              alt="Child hands-on with STEM tools"
              className="rounded-3xl shadow-xl w-full max-w-xl mx-auto border-4 border-primary/20 object-cover aspect-[4/3] mb-8"
            />
            <p className="text-xl font-semibold text-foreground mb-6">
              Ready to see your child's confidence soar? Experience our hands-on STEM learning firsthand.
            </p>
            <Link to="/trial-class">
              <Button variant="hero" size="hero" className="rounded-full">
                Book a Trial Class
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMethodology;
