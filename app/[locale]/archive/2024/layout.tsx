import React from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Конференція 2024 - “Європейська інтеграція України: охорона здоров'я”",
  description:
    "Архів конференції “Ukraine-EU Integration: Healthcare” 2024 року, присвяченої трансформації системи охорони здоров'я України в рамках інтеграції України до Європейського Союзу (ЄС).",
  metadataBase: new URL("https://euhealth.moz.gov.ua"),
};

export default async function ArchiveLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = (await import(`../../../../messages-2024/${locale}.json`)).default;

  return <NextIntlClientProvider locale={locale} messages={messages}>{children}</NextIntlClientProvider>;
}

