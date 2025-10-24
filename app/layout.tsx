import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GarbhaGudi IVF Centre - Best Fertility Hospital in Bangalore",
  description:
    "GarbhaGudi IVF Centre is the best fertility hospital in Bangalore offering affordable IVF treatment, fertility consultation, and infertility treatment with high success rates.",
  keywords:
    "IVF treatment Bangalore, fertility clinic, infertility treatment, best IVF centre",
  openGraph: {
    title: "GarbhaGudi IVF Centre - Best Fertility Hospital in Bangalore",
    description:
      "GarbhaGudi IVF Centre is the best fertility hospital in Bangalore offering affordable IVF treatment with high success rates.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "GarbhaGudi IVF Centre - Best Fertility Hospital in Bangalore",
    description:
      "Best fertility hospital in Bangalore offering affordable IVF treatment.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-white dark:bg-black`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NT9BZ69');`,
          }}
        />

        {children}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NT9BZ69"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Analytics />
      </body>
    </html>
  );
}
