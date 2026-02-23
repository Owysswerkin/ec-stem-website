import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LayoutGrid, List, Newspaper, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import trialClassJan2026 from '@/assets/trial-class-jan-2026.jpg';

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
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);

  const posts: Post[] = [
    {
      id: '1',
      title: 'FREE STEM Trial Class',
      excerpt: `🚀 Calling all curious kids! Join our FREE STEM Trial Class at LC Education Singapore!

Watch your little ones build, create, and discover through hands-on play with our age-appropriate programmes.

📅 Schedule:
• N2 Early Explorers (4 years old): 9:00am - 10:30am
• K1 Curious Creators (5 years old): 10:45am - 12:15pm
• K2 Super Solvers (6 years old): 12:30pm - 2:00pm

📍 155B Thomson Rd, Goldhill Centre, Singapore 307610

Limited slots available – sign up now!`,
      date: 'Jan 27, 2026',
      tag: 'event',
      image: trialClassJan2026,
      slug: 'free-stem-trial-class-jan-2026',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfFcEDVyW_wfqg9cZM8WOZxNo3Sw8nmS2ygCG7V3NpVC4Q9uQ/viewform?usp=header',
      linkText: 'Register here',
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

  const toggleExpand = (postId: string) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

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
                {filteredPosts.map((post) => {
                  const isExpanded = expandedPostId === post.id;
                  return (
                    <Card 
                      key={post.id} 
                      className="overflow-hidden hover:shadow-warm transition-all duration-300 cursor-pointer"
                      onClick={() => toggleExpand(post.id)}
                    >
                      {post.image && (
                        <div className="aspect-video bg-muted">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover object-top"
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
                        <p className={`text-muted-foreground mb-4 whitespace-pre-line transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                          {post.excerpt}
                        </p>
                        
                        {isExpanded ? (
                          <div className="flex flex-col gap-3">
                            {post.link && (
                              <Button
                                asChild
                                className="w-full"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <a 
                                  href={post.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                >
                                  {post.linkText || t('whatsNewPage.readMore')} →
                                </a>
                              </Button>
                            )}
                            <button 
                              className="text-muted-foreground hover:text-foreground text-sm flex items-center justify-center gap-1 transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleExpand(post.id);
                              }}
                            >
                              Show less <ChevronUp className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <button className="text-primary hover:underline font-medium flex items-center gap-1">
                            Find Out More <ChevronDown className="h-4 w-4" />
                          </button>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              /* List View */
              <div className="space-y-4">
                {filteredPosts.map((post) => {
                  const isExpanded = expandedPostId === post.id;
                  return (
                    <Card 
                      key={post.id} 
                      className="overflow-hidden hover:shadow-warm transition-all duration-300 cursor-pointer"
                      onClick={() => toggleExpand(post.id)}
                    >
                      <div className="flex flex-col sm:flex-row">
                        {post.image && (
                          <div className="sm:w-48 sm:h-32 flex-shrink-0">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover object-top"
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
                          <p className={`text-muted-foreground text-sm mb-3 whitespace-pre-line transition-all duration-300 ${isExpanded ? '' : 'line-clamp-2'}`}>
                            {post.excerpt}
                          </p>
                          
                          {isExpanded ? (
                            <div className="flex flex-wrap items-center gap-3">
                              {post.link && (
                                <Button
                                  asChild
                                  size="sm"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <a 
                                    href={post.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                  >
                                    {post.linkText || t('whatsNewPage.readMore')} →
                                  </a>
                                </Button>
                              )}
                              <button 
                                className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1 transition-colors"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleExpand(post.id);
                                }}
                              >
                                Show less <ChevronUp className="h-4 w-4" />
                              </button>
                            </div>
                          ) : (
                            <button className="text-primary hover:underline font-medium text-sm flex items-center gap-1">
                              Find Out More <ChevronDown className="h-4 w-4" />
                            </button>
                          )}
                        </CardContent>
                      </div>
                    </Card>
                  );
                })}
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
