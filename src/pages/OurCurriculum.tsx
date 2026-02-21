import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import methodologyPhoto from '@/assets/methodology-child-building.jpg';

const bricks = [
  { label: 'Observation', color: '#E74C3C', shadow: '#B71C1C' },
  { label: 'Exploration', color: '#27AE60', shadow: '#1B5E20' },
  { label: 'Imagination', color: '#F1C40F', shadow: '#C6A700', textColor: '#5D4037' },
  { label: 'Construction', color: '#2980B9', shadow: '#1A5276' },
];

const LegoBlock: React.FC<{ label: string; color: string; shadow: string; textColor?: string }> = ({ label, color, shadow, textColor = '#fff' }) => (
  <div className="flex flex-col items-center group">
    {/* Studs row */}
    <div className="flex gap-[18%] relative z-10 -mb-[6px]" style={{ width: '70%' }}>
      {[0, 1, 2, 3].map(i => (
        <div
          key={i}
          className="flex-1 aspect-square rounded-full border-2"
          style={{
            backgroundColor: color,
            borderColor: shadow,
            boxShadow: `inset 0 -2px 4px ${shadow}44, 0 2px 4px ${shadow}66`,
          }}
        />
      ))}
    </div>
    {/* Brick body */}
    <div
      className="relative w-full rounded-lg flex items-center justify-center py-5 md:py-7 transition-transform duration-300 group-hover:scale-105"
      style={{
        backgroundColor: color,
        boxShadow: `0 6px 0 ${shadow}, 0 8px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.25)`,
      }}
    >
      <span
        className="text-base md:text-xl font-extrabold tracking-wide drop-shadow-sm"
        style={{ color: textColor, fontFamily: "'Montserrat', sans-serif" }}
      >
        {label}
      </span>
    </div>
  </div>
);

const OurCurriculum: React.FC = () => {
  return (
    <>
      {/* Hero / Intro Section */}
      <section className="relative py-20 md:py-28 bg-background overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Our Curriculum
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-10">
              Building Blocks of Early STEM
            </p>

            {/* Lego Bricks Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto mb-12">
              {bricks.map(b => (
                <LegoBlock key={b.label} {...b} />
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We help our children develop a powerful internal narrative:
            </p>
            {/* Speech Bubble */}
            <div className="relative inline-block mb-10">
              <div className="relative bg-primary text-primary-foreground rounded-2xl px-8 py-5 text-xl md:text-2xl font-bold shadow-lg">
                "There is no problem I can't solve."
                <div
                  className="absolute -bottom-4 left-10"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '16px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '18px solid hsl(var(--primary))',
                  }}
                />
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              This is the foundation for a resilient, confident, and inventive future. Discover the Self-Ecstem Methodology where every challenge builds a stronger sense of self.
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
              alt="Child hands-on with STEM tools"
              className="rounded-3xl shadow-xl w-full max-w-xl mx-auto object-cover aspect-[4/3] mb-8 border-accent-vibrant border-8"
              src="/lovable-uploads/a2cb5db0-dbdc-4564-8949-d9f975791fc9.jpg"
            />
            <p className="text-xl font-semibold text-foreground mb-6">
              Ready to see your child's confidence soar?<br />Experience our hands-on STEM learning firsthand.
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

export default OurCurriculum;
