import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";

export const metadata: Metadata = {
  title: "Suko Paint - Premium Paint Made in Nigeria",
  description: "Suko Paint is proudly made in Nigeria to deliver durable, vibrant, and affordable paint solutions. Paint it right. Paint it Suko.",
  keywords: "paint, nigeria, suko paint, durable paint, vibrant colors, affordable paint",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{
        fontFamily: "'Poppins', sans-serif",
        '--font-sen': "'Sen', sans-serif",
        '--font-poppins': "'Poppins', sans-serif"
      } as React.CSSProperties}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
