"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { youtube } from "@/public/icons/index";

const HeroSection: React.FC = () => {
  const t = useTranslations("hero");

  const translations = useMemo(
    () => ({
      title: t("title"),
      subtitle: t("subtitle"),
      streamingTime: t("streaming_time"),
      streamingDate: t("streaming_date"),
      actionBtn: t("action_btn"),
      eventLocation: t("event_location"),
      hotelRecommendation: t("hotel_recommendation"),
    }),
    [t],
  );

  return (
    <section>
      <div className="max-w-[1800px] mx-auto p-5 font-evolventa">
        <div className="relative z-0 flex flex-col justify-start max-h-fit rounded-[40px] max-sm:p-5  px-20 py-10 2xl:px-40 2xl:py-20 w-full max-md:max-w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover -z-10"
            preload="none">
            <source src="/video/hero-radnyk.mov" type="video/mp4" />
          </video>
          <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight uppercase text-white max-md:text-4xl max-sm:text-3xl text-center">
            {translations.title}
          </h1>
          <h2 className="text-5xl max-sm:text-3xl max-md:text-4xl max-[400px]:text-xl xl:text-6xl 2xl:text-7xl font-bold leading-tight uppercase text-white text-center mt-4">
            {translations.subtitle}
          </h2>
          <div className="flex justify-center items-center max-[424px]:flex-col max-[424px]:space-y-3 gap-3 max-sm:mt-10 mt-16">
            <div className="bg-transparent rounded-[40px] max-sm:text-base text-2xl max-sm:px-3 max-sm:py-2 px-5 py-4 text-white border-2 border-white border-solid text-nowrap font-monserat cursor-default">
              {translations.streamingTime}
            </div>
            <div className="bg-white rounded-[40px] text-black max-sm:text-base text-2xl max-sm:px-3 max-sm:py-2 px-5 py-4 text-nowrap font-monserat cursor-default">
              {translations.streamingDate}
            </div>
          </div>
          <div className="flex justify-center items-center max-sm:mt-10 mt-16">
            <Link href="https://docs.google.com/forms/d/1-fCkezUFcbg_uGj0PpfxsPwizHbwse2VrAREUC5WnHY/edit" target="_blank">
              <button className="max-[420px]:px-7 max-[420px]:py-4 px-14 py-6 bg-[#1B27DB] text-white rounded-[720px] border-none max-sm:text-base text-2xl text-nowrap hover:bg-white hover:text-black transition-all duration-300 ease-in-out font-monserat">
                {translations.actionBtn}
              </button>
            </Link>
          </div>
          <p className="mt-10 max-sm:text-sm text-lg text-center font-light tracking-normal leading-tight text-white text-opacity-50 max-md:max-w-full font-monserat">
            {translations.eventLocation}
          </p>
          <p className="mt-3 max-sm:text-xs text-base text-center font-light tracking-normal leading-tight text-white text-opacity-70 max-md:max-w-full font-monserat">
            {translations.hotelRecommendation}
          </p>
        </div>
      </div>
    </section>
  );
};

HeroSection.displayName = "HeroSection";

export default HeroSection;
