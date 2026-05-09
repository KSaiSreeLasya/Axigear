export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
}

export const updateMetaTags = (metadata: SEOMetadata) => {
  // Update title
  document.title = metadata.title;
  
  // Update meta description
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (!descriptionMeta) {
    descriptionMeta = document.createElement('meta');
    descriptionMeta.setAttribute('name', 'description');
    document.head.appendChild(descriptionMeta);
  }
  descriptionMeta.setAttribute('content', metadata.description);

  // Update meta keywords
  if (metadata.keywords) {
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', metadata.keywords);
  }

  // Update OG title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', metadata.ogTitle || metadata.title);

  // Update OG description
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (!ogDescription) {
    ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescription);
  }
  ogDescription.setAttribute('content', metadata.ogDescription || metadata.description);

  // Update canonical URL
  if (metadata.canonical) {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', metadata.canonical);
  }
};

export const getSchemaMarkup = (data: {
  name: string;
  description: string;
  url: string;
  logo?: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  phone?: string;
  email?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.name,
    description: data.description,
    url: data.url,
    logo: data.logo,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address?.streetAddress || "",
      addressLocality: data.address?.addressLocality || "",
      addressRegion: data.address?.addressRegion || "",
      postalCode: data.address?.postalCode || "",
      addressCountry: data.address?.addressCountry || "IN"
    },
    telephone: data.phone,
    email: data.email
  };
};
