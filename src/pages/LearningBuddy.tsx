import { useTranslation } from 'react-i18next';
import learningBuddyHero from '@/assets/learning-buddy-hero.png';
import k1RobotsPlaying from '@/assets/k1-robots-playing.png';
const LearningBuddy = () => {
  const {
    t
  } = useTranslation();
  return <div className="min-h-screen">
      {/* Story Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-primary-glow via-background to-sunshine-light/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzIxOTZGMyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-block">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                    🤖 {t('learningBuddy.storyBadge')}
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  {t('learningBuddy.title')}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  {t('learningBuddy.storyDescription')}
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-sm font-medium">{t('learningBuddy.aiPowered')}</span>
                    </div>
                    <span className="text-muted-foreground/40">•</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{
                      animationDelay: '0.2s'
                    }}></div>
                      <span className="text-sm font-medium">{t('learningBuddy.interactive')}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
                <div className="relative w-full rounded-3xl shadow-2xl overflow-hidden aspect-video">
                  <iframe 
                    src="https://www.youtube.com/embed/3iVEKk_UKI0?autoplay=1&mute=1&loop=1&playlist=3iVEKk_UKI0&controls=0&modestbranding=1&showinfo=0&rel=0"
                    title="K1 Learning Buddy Robot"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative animate-fade-in">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
                <img src={learningBuddyHero} alt={t('learningBuddy.altText.hero')} className="relative w-4/5 rounded-3xl shadow-2xl mx-auto" loading="lazy" />
              </div>
              
              <div className="space-y-6 animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  {t('learningBuddy.description')}
                </p>
              </div>
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
                  🤝 {t('learningBuddy.collaborationBadge')}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t('learningBuddy.partnersTitle')}
              </h2>
            </div>
            
            <div className="mt-12 md:mt-16 space-y-8 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-warm border border-border/50">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                  {t('learningBuddy.partnersDescription').split('Booster')[0]}
                  <a href="https://www.booster.tech/booster-k1/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline transition-all">Booster</a>
                  {t('learningBuddy.partnersDescription').split('Booster')[1]}
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary/10">
                <p className="text-lg md:text-xl text-foreground leading-relaxed text-center font-medium">
                  {t('learningBuddy.partnersTagline')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default LearningBuddy;