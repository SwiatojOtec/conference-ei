"use client";

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import React from "react";

const LanguageSelector2024 = () => {
  const locale = useLocale();

  return (
    <div className="flex justify-center items-center text-base font-light tracking-tight leading-tight max-md:max-w-full ">
      <Link
        href="/archive/2024"
        locale="ua"
        className={`hover:link-hover text-black px-1 uppercase cursor-pointer ${
          locale === "ua" ? "underline" : ""
        }`}>
        UA
      </Link>
      <Link
        href="/archive/2024"
        locale="en"
        className={`hover:link-hover text-black px-1 uppercase cursor-pointer ${
          locale === "en" ? "underline" : ""
        }`}>
        EN
      </Link>
    </div>
  );
};

LanguageSelector2024.displayName = "LanguageSelector2024";

export default LanguageSelector2024;
















