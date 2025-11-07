"use client";

import React, { useMemo, useState } from "react";
import { BurgerMenu, LanguageSelector, NavigationMenu } from "./index";
import {
  burger,
  monLogoEng,
  monLogoUa,
} from "@/public/icons/index";
import Image from "next/image";
import { useDisableBodyScroll } from "@/hooks/useDisableBodyScroll";
import { useLocale } from "next-intl";

const Header: React.FC = () => {
  const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);
  const locale = useLocale();

  useDisableBodyScroll(isOpenBurger);

  const ministerLogoSrc = useMemo(() => (locale === "en" ? monLogoEng : monLogoUa), [locale]);

  const handleBurgerToggle = () => setIsOpenBurger((prev) => !prev);

  return (
    <header className="bg-neutral-100 font-monserat">
      <div className="max-w-[1900px] mx-auto px-5 pt-5 pb-1 lg:pb-5">
        {isOpenBurger ? (
          <BurgerMenu onOpenBurger={setIsOpenBurger} />
        ) : (
          <div className="flex gap-5 justify-between items-center px-1 lg:px-5 xl:px-12 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex flex-row items-center gap-2 xl:gap-5">
              <Image
                src="/images/pharma-2025-black.png"
                alt="UA-EU Strategic Partnership Pharmaceutical Sector"
                width={400}
                height={80}
                priority
                className="max-sm:h-8 h-16 w-auto object-contain"
              />
              <div className="flex space-x-1 max-sm:max-w-16 max-w-64 max-sm:h-8 h-20">
                <Image
                  src={ministerLogoSrc}
                  alt="Minister's Logo"
                  width={128}
                  height={96}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-end">
              {/* Mobile Language Selector */}
              <div className="xl:hidden">
                <LanguageSelector />
              </div>
              {/* Desktop Navigation and Language Selector */}
              <div className="hidden xl:flex gap-5 justify-between">
                <NavigationMenu />
                <LanguageSelector />
              </div>
              {/* Mobile Burger Button */}
              <div className="flex place-items-center xl:hidden">
                <button onClick={handleBurgerToggle} aria-label="Open Menu">
                  <Image
                    src={burger}
                    alt="Burger"
                    width={50}
                    height={50}
                    priority={isOpenBurger}
                    className="min-w-12"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
