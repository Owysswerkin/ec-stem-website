import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PRODUCTION_DOMAIN = 'https://ecstem.education';
const OG_IMAGE = `${PRODUCTION_DOMAIN}/lovable-uploads/0a1fa423-2293-4bf9-ac2b-c3691035e1b7.png`;

const pageMeta: Record<string, { titleKey: string; descKey: string; noindex?: boolean }> = {
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
  '/privacy-policy': { titleKey: 'seo.privacyPolicy.title', descKey: 'seo.privacyPolicy.description', noindex: true },
  '/cookies-policy': { titleKey: 'seo.cookiesPolicy.title', descKey: 'seo.cookiesPolicy.description', noindex: true },
  '/terms-conditions': { titleKey: 'seo.termsConditions.title', descKey: 'seo.termsConditions.description', noindex: true },
  '/policies/access-control': { titleKey: 'seo.accessControl.title', descKey: 'seo.accessControl.description', noindex: true },
};

function setMetaTag(property: string, content: string, isName = false) {
  const selector = isName ? `meta[name="${property}"]` : `meta[property="${property}"]`;
  let el = document.querySelector(selector) as HTMLMetaElement;
  if (!el) {
    el = document.createElement('meta');
    if (isName) el.name = property;
    else el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setOrRemoveMetaTag(name: string, content: string | null) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (content) {
    if (!el) {
      el = document.createElement('meta');
      el.name = name;
      document.head.appendChild(el);
    }
    el.content = content;
  } else if (el) {
    el.remove();
  }
}

function setLinkTag(rel: string, href: string, attrs?: Record<string, string>) {
  const attrSelector = attrs ? Object.entries(attrs).map(([k, v]) => `[${k}="${v}"]`).join('') : '';
  const selector = `link[rel="${rel}"]${attrSelector}`;
  let el = document.querySelector(selector) as HTMLLinkElement;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    if (attrs) Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.href = href;
}

const SEOHead = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const canonicalUrl = `${PRODUCTION_DOMAIN}${location.pathname}`;
    const meta = pageMeta[location.pathname];
    const title = meta ? t(meta.titleKey) : 'Ec stem | Early Childhood STEM Education in Singapore';
    const description = meta ? t(meta.descKey) : 'We bring STEM to life for young children through playful, hands-on learning that sparks curiosity, builds confidence, and inspires a lifelong love of discovery.';

    // Canonical
    setLinkTag('canonical', canonicalUrl);

    // Title & meta description
    document.title = title;
    setMetaTag('description', description, true);

    // OG tags
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:url', canonicalUrl);
    setMetaTag('og:image', OG_IMAGE);

    // Twitter tags
    setMetaTag('twitter:title', title, true);
    setMetaTag('twitter:description', description, true);
    setMetaTag('twitter:image', OG_IMAGE, true);

    // Robots noindex for legal pages
    setOrRemoveMetaTag('robots', meta?.noindex ? 'noindex, nofollow' : null);

    // hreflang alternate links
    setLinkTag('alternate', `${PRODUCTION_DOMAIN}${location.pathname}`, { hreflang: 'en' });
    setLinkTag('alternate', `${PRODUCTION_DOMAIN}${location.pathname}`, { hreflang: 'zh' });
    setLinkTag('alternate', `${PRODUCTION_DOMAIN}${location.pathname}`, { hreflang: 'x-default' });

    // Update html lang attribute
    document.documentElement.lang = i18n.language === 'zh' ? 'zh' : 'en';
  }, [location.pathname, t, i18n.language]);

  return null;
};

export default SEOHead;
