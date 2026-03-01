import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PRODUCTION_DOMAIN = 'https://ecstem.education';

const pageMeta: Record<string, { titleKey: string; descKey: string }> = {
  '/': { titleKey: 'seo.home.title', descKey: 'seo.home.description' },
  '/about': { titleKey: 'seo.about.title', descKey: 'seo.about.description' },
  '/programmes': { titleKey: 'seo.programmes.title', descKey: 'seo.programmes.description' },
  '/programmes/for-parents': { titleKey: 'seo.forParents.title', descKey: 'seo.forParents.description' },
  '/contact': { titleKey: 'seo.contact.title', descKey: 'seo.contact.description' },
  '/centres': { titleKey: 'seo.centres.title', descKey: 'seo.centres.description' },
  '/trial-class': { titleKey: 'seo.trialClass.title', descKey: 'seo.trialClass.description' },
  '/our-methodology': { titleKey: 'seo.methodology.title', descKey: 'seo.methodology.description' },
  '/learning-buddy': { titleKey: 'seo.learningBuddy.title', descKey: 'seo.learningBuddy.description' },
  '/whats-new': { titleKey: 'seo.whatsNew.title', descKey: 'seo.whatsNew.description' },
  '/join-our-team': { titleKey: 'seo.joinTeam.title', descKey: 'seo.joinTeam.description' },
};

const SEOHead = () => {
  const location = useLocation();
  const { t } = useTranslation();

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

    // Update page title and meta description
    const meta = pageMeta[location.pathname];
    if (meta) {
      document.title = t(meta.titleKey);
      let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = t(meta.descKey);
    } else {
      document.title = 'Ec stem | Early Childhood STEM Education in Singapore';
    }
  }, [location.pathname, t]);

  return null;
};

export default SEOHead;
