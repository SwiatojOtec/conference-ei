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
          <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight uppercase text-white max-md:text-4xl max-sm:text-3xl">
            {translations.title}
          </h1>
          <div className="flex flex-col-reverse gap-3 max-sm:mt-10 mt-20 justify-center">
            <div className="flex justify-between items-center max-[424px]:flex-col max-[424px]:space-y-5 gap-1">
              <div className="flex space-x-3 max-lg:flex-col max-lg:content-start max-lg:flex-wrap lg:content-center max-lg:space-y-2">
                <button className="bg-transparent rounded-[40px] self-start max-sm:text-base text-2xl max-sm:px-3 max-sm:py-2 px-5 py-4 text-white border-2 border-white border-solid text-nowrap font-monserat">
                  {translations.streamingTime}
                </button>
                <button className="bg-white rounded-[40px] text-black max-sm:text-base text-2xl self-start max-sm:px-3 max-sm:py-2 px-5 py-4 text-nowrap font-monserat">
                  {translations.streamingDate}
                </button>
              </div>
              <div className="flex flex-col lg:flex-row max-[424px]:flex-row max-[424px]:space-x-1 min-[424px]:max-lg:space-y-3 justify-center items-center lg:space-x-2 xl:space-x-5 gap-1 mx-auto">
                <div className="flex space-x-3 text-white text-base sm:text-2xl md:text-4xl justify-center items-center uppercase ">
                  <Link href="https://youtube.com/live/OlQk-xjVhkU?feature=share" target="_blank">
                    <Image
                      src={youtube}
                      alt={youtube.src}
                      width={48}
                      height={youtube.height}
                      className="min-w-12 sm:w-16 opacity-90 hover:opacity-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </Link>
                  <span>ua</span>
                </div>
                <div className="flex space-x-3 text-white text-base sm:text-2xl md:text-4xl justify-center items-center uppercase">
                  <Link href="https://youtube.com/live/acfxScsc7m8?feature=share" target="_blank">
                    <Image
                      src={youtube}
                      alt={youtube.src}
                      width={48}
                      height={youtube.height}
                      className="min-w-12 sm:w-16 opacity-90 hover:opacity-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </Link>
                  <span>en</span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl max-sm:text-3xl max-md:text-4xl max-[400px]:text-xl xl:text-6xl 2xl:text-7xl max-xl:w-auto text-nowrap text-center font-bold leading-tight uppercase text-white ">
              {translations.subtitle}
            </h1>
          </div>
          <div className="flex flex-col max-lg:space-y-10 lg:flex-row lg:space-x-10 justify-end max-sm:mt-10 mt-20 md:px-96 text-white items-center">
            <Link href="https://forms.gle/HCuSTKTThTU5ekzD9">
              <button className="max-[420px]:px-7 max-[420px]:py-4 px-14 py-6 bg-[#1B27DB] text-white rounded-[720px] border-none max-sm:text-base text-2xl text-nowrap hover:bg-white hover:text-black transition-all duration-300 ease-in-out font-monserat">
                {translations.actionBtn}
              </button>
            </Link>
          </div>
          <p className="mt-10 max-sm:text-sm text-lg text-center font-light tracking-normal leading-tight text-white text-opacity-50 max-md:max-w-full font-monserat">
            {translations.eventLocation}
          </p>
        </div>
      </div>
    </section>
  );
};

HeroSection.displayName = "HeroSection";

export default HeroSection;
