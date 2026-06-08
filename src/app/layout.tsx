import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'JoliePie - Artisanal Pies Baked with Love',
  description: 'Discover handcrafted pies made with fresh, quality ingredients. JoliePie offers a delicious selection of classic and custom pies for every occasion. Taste the difference!',
  openGraph: {
    "title": "JoliePie - Artisanal Pies Baked with Love",
    "description": "Discover handcrafted pies made with fresh, quality ingredients. JoliePie offers a delicious selection of classic and custom pies for every occasion. Taste the difference!",
    "url": "https://www.joliepie.com",
    "siteName": "JoliePie",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/high-angle-fruit-tart-plate_23-2148519067.jpg",
        "alt": "Delicious freshly baked berry pie"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "JoliePie - Artisanal Pies Baked with Love",
    "description": "Discover handcrafted pies made with fresh, quality ingredients. JoliePie offers a delicious selection of classic and custom pies for every occasion. Taste the difference!",
    "images": [
      "http://img.b2bpic.net/free-photo/high-angle-fruit-tart-plate_23-2148519067.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
