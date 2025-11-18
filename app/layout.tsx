import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://sukopaint.com'),
  title: {
    default: 'Suko Paint - Premium Quality Paint Made in Nigeria',
    template: '%s | Suko Paint',
  },
  description: 'Suko Paint is proudly made in Nigeria to deliver durable, vibrant, and affordable paint solutions. Discover emulsion, satin, matt, gloss, and silk paint types for homes and businesses.',
  keywords: [
    'paint Nigeria',
    'Suko Paint',
    'Nigerian paint company',
    'emulsion paint',
    'satin paint',
    'matt paint',
    'gloss paint',
    'silk paint',
    'interior paint Lagos',
    'exterior paint Nigeria',
    'durable paint',
    'affordable paint Nigeria',
    'paint calculator',
    'paint delivery Lagos',
  ],
  authors: [{ name: 'Suko Paint' }],
  creator: 'Suko Paint',
  publisher: 'Suko Paint',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://sukopaint.com',
    siteName: 'Suko Paint',
    title: 'Suko Paint - Premium Quality Paint Made in Nigeria',
    description: 'Suko Paint is proudly made in Nigeria to deliver durable, vibrant, and affordable paint solutions. Paint it right. Paint it Suko.',
    images: [
      {
        url: '/images/suko-paint-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Suko Paint - Premium Quality Paint',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suko Paint - Premium Quality Paint Made in Nigeria',
    description: 'Durable, vibrant, and affordable paint solutions made in Nigeria. Paint it right. Paint it Suko.',
    images: ['/images/suko-paint-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // other: 'your-other-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Suko Paint',
    url: 'https://sukopaint.com',
    logo: 'https://sukopaint.com/images/suko-logo.png',
    description: 'Premium quality paint made in Nigeria. Durable, vibrant, and affordable paint solutions.',
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
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'Suko Paint',
    image: 'https://sukopaint.com/images/suko-logo.png',
    '@id': 'https://sukopaint.com',
    url: 'https://sukopaint.com',
    telephone: '+234-808-882-8606',
    priceRange: '₦₦',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Igando',
      addressLocality: 'Lagos',
      addressRegion: 'Lagos State',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.5244,
      longitude: 3.3792,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
  };

  const productsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Product',
        name: 'Suko Emulsion Paint',
        description: 'Durable water-based paint perfect for interior walls and ceilings',
        brand: 'Suko Paint',
        offers: {
          '@type': 'Offer',
          price: '2500',
          priceCurrency: 'NGN',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Product',
        name: 'Suko Satin Paint',
        description: 'Premium satin finish paint with smooth coverage',
        brand: 'Suko Paint',
        offers: {
          '@type': 'Offer',
          price: '3000',
          priceCurrency: 'NGN',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Product',
        name: 'Suko Matt Paint',
        description: 'Non-reflective matt finish for elegant interiors',
        brand: 'Suko Paint',
        offers: {
          '@type': 'Offer',
          price: '2200',
          priceCurrency: 'NGN',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Product',
        name: 'Suko Gloss Paint',
        description: 'High-gloss finish for doors, windows, and metal surfaces',
        brand: 'Suko Paint',
        offers: {
          '@type': 'Offer',
          price: '3500',
          priceCurrency: 'NGN',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Product',
        name: 'Suko Silk Paint',
        description: 'Luxurious silk finish with superior durability',
        brand: 'Suko Paint',
        offers: {
          '@type': 'Offer',
          price: '3200',
          priceCurrency: 'NGN',
          availability: 'https://schema.org/InStock',
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#001F5B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Suko Paint" />
      </head>
      <body className="antialiased" style={{
        fontFamily: "'Poppins', sans-serif",
        '--font-sen': "'Sen', sans-serif",
        '--font-poppins': "'Poppins', sans-serif"
      } as React.CSSProperties}>
        {/* Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="products-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
        />

        <ThemeProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
