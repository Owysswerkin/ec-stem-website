import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, Sparkles } from 'lucide-react';
import ecStemLogo from '@/assets/ec-stem-logo.jpg';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import LanguageToggle from './LanguageToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProgrammesOpen, setIsProgrammesOpen] = useState(false);
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
    setIsProgrammesOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.admissions'), path: '/admissions' },
    { name: t('nav.whatsNew'), path: '/whats-new' },
  ];

  const programmesSubItems = [
    { name: t('nav.forPreschool'), path: '/programmes' },
    { name: t('nav.forParents'), path: '/programmes/for-parents' },
    { name: t('nav.ourLocations'), path: '/centres' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isProgrammesActive = location.pathname.startsWith('/programmes');

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+6586445667" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>+65 8644 5667</span>
            </a>
            <a href="mailto:hello@ecstem.education" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span>hello@ecstem.education</span>
            </a>
          </div>
          <div className="md:hidden ml-auto flex items-center space-x-4">
            <a href="tel:+6586445667" className="flex items-center hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
            </a>
            <a href="mailto:hello@ecstem.education" className="flex items-center hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <div className="hidden md:block">
            <span>Mon - Fri: 9:00 AM - 6:30 PM</span>
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
            <Link to="/" className="flex items-center">
              <img 
                src={ecStemLogo} 
                alt="EC STEM Logo" 
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.slice(0, 2).map((item) => (
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
              
              {/* Programmes Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
                  isProgrammesActive
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-foreground hover:text-primary'
                }`}>
                  {t('nav.programmes')}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-card border shadow-warm z-50">
                  {programmesSubItems.map((item) => (
                    <DropdownMenuItem key={item.path} asChild>
                      <Link
                        to={item.path}
                        className={`w-full cursor-pointer ${
                          isActive(item.path) ? 'text-primary font-medium' : ''
                        }`}
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {navItems.slice(2).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold transition-colors duration-200 flex items-center gap-1 ${
                    isActive(item.path)
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                  {item.path === '/whats-new' && (
                    <Sparkles className="h-4 w-4 text-[#F8B529]" />
                  )}
                </Link>
              ))}
              <LanguageToggle />
              <Button variant="hero" size="sm" asChild>
                <Link to="/contact">{t('nav.enrollNow')}</Link>
              </Button>
              <Button variant="hero" size="sm" className="bg-[#F8B529] hover:bg-[#e6a418]" asChild>
                <Link to="/learning-buddy">Learning Buddy</Link>
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
                {navItems.slice(0, 2).map((item) => (
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
                
                {/* Mobile Programmes Dropdown */}
                <div>
                  <button
                    onClick={() => setIsProgrammesOpen(!isProgrammesOpen)}
                    className={`flex items-center justify-between w-full text-base font-semibold transition-colors duration-200 py-2 ${
                      isProgrammesActive
                        ? 'text-primary border-l-4 border-primary pl-4'
                        : 'text-foreground hover:text-primary pl-4'
                    }`}
                  >
                    {t('nav.programmes')}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isProgrammesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isProgrammesOpen && (
                    <div className="pl-8 space-y-2 mt-2">
                      {programmesSubItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block text-sm py-2 ${
                            isActive(item.path)
                              ? 'text-primary font-medium'
                              : 'text-muted-foreground hover:text-primary'
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {navItems.slice(2).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-base font-semibold transition-colors duration-200 py-2 flex items-center gap-1 ${
                      isActive(item.path)
                        ? 'text-primary border-l-4 border-primary pl-4'
                        : 'text-foreground hover:text-primary pl-4'
                    }`}
                  >
                    {item.name}
                    {item.path === '/whats-new' && (
                      <Sparkles className="h-4 w-4 text-[#F8B529]" />
                    )}
                  </Link>
                ))}
                <div className="flex items-center justify-between mt-4 gap-2">
                  <LanguageToggle />
                  <Button variant="hero" size="default" asChild>
                    <Link to="/contact">{t('nav.enrollNow')}</Link>
                  </Button>
                  <Button variant="hero" size="default" className="bg-[#F8B529] hover:bg-[#e6a418]" asChild>
                    <Link to="/learning-buddy">Learning Buddy</Link>
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