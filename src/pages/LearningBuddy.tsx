import { useTranslation } from 'react-i18next';
import boosterLogo from '@/assets/booster-robotics-logo.png';
import learningBuddyHero from '@/assets/learning-buddy-hero.png';

const LearningBuddy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Story Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary-glow via-background to-sunshine-light/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzIxOTZGMyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-block">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                    🤖 Our Story
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Meet the EC STEM Learning Buddy
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  The Learning Buddy was made in a little workshop where a team of builders wanted to create a friend who loves learning all the time. They put together helpful sensors, a bright smart brain, and a spark of imagination.
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-sm font-medium">AI-Powered Learning</span>
                    </div>
                    <span className="text-muted-foreground/40">•</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <span className="text-sm font-medium">Interactive Robot</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
                <img 
                  src={learningBuddyHero} 
                  alt="K1 Learning Buddy Robot" 
                  className="relative w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with Logo */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-block animate-fade-in">
              <img 
                src={boosterLogo} 
                alt="Booster Robotics" 
                className="h-20 md:h-28 mx-auto drop-shadow-xl hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                Learning Buddy
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                EC STEM brings K1, designed by Booster, into the classroom to immerse young thinkers with the experience of co-learning with an autonomous artificial intelligent robot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners in Innovation Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-muted/40 via-background to-primary-glow/30 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjQiIGZpbGw9IiMyMTk2RjMiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                  🤝 Collaboration
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Partners in Innovation
              </h2>
            </div>
            
            <div className="mt-12 md:mt-16 space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-warm border border-border/50">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                  Our collaboration with Booster bring the latest robotics to co-learn with the children across preschools. This partnership allows children to experience first hand learning and interactive with our learning buddy to build confidence and compassion while exploring real-world technology.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary/10">
                <p className="text-lg md:text-xl text-foreground leading-relaxed text-center font-medium">
                  Together, we're nurturing future-ready creators by combining EC STEM's pedagogy and Booster's robotics innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningBuddy;
