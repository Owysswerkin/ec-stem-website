import { useTranslation } from 'react-i18next';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InstagramEmbed from '@/components/InstagramEmbed';

// Add your Instagram post URLs here
const instagramPosts = [
  'https://www.instagram.com/p/DJjSJP9SqQn/',
  'https://www.instagram.com/p/DJcFtQ3yAQx/',
  'https://www.instagram.com/p/DJZZEZ-SoZT/',
  'https://www.instagram.com/p/DJWp-aOSvhx/',
  'https://www.instagram.com/p/DJUBhdYyLFM/',
  'https://www.instagram.com/p/DJRXabTyQyQ/',
];

const WhatsNew = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              {t('whatsNewPage.title')}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {t('whatsNewPage.subtitle')}
            </p>
            <Button asChild size="lg" className="gap-2">
              <a 
                href="https://www.instagram.com/ecstemedu/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                Follow @ecstemedu
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {instagramPosts.map((url, index) => (
              <div key={index} className="w-full max-w-[540px]">
                <InstagramEmbed url={url} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsNew;
