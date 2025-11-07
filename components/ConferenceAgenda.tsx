"use client";

import { useTranslations } from "next-intl";
import React from "react";

const ConferenceAgenda: React.FC = React.memo(() => {
  const t = useTranslations("agenda");

  return (
    <section id="program">
      <div className="container mx-auto p-5 text-black">
        <div className="flex flex-col space-y-8">
          <h1 className="bg-[#0771b8] py-7 text-center max-sm:text-2xl max-md:text-3xl text-[4vw] 2xl:text-6xl font-evolventa font-bold text-white uppercase max-sm:py-5 pr-10 lg:pr-20 pl-8 max-md:px-5 rounded-[40px] tracking-tighter leading-tight md:mt-10 max-sm:px-2 px-10">
            {t("title")}
          </h1>
        </div>
      </div>
    </section>
  );
});

ConferenceAgenda.displayName = "ConferenceAgenda";

export default ConferenceAgenda;
