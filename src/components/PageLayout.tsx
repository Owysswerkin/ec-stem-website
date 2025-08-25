import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default PageLayout;