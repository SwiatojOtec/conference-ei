import React from "react";
import type { Metadata } from "next";
import { Inter, Hanken_Grotesk, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { monLogoEng, monLogoUa } from "@/public/icons";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const monserat = Montserrat({ subsets: ["latin"], variable: "--font-monserat" });
const evolventa = localFont({
  src: [
    { path: "../fonts/Evolventa-Regular-BF63c0b2a7e0a35.woff", weight: "400" },
    { path: "../fonts/Evolventa-Bold-BF63c0b2a7a2aaa.woff", weight: "700" },
  ],
  variable: "--font-evolventa",
});

export const metadata: Metadata = {
  title: "Конференція “Європейська інтеграція України: охорона здоров’я”",
  description:
    "Конференція “Ukraine-EU Integration: Healthcare” присвячена трансформації системи охорони здоров'я України в рамках інтеграції України до Європейського Союзу (ЄС).",
  applicationName: "Конференція “Європейська інтеграція України: охорона здоров’я”",
  keywords: [
    "European integration",
    "Ukraine healthcare",
    "Medical conference",
    "European Union",
    "Healthcare reform",
    "Medical innovation",
    "Ukraine-EU relations",
    "Healthcare policy",
    "Medical research",
    "European healthcare standards",
    "Європейська інтеграція",
    "Охорона здоров'я в Україні",
    "Медична конференція",
    "Європейський Союз",
    "Реформа охорони здоров'я",
    "Медичні інновації",
    "Відносини Україна-ЄС",
    "Політика у сфері охорони здоров'я",
    "Медичні дослідження",
    "Європейські стандарти охорони здоров'я",
  ],
  metadataBase: new URL("https://euhealth.moz.gov.ua"),
  openGraph: {
    type: "website",
    url: "https://euhealth.moz.gov.ua",
    title: "Конференція “Європейська інтеграція України: охорона здоров’я”",
    description:
      "Конференція “Ukraine-EU Integration: Healthcare” присвячена трансформації системи охорони здоров'я України в рамках інтеграції України до Європейського Союзу (ЄС).",
    siteName: "Ukraine-EU Integration: Healthcare",
    images: [
      {
        url: monLogoUa.src,
      },
      {
        url: monLogoEng.src,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Ukraine-EU:Healthcare",
    title: "Конференція “Європейська інтеграція України: охорона здоров’я”",
    description:
      "Конференція “Ukraine-EU Integration: Healthcare” присвячена трансформації системи охорони здоров'я України в рамках інтеграції України до Європейського Союзу (ЄС).",
    images: [
      {
        url: monLogoUa.src,
      },
      {
        url: monLogoEng.src,
      },
    ],
  },
  robots: "index, follow",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} className="focus-within:scroll-smooth">
      <body
        className={`${inter.variable} ${evolventa.variable} ${grotesk.variable} ${monserat.variable}`}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
