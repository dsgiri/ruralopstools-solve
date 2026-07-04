import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  keywords?: string;
}

export function SEO({ title, description, url, keywords }: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    const setMeta = (name: string, content: string, asProperty = false) => {
      let el = document.querySelector(`meta[${asProperty ? 'property' : 'name'}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(asProperty ? 'property' : 'name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('author', 'Rural Ops Tools');
    if (keywords) {
      setMeta('keywords', keywords);
    }
    setMeta('robots', 'index, follow');

    // Social Media tags
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    const fullUrl = `https://solve.ruralopstools.com${url || window.location.pathname}`;
    setMeta('og:url', fullUrl, true);
    
    let canonical = document.querySelector(`link[rel="canonical"]`);
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // JSON-LD
    let script = document.querySelector('#json-ld');
    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": fullUrl,
      "publisher": {
        "@type": "Organization",
        "name": "Rural Ops Tools"
      }
    });

  }, [title, description, url, keywords]);

  return null;
}
