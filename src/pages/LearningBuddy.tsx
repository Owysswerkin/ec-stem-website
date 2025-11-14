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
                    src="https://www.youtube.com/embed/SiXZYbIDvRw?autoplay=1&mute=1&loop=1&playlist=SiXZYbIDvRw&controls=0&modestbranding=1&showinfo=0&rel=0"
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

      {/* Hero Section with Logo */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block animate-fade-in">
                <svg width="103" height="15" viewBox="0 0 103 15" fill="currentColor" className="h-[400px] md:h-[560px] mx-auto drop-shadow-xl hover:scale-110 transition-transform duration-300">
                  <path d="M45.271 7.32044C44.9936 11.2943 41.5342 14.5105 37.5271 14.5105C33.5199 14.5105 30.518 11.3012 30.7954 7.32044C31.0727 3.36727 34.5529 0.130356 38.5392 0.130356C42.5256 0.130356 45.5483 3.36038 45.271 7.32044ZM41.8323 7.32044C41.9779 5.23366 40.3972 3.54633 38.2966 3.54633C36.196 3.54633 34.3796 5.23366 34.234 7.32044C34.0884 9.40722 35.6829 11.0945 37.7697 11.0945C39.8565 11.0945 41.6867 9.40722 41.8323 7.32044Z"></path>
                  <path d="M51.4203 4.37967L51.4689 4.51741C51.6907 4.96507 52.1344 5.12347 52.5712 5.27498C53.5903 5.60556 54.6718 5.83972 55.6562 6.26672C56.0583 6.4389 56.4535 6.65928 56.8071 6.90722C57.3132 7.27912 57.7499 7.74744 57.9995 8.33284C58.4709 9.38655 58.3461 10.6882 57.7153 11.7626C57.1121 12.8163 56.0722 13.6359 54.9422 14.1042C53.8121 14.5725 52.5642 14.6896 51.3926 14.6138C49.4584 14.4761 47.5865 13.7736 46.2693 12.4513L49.1325 9.97884C50.0823 10.9912 51.4897 11.5766 52.9247 11.5353C53.7081 11.5147 54.6787 11.1634 54.6025 10.2474C54.5886 10.1717 54.5747 10.1097 54.5539 10.0753C54.3182 9.4692 53.7705 9.23504 53.2298 9.06286C52.384 8.77361 51.4966 8.59454 50.6577 8.30529C49.8119 8.01603 49.0008 7.60281 48.4392 6.92099C47.843 6.23917 47.5726 5.30253 47.635 4.36589C47.7182 3.42925 48.1619 2.4995 48.8552 1.8108C49.597 1.03256 50.6092 0.56424 51.6491 0.288758C52.9317 -0.062482 54.2628 -0.0831432 55.5176 0.171678C56.814 0.426499 58.0272 0.991237 59.0325 1.82457L57.8401 2.89895C57.3132 3.38793 56.7516 3.87002 56.2039 4.35901C55.3581 3.32595 53.8815 2.83697 52.5018 3.16755C51.9264 3.30529 51.247 3.69096 51.3995 4.37278"></path>
                  <path d="M73.5911 0.323196L73.3484 3.73229H68.9045L68.1558 14.3177H64.7241L65.4659 3.73229H61.022L61.2646 0.323196H73.5911Z"></path>
                  <path d="M76.3088 0.323196H87.3596L87.1169 3.75295H79.4978L79.3661 5.61934H86.2989L86.0562 9.03532H79.1304L78.9987 10.9017H86.6178L86.3751 14.3177H75.3174L76.3088 0.323196Z"></path>
                  <path d="M102.369 4.66893C102.535 2.26535 100.719 0.323196 98.2995 0.323196H90.5695L90.3269 3.73917H98.0361C98.556 3.73917 98.9443 4.15928 98.9096 4.67581C98.8749 5.19234 98.4243 5.60557 97.9044 5.61245H90.1951L89.5781 14.3246H93.0168L93.3911 9.02154H95.9701L97.9113 14.3246H101.69L99.589 8.60143C101.114 7.90584 102.244 6.41135 102.369 4.67581"></path>
                  <path d="M29.2563 7.32044C28.979 11.2943 25.5195 14.5105 21.5124 14.5105C17.5053 14.5105 14.5034 11.3012 14.7807 7.32044C15.058 3.36727 18.5383 0.130356 22.5246 0.130356C26.5109 0.130356 29.5336 3.36038 29.2563 7.32044ZM25.8246 7.32044C25.9702 5.23366 24.3895 3.54633 22.2889 3.54633C20.1883 3.54633 18.3719 5.23366 18.2263 7.32044C18.0807 9.40722 19.6752 11.0945 21.762 11.0945C23.8488 11.0945 25.679 9.40722 25.8246 7.32044Z"></path>
                  <path d="M11.6817 7.24468C12.2086 6.52154 12.5275 5.64 12.5275 4.67581C12.5275 2.286 10.5447 0.316307 8.13906 0.316307H0.443697L0 3.75295H8.14599C8.65208 3.75295 9.07498 4.17306 9.07498 4.67581C9.07498 5.17857 8.65208 5.61934 8.14599 5.61934H4.81827L4.94306 4.67581H1.25483L0.0138655 14.3177H8.28465C10.6903 14.3177 12.6731 12.3686 12.6731 9.97884C12.6731 8.9389 12.2918 7.98848 11.6817 7.25157M8.28465 10.9017H4.13886L4.3815 9.03531H8.24998C8.77687 9.03531 9.22057 9.45543 9.22057 9.97884C9.22057 10.5023 8.79767 10.9017 8.29158 10.9017"></path>
                </svg>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative animate-fade-in">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
                <img src={k1RobotsPlaying} alt="K1 Robots Playing Soccer" className="relative w-full rounded-3xl shadow-2xl" />
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