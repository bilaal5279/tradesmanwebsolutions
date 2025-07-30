import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tradesman Web Solutions - Professional Websites for UK Tradespeople",
  description:
    "Professional websites for UK tradespeople. Get more quality leads with a custom website that works 24/7. Serving plumbers, electricians, builders across the UK.",
  keywords:
    "tradesman websites UK, plumber website design, electrician websites, builder web design, UK tradesman marketing, professional trade websites",
  authors: [{ name: "Tradesman Web Solutions" }],
  creator: "Tradesman Web Solutions",
  publisher: "Tradesman Web Solutions",
  robots: "index, follow",
  openGraph: {
    title: "Professional Websites for UK Tradespeople",
    description:
      "Get more quality leads with a custom website that works 24/7. Serving UK tradespeople nationwide.",
    url: "https://tradesmanwebsolutions.co.uk",
    siteName: "Tradesman Web Solutions",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Websites for UK Tradespeople",
    description:
      "Get more quality leads with a custom website that works 24/7.",
  },
  alternates: {
    canonical: "https://tradesmanwebsolutions.co.uk",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-17417144547/qi9tCNzAlvwaEOORkvFA',
                  'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-34P9NP5MJW" />
    </html>
  );
}
