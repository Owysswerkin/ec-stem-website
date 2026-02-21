import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import ecStemLogo from '@/assets/ec-stem-logo-new.png';
import { useTranslation } from 'react-i18next';

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
    { name: t('nav.ourLocations'), path: '/centres' },
    { name: t('nav.joinOurTeam'), path: '/join-our-team' },
    { name: t('nav.whatsNew'), path: '/whats-new' },
  ];

  const programmesSubItems = [
    { name: t('nav.forPreschool'), path: '/programmes' },
    { name: t('nav.forParents'), path: '/programmes/for-parents' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isProgrammesActive = location.pathname.startsWith('/programmes');

  return (
    <>
      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-teal-soft shadow-warm' : 'bg-teal-soft'
      }`}>
        <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
            {/* Left Nav Links (Desktop) */}
            <div className="hidden lg:flex items-center space-x-8 flex-1">
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
            </div>

            {/* Center Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={ecStemLogo} 
                alt="Ec stem Logo" 
                className="h-16 w-auto"
              />
            </Link>

            {/* Right Nav Links (Desktop) */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
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
          <div className="lg:hidden bg-teal-soft border-t shadow-warm">
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
                <div className="flex items-center mt-4 gap-2">
                  <LanguageToggle />
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