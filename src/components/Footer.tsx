import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl">
                ES
              </div>
              <div>
                <h3 className="text-xl font-bold">EC STEM</h3>
                <p className="text-sm opacity-75">Early Childhood STEM</p>
              </div>
            </div>
            <p className="text-sm opacity-75 leading-relaxed mb-4">
              We bring science, technology, engineering, and math to life for young children through playful, hands-on learning that sparks wonder and builds confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Facebook className="h-5 w-5 text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Youtube className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Programmes', path: '/programmes' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm opacity-75">
                  <p>101A UPPER CROSS STREET, #09-11</p>
                  <p>PEOPLE'S PARK CENTRE, Singapore 058358</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm opacity-75">+65 6234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm opacity-75">hello@ecstem.education</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm opacity-75">
                  <p>Monday - Friday</p>
                  <p>7:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-sm opacity-75 mb-4">
              Subscribe to our newsletter for updates on events, programs, and educational tips.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-card text-card-foreground border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-xl font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm opacity-75 mb-4 md:mb-0">
              <p>© 2025 EC STEM PTE. LTD. All rights reserved.</p>
              <p>UEN202525801M</p>
            </div>
            <div className="flex space-x-6">
              <Link 
                to="/privacy-policy" 
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;