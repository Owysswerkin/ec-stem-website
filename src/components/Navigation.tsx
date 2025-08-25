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
      <div className="bg-gold-gradient text-white py-2 px-4 shadow-gold-glow">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+6562345678" className="flex items-center space-x-2 hover:text-gold-light transition-all duration-300">
              <Phone className="h-4 w-4" />
              <span>+65 6234 5678</span>
            </a>
            <a href="mailto:hello@ecstem.education" className="flex items-center space-x-2 hover:text-gold-light transition-all duration-300">
              <Mail className="h-4 w-4" />
              <span>hello@ecstem.education</span>
            </a>
          </div>
          <div className="md:hidden ml-auto flex items-center space-x-4">
            <a href="tel:+6562345678" className="flex items-center hover:text-gold-light transition-all duration-300">
              <Phone className="h-4 w-4" />
            </a>
            <a href="mailto:hello@ecstem.education" className="flex items-center hover:text-gold-light transition-all duration-300">
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <div className="hidden md:block">
            <span className="text-gold-light font-medium">Mon - Fri: 8:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 border-b border-gold-muted/30 ${
        isScrolled ? 'bg-card shadow-gold' : 'bg-card/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/64b9fd11-f7bf-426a-8783-5295b1b746ee.png" 
                  alt="EC STEM Logo" 
                  className="h-20 w-auto transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gold-gradient rounded-full border-2 border-white shadow-gold-glow animate-pulse"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold transition-all duration-300 relative group ${
                    isActive(item.path)
                      ? 'text-gold-dark'
                      : 'text-foreground hover:text-gold-dark'
                  }`}
                >
                  {item.name}
                  <div className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gold-gradient transform origin-left transition-transform duration-300 ${
                    isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></div>
                </Link>
              ))}
              <LanguageToggle />
              <Button variant="hero" size="sm" className="bg-gold-gradient hover:bg-premium-gradient shadow-gold-glow hover:shadow-premium transition-all duration-300" asChild>
                <Link to="/admissions">{t('nav.enrollNow')}</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl bg-gold-muted/20 text-gold-dark hover:bg-gold-muted/40 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-gold-muted/30 shadow-gold backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-base font-semibold transition-all duration-300 py-2 ${
                      isActive(item.path)
                        ? 'text-gold-dark border-l-4 border-gold-accent pl-4 bg-gold-muted/10'
                        : 'text-foreground hover:text-gold-dark pl-4 hover:bg-gold-muted/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center justify-between mt-4">
                  <LanguageToggle />
                  <Button variant="hero" size="default" className="bg-gold-gradient hover:bg-premium-gradient shadow-gold-glow" asChild>
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