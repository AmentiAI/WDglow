import type { Metadata, Viewport } from "next";
import { Fraunces, Montserrat, Outfit } from "next/font/google";
import Script from "next/script";
import { siteUrl } from "@/lib/utils";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const fraunces = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-fraunces" });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

const description =
  "WDGLOW designs, installs, maintains, and removes Christmas lights for homes and businesses in Westerly, across Rhode Island, and through Connecticut.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Christmas Light Installation in Westerly, RI | WDGLOW",
    template: "%s | WDGLOW",
  },
  description,
  applicationName: "WDGLOW",
  authors: [{ name: "WDGLOW", url: siteUrl() }],
  creator: "WDGLOW",
  category: "Christmas light installation",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "WDGLOW",
    title: "Christmas Light Installation in Westerly, Rhode Island",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Christmas Light Installation in Westerly, RI | WDGLOW",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Script id="gtag-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtm.js?id=GTM-KMJZ59XN" strategy="afterInteractive" />
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
