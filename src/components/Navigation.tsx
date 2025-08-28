import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import LanguageToggle from './LanguageToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.programmes'), path: '/programmes' },
    { name: t('nav.admissions'), path: '/admissions' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+6562345678" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>+65 6234 5678</span>
            </a>
            <a href="mailto:hello@ecstem.education" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span>hello@ecstem.education</span>
            </a>
          </div>
          <div className="md:hidden ml-auto flex items-center space-x-4">
            <a href="tel:+6562345678" className="flex items-center hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
            </a>
            <a href="mailto:hello@ecstem.education" className="flex items-center hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <div className="hidden md:block">
            <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card shadow-warm' : 'bg-card/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/55f281bc-95bf-4adb-9db1-58a4f98dd2f4.png" 
                alt="STEM Puzzle Logo" 
                className="h-16 w-auto"
              />
              <img 
                src="/lovable-uploads/64b9fd11-f7bf-426a-8783-5295b1b746ee.png" 
                alt="Ec stem Logo" 
                className="h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <LanguageToggle />
              <Button variant="hero" size="sm" asChild>
                <Link to="/admissions">{t('nav.enrollNow')}</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl bg-muted text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t shadow-warm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-base font-semibold transition-colors duration-200 py-2 ${
                      isActive(item.path)
                        ? 'text-primary border-l-4 border-primary pl-4'
                        : 'text-foreground hover:text-primary pl-4'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center justify-between mt-4">
                  <LanguageToggle />
                  <Button variant="hero" size="default" asChild>
                    <Link to="/admissions">{t('nav.enrollNow')}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;