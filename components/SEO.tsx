import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

export default function SEO({
  title = 'Suko Paint - Premium Quality Paint Made in Nigeria',
  description = 'Suko Paint is proudly made in Nigeria to deliver durable, vibrant, and affordable paint solutions. Choose from Emulsion, Satin, Matt, Gloss, and Silk paints. Free color consultation and fast delivery.',
  keywords = 'paint nigeria, suko paint, quality paint, emulsion paint, satin paint, matt paint, gloss paint, silk paint, interior paint, exterior paint, wall paint, nigerian paint, affordable paint, durable paint, vibrant colors, paint Lagos, paint Abuja',
  ogImage = '/images/hero-image.jpg',
  ogType = 'website',
  canonical,
  noindex = false,
}: SEOProps) {
  const siteUrl = 'https://sukopaint.com';
  const fullTitle = title.includes('Suko Paint') ? title : `${title} | Suko Paint`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Suko Paint" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Suko Paint" />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#001F5B" />
      <meta name="msapplication-TileColor" content="#001F5B" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Suko Paint" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Geo Tags */}
      <meta name="geo.region" content="NG" />
      <meta name="geo.placename" content="Lagos, Nigeria" />
    </Head>
  );
}

// Structured Data Component
export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Suko Paint',
    description: 'Premium quality paint made in Nigeria',
    url: 'https://sukopaint.com',
    logo: 'https://sukopaint.com/logo.png',
    image: 'https://sukopaint.com/images/hero-image.jpg',
    telephone: '+234-808-882-8606',
    email: 'info@sukopaint.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Igando',
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
    sameAs: [
      'https://facebook.com/sukopaint',
      'https://instagram.com/sukopaint',
      'https://twitter.com/sukopaint',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+234-808-882-8606',
      contactType: 'Customer Service',
      areaServed: 'NG',
      availableLanguage: 'English',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'Suko Paint',
    image: 'https://sukopaint.com/images/hero-image.jpg',
    '@id': 'https://sukopaint.com',
    url: 'https://sukopaint.com',
    telephone: '+234-808-882-8606',
    priceRange: '₦₦',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Igando',
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.5244,
      longitude: 3.3792,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  };

  const productsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Product',
        position: 1,
        name: 'Suko Emulsion Paint',
        description: 'Premium quality emulsion for walls and ceilings',
        brand: { '@type': 'Brand', name: 'Suko Paint' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'NGN',
          price: '10000',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Product',
        position: 2,
        name: 'Suko Satin Paint',
        description: 'Soft sheen finish for high-traffic areas',
        brand: { '@type': 'Brand', name: 'Suko Paint' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'NGN',
          price: '12500',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Product',
        position: 3,
        name: 'Suko Matt Paint',
        description: 'Non-reflective finish for modern look',
        brand: { '@type': 'Brand', name: 'Suko Paint' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'NGN',
          price: '9000',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Product',
        position: 4,
        name: 'Suko Gloss Paint',
        description: 'High-gloss finish for doors and windows',
        brand: { '@type': 'Brand', name: 'Suko Paint' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'NGN',
          price: '15000',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Product',
        position: 5,
        name: 'Suko Silk Paint',
        description: 'Luxurious silk finish for elegant interiors',
        brand: { '@type': 'Brand', name: 'Suko Paint' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'NGN',
          price: '13500',
          availability: 'https://schema.org/InStock',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
    </>
  );
}
