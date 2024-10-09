"use client";

import React, { useMemo } from "react";
import { EUI_logo_4 } from "@/public/icons/index";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations("footer");

  const links = useMemo(
    () => [
      { id: "4733272244", label: t("about"), url: "#about" },
      { id: "5780316506", label: t("thematic"), url: "#panels" },
      {
        id: "3276767331",
        label: t("agenda"),

        url: "#program",
      },
      { id: "8441915618", label: t("speakers"), url: "#speakers" },
      { id: "8950054252", label: t("partners"), url: "#partners" },
      // { id: "2382149563", label: t("joint"), url: "#request" },
    ],
    [t],
  );

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F6F7F9] font-monserat">
      <div className="max-w-[1800px] mx-auto p-5">
        <div className="text-white text-base bg-gradient-to-r from-[#668ef3] to-[#29337b] rounded-[40px] px-[4vw] py-12 md:py-[2vw] mt-4">
          <div className="footer max-md:footer-center">
            <aside className="flex-shrink-0">
              <div className="max-w-16">
                <Image src={EUI_logo_4} alt="EUI_logo_4" width={64} height={77} priority />
              </div>
            </aside>
            <nav>
              <div className="grid grid-cols-1 gap-4">
                {links.slice(0, 5).map((link) => (
                  <a key={link.id} href={link.url} className="link link-hover">
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
            <nav>
              <div className="grid grid-cols-1 gap-4">
                {links.slice(5).map((link) => (
                  <a key={link.id} href={link.url} className="link link-hover">
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
            <div>
              <h6 className="footer-title">{t("contacts")}</h6>
              <p>
                <a href="mailto:vasylenko.nk@gmail.com" className="link link-hover">
                  vasylenko.nk@gmail.com
                </a>
              </p>
              <p className="mt-2">
                <a href="mailto:l.a.ukrainets@moz.gov.ua" className="link link-hover">
                  l.a.ukrainets@moz.gov.ua
                </a>
              </p>
            </div>
          </div>
          <aside className="mt-4">
            <p className="text-center text-white text-sm">
              Copyright © {currentYear} - All right reserved
            </p>
            <p className="text-xs font-light tracking-normal leading-[24px] text-white text-center font-monserat">
              {t("rules")}
            </p>
          </aside>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
