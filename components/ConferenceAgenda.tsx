"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useCallback } from "react";

const ConferenceAgenda: React.FC = React.memo(() => {
  const locale = useLocale();
  const t = useTranslations("agenda");

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = locale === "ua" ? "/files/agenda_ua.pdf" : "/files/agenda_eng.pdf";
    link.download = locale === "ua" ? "agenda_ua.pdf" : "agenda_eng.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [locale]);

  return (
    <section id="program">
      <div className="container mx-auto p-5 text-black">
        <div className="flex flex-col space-y-8">
          <h1
            onClick={handleDownload}
            className="bg-[#0771b8] hover:bg-[#165077] py-7 text-center max-sm:text-2xl max-md:text-3xl text-[4vw] 2xl:text-6xl font-evolventa font-bold text-white uppercase max-sm:py-5 pr-10 lg:pr-20 pl-8 max-md:px-5 rounded-[40px] tracking-tighter leading-tight md:mt-10 max-sm:px-2 px-10 cursor-pointer">
            {t("title")}
          </h1>
        </div>
      </div>
    </section>
  );
});

ConferenceAgenda.displayName = "ConferenceAgenda";

export default ConferenceAgenda;
