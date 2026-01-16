import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ecStemLogoWhite from '@/assets/ec-stem-logo-white.jpg';
const Footer = () => {
  const {
    t
  } = useTranslation();
  return <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={ecStemLogoWhite} 
                alt="EC STEM Logo" 
                className="h-12 w-auto rounded"
              />
            </div>
            <p className="text-sm opacity-75 leading-relaxed mb-4">
              {t('footer.about.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/16qP9nRm1F/" className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Facebook className="h-5 w-5 text-primary-foreground" />
              </a>
              <a href="https://www.instagram.com/ecstemedu?igsh=MXhwOTZxaTlsc2RxZA==" className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.contact.title')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm opacity-75">
                  <p>CDL King's Centre #06-03</p>
                  <p>390 Havelock Road, Singapore 169662</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm opacity-75">{t('footer.contact.phone')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm opacity-75">{t('footer.contact.email')}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm opacity-75">
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 6:30 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm opacity-75 mb-4 md:mb-0">
              <p>{t('footer.copyright')}</p>
              <p>UEN202525801M</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-200">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms-conditions" className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-200">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;