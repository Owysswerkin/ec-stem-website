import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-8xl font-bold text-primary mb-4">{t('notFound.title')}</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">{t('notFound.subtitle')}</h2>
        <p className="text-muted-foreground mb-8">{t('notFound.description')}</p>
        <Button asChild>
          <Link to="/">{t('notFound.returnHome')}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
