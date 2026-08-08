import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: "#0F766E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // Replace with actual domain
  title: {
    default: "Home Portable X-Ray Service | Digital X-Ray at Home in Bhubaneswar",
    template: "%s | Home X-Ray Service"
  },
  description: "Get professional, safe, and fast digital portable X-Ray services at home. Ideal for elderly, bedridden, and post-surgery patients. Call now for same-day reports.",
  keywords: ["Home X-Ray", "Portable X-Ray Bhubaneswar", "Digital X-Ray at home", "Mobile Radiography", "Chest X-Ray home", "Orthopedic X-Ray home", "Elderly Care X-Ray", "Medical Imaging", "Diagnostic Services at home"],
  authors: [{ name: "Home X-Ray Service" }],
  creator: "Home X-Ray Service",
  publisher: "Home X-Ray Service",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/", 
  },
  openGraph: {
    title: "Home Portable X-Ray Service | Digital X-Ray at Home",
    description: "Get professional, safe, and fast digital portable X-Ray services at your doorstep. Same-day digital reports.",
    url: "/",
    siteName: "Home X-Ray Service",
    images: [
      {
        url: "/og-image.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Professional radiographer performing home X-ray",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Portable X-Ray Service | Digital X-Ray at Home",
    description: "Get professional, safe, and fast digital portable X-Ray services at your doorstep.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-site-verification-code", // Add your Google Search Console code here
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased font-sans text-dark bg-background">
        {children}
        {/* Comprehensive JSON-LD Schema for Local Medical Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalClinic", "LocalBusiness"],
              "name": "Home Portable Digital X-Ray Service",
              "description": "Professional digital portable X-Ray services delivered safely to your home.",
              "image": "https://example.com/logo.png",
              "url": "https://example.com",
              "telephone": "+91-XXXXXXXXXX",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Local Area",
                "addressLocality": "Bhubaneswar",
                "addressRegion": "Odisha",
                "postalCode": "751001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 20.2961,
                "longitude": 85.8245
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "08:00",
                "closes": "20:00"
              },
              "areaServed": [
                { "@type": "City", "name": "Bhubaneswar" },
                { "@type": "City", "name": "Cuttack" },
                { "@type": "City", "name": "Khordha" },
                { "@type": "City", "name": "Puri" }
              ],
              "availableService": [
                { "@type": "MedicalTest", "name": "Chest X-Ray at Home" },
                { "@type": "MedicalTest", "name": "Spine X-Ray at Home" },
                { "@type": "MedicalTest", "name": "Limb X-Ray at Home" },
                { "@type": "MedicalTest", "name": "Pelvis X-Ray at Home" }
              ],
              "medicalSpecialty": "Radiography"
            })
          }}
        />
      </body>
    </html>
  );
}
