"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

const RequestSection = () => {
  const [isGatherHover, setIsGatherHover] = useState(false);
  const gatherRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const t = useTranslations("joint_statement");

  const handleGatherClick = useCallback(() => {
    setIsGatherHover((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (gatherRef.current && !gatherRef.current.contains(event.target as Node)) {
      setIsGatherHover(false);
    }
  }, []);

  useEffect(() => {
    if (isGatherHover) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isGatherHover, handleClickOutside]);

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = locale === "ua" ? "/files/UEI_joint_ua.pdf" : "/files/UEI_joint_en.pdf";
    link.download = locale === "ua" ? "UEI_joint_ua.pdf" : "UEI_joint_en.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [locale]);

  return (
    <section id="request">
      <div className=" max-w-[1800px] mx-auto p-5 mt-4">
        <div className="overflow-hidden z-10 border border-solid border-slate-300 rounded-[40px] max-sm:px-3 max-sm:py-6 px-5 py-12 md:px-[8vw] md:py-[4vw]  2xl:px-40 2xl:py-20 text-black">
          <h1 className="max-sm:text-2xl max-md:text-3xl text-[4vw] 2xl:text-6xl font-evolventa font-bold uppercase tracking-tighter leading-tight">
            {t("title")}
          </h1>
          <p className="max-sm:text-lg text-xl lg:text-[28.8px] w-full text-justify mt-5 font-monserat">
            {t("desc")}
          </p>
          <div className="mt-10 flex space-x-3 items-center font-monserat">
            <button
              onClick={handleDownload}
              className="max-sm:px-4 max-sm:py-4 px-14 py-6 bg-[#0771b8] hover:bg-[#165077] text-white rounded-[720px] border-none max-sm:text-base max-md:text-xl text-2xl transition-all">
              {t("joint_text_btn")}
            </button>
            <div className="relative" ref={gatherRef}>
              <button
                className="link link-hover cursor-help max-sm:text-sm"
                onClick={handleGatherClick}>
                {t("how_to_join_btn")}
              </button>
              {isGatherHover && (
                <div className="absolute right-0 bottom-4 sm:bottom-2 sm:left-32 chat chat-end sm:chat-start min-w-72 min-[500px]:w-[300px]">
                  <div className="chat-bubble bg-neutral-200 text-black text-sm">
                    {t("join_guide.title")}
                    <br />
                    <span className="inline-block font-bold text-base text-[#165077] my-2">
                      l.a.ukrainets@moz.gov.ua
                    </span>
                    <br />
                    {t("join_guide.number_title")}
                    <br />{" "}
                    <span className="inline-block font-bold text-[#165077] mb-2">
                      {t("join_guide.number")}
                    </span>
                    <br />
                    {t("join_guide.ceremony")}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

RequestSection.displayName = "RequestSection";

export default RequestSection;
