import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LayoutGrid, List, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import holidayTrialBanner from '@/assets/holiday-stem-trial-banner.jpg';

// Type definitions for content
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tag: 'article' | 'event';
  image?: string;
  slug: string;
  link?: string;
  linkText?: string;
}

type ViewMode = 'card' | 'list';
type FilterTag = 'all' | 'article' | 'event';

const WhatsNew = () => {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState<ViewMode>('card');
  const [activeFilter, setActiveFilter] = useState<FilterTag>('all');

  const posts: Post[] = [
    {
      id: '1',
      title: 'Holiday STEM Trial Class',
      excerpt: `🎄 Join us for our very first Holiday STEM Trial Class on Saturday, 27th December 2025!

We're excited to partner with Edventure Learning to bring your little ones an unforgettable hands-on STEM experience this holiday season.

📅 Schedule:
• N2 Early Explorers (4 years old): 10:00am - 11:00am
• K1 Creative Creators (5 years old): 11:15am - 12:15pm
• K2 Super Solvers (6 years old): 12:30pm - 1:30pm

Spaces are limited – register now to secure your spot!`,
      date: 'Dec 5, 2025',
      tag: 'event',
      image: holidayTrialBanner,
      slug: 'holiday-stem-trial-class',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfFcEDVyW_wfqg9cZM8WOZxNo3Sw8nmS2ygCG7V3NpVC4Q9uQ/viewform?usp=header',
      linkText: 'Find Out More',
    },
  ];

  const filteredPosts = posts.filter(post => 
    activeFilter === 'all' || post.tag === activeFilter
  );

  const filterButtons: { key: FilterTag; label: string }[] = [
    { key: 'all', label: t('whatsNewPage.filters.all') },
    { key: 'article', label: t('whatsNewPage.filters.articles') },
    { key: 'event', label: t('whatsNewPage.filters.events') },
  ];

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
            <p className="text-lg text-muted-foreground">
              {t('whatsNewPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filter & View Controls */}
      <section className="py-8 border-b bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2">
              {filterButtons.map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeFilter === filter.key ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter(filter.key)}
                  className="rounded-full"
                >
                  {filter.label}
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              <Button
                variant={viewMode === 'card' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('card')}
                className="rounded-md"
                aria-label={t('whatsNewPage.views.card')}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-md"
                aria-label={t('whatsNewPage.views.list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            viewMode === 'card' ? (
              /* Card View */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-warm transition-shadow duration-300">
                    {post.image && (
                      <div className="aspect-video bg-muted">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant={post.tag === 'article' ? 'default' : 'secondary'}>
                          {post.tag === 'article' ? t('whatsNewPage.filters.articles') : t('whatsNewPage.filters.events')}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-6 whitespace-pre-line">
                        {post.excerpt}
                      </p>
                      {post.link ? (
                        <a 
                          href={post.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          {post.linkText || t('whatsNewPage.readMore')} →
                        </a>
                      ) : (
                        <Button variant="link" className="p-0 h-auto text-primary">
                          {t('whatsNewPage.readMore')} →
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-warm transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row">
                      {post.image && (
                        <div className="sm:w-48 sm:h-32 flex-shrink-0">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <CardContent className="p-6 flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={post.tag === 'article' ? 'default' : 'secondary'}>
                            {post.tag === 'article' ? t('whatsNewPage.filters.articles') : t('whatsNewPage.filters.events')}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{post.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-3 whitespace-pre-line">
                          {post.excerpt}
                        </p>
                        {post.link ? (
                          <a 
                            href={post.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium text-sm"
                          >
                            {post.linkText || t('whatsNewPage.readMore')} →
                          </a>
                        ) : (
                          <Button variant="link" className="p-0 h-auto text-primary">
                            {t('whatsNewPage.readMore')} →
                          </Button>
                        )}
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            )
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Newspaper className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                {t('whatsNewPage.emptyState.title')}
              </h2>
              <p className="text-muted-foreground max-w-md">
                {t('whatsNewPage.emptyState.description')}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default WhatsNew;
