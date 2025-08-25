import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gold-dark/20 text-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-gradient opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-accent/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center shadow-gold-glow">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-gold-light to-champagne bg-clip-text text-transparent">EC STEM Education</h3>
                <p className="text-gold-light text-sm font-medium">Excellence in Education</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              {t('footer.about.description')}
            </p>
            <div className="w-full h-0.5 bg-gold-gradient mb-6"></div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gold-gradient rounded-xl flex items-center justify-center hover:bg-premium-gradient transition-all duration-300 shadow-gold-glow">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold-gradient rounded-xl flex items-center justify-center hover:bg-premium-gradient transition-all duration-300 shadow-gold-glow">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold-gradient rounded-xl flex items-center justify-center hover:bg-premium-gradient transition-all duration-300 shadow-gold-glow">
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-light">{t('footer.contact.title')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-accent mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>CDL King's Centre #06-03</p>
                  <p>390 Havelock Road, Singapore 169662</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-accent flex-shrink-0" />
                <span className="text-sm text-gray-300 hover:text-gold-light transition-colors">{t('footer.contact.phone')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-accent flex-shrink-0" />
                <span className="text-sm text-gray-300 hover:text-gold-light transition-colors">{t('footer.contact.email')}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-gold-accent mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-gold-light">8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-muted/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>{t('footer.copyright')}</p>
              <p className="text-gold-light font-medium">UEN202525801M</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-gold-light transition-all duration-300 relative group">
                {t('footer.privacy')}
                <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-gold-light transition-all duration-300 relative group">
                {t('footer.terms')}
                <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;