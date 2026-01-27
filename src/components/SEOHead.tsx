import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PRODUCTION_DOMAIN = 'https://ecstem.education';

const SEOHead = () => {
  const location = useLocation();

  useEffect(() => {
    // Update canonical URL
    const canonicalUrl = `${PRODUCTION_DOMAIN}${location.pathname}`;
    
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    
    canonicalLink.href = canonicalUrl;
  }, [location.pathname]);

  return null;
};

export default SEOHead;
