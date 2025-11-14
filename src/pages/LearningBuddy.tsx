import { useTranslation } from 'react-i18next';
import boosterLogo from '@/assets/booster-robotics-logo.png';
import learningBuddyHero from '@/assets/learning-buddy-hero.png';

const LearningBuddy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src={boosterLogo} 
              alt="Booster Robotics" 
              className="h-24 md:h-32 mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Learning Buddy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              EC STEM brings K1, designed by Booster, into the classroom to immerse young thinkers with the experience of co-learning with an autonomous artificial intelligent robot.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Story of EC STEM Learning Buddy
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Learning Buddy was made in a little workshop where a team of builders wanted to create a friend who loves learning all the time. They put together helpful sensors, a bright smart brain, and a spark of imagination.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={learningBuddyHero} 
                  alt="K1 Learning Buddy Robot" 
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningBuddy;
