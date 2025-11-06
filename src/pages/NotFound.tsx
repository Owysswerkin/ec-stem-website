import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Users, BookOpen, Handshake, Mail, FileText, Cookie } from "lucide-react";

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const mainPages = [
    {
      icon: Home,
      title: t('nav.home'),
      description: t('notFound.pages.home'),
      path: '/',
    },
    {
      icon: Users,
      title: t('nav.about'),
      description: t('notFound.pages.about'),
      path: '/about',
    },
    {
      icon: BookOpen,
      title: t('nav.programmes'),
      description: t('notFound.pages.programmes'),
      path: '/programmes',
    },
    {
      icon: Handshake,
      title: t('nav.admissions'),
      description: t('notFound.pages.partnership'),
      path: '/admissions',
    },
    {
      icon: Mail,
      title: t('nav.contact'),
      description: t('notFound.pages.contact'),
      path: '/contact',
    },
  ];

  const secondaryLinks = [
    {
      icon: FileText,
      title: t('footer.privacy'),
      path: '/privacy-policy',
    },
    {
      icon: Cookie,
      title: t('notFound.pages.cookies'),
      path: '/cookies-policy',
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('notFound.header')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('notFound.subtitle')}
          </p>
        </div>

        {/* Main Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mainPages.map((page) => {
            const Icon = page.icon;
            return (
              <Link key={page.path} to={page.path} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{page.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {page.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Secondary Links */}
        <div className="border-t pt-8">
          <p className="text-sm text-muted-foreground text-center mb-4">
            {t('notFound.additionalLinks')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {secondaryLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
