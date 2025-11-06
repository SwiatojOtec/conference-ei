"use client";

import React, { useMemo, useState } from "react";
import { NavigationMenu } from "../index";
import BurgerMenu2024 from "./BurgerMenu2024";
import LanguageSelector2024 from "./LanguageSelector2024";
import {
  EUI_logo_4,
  burger,
  fundedByEU,
  fundedByEuUkr,
  monLogoEng,
  monLogoUa,
} from "@/public/icons/index";
import Image from "next/image";
import { useDisableBodyScroll } from "@/hooks/useDisableBodyScroll";
import { useLocale } from "next-intl";

const Header2024: React.FC = () => {
  const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);
  const locale = useLocale();

  useDisableBodyScroll(isOpenBurger);

  const ministerLogoSrc = useMemo(() => (locale === "en" ? monLogoEng : monLogoUa), [locale]);
  const fundedByLogoSrc = useMemo(() => (locale === "en" ? fundedByEU : fundedByEuUkr), [locale]);

  const handleBurgerToggle = () => setIsOpenBurger((prev) => !prev);

  return (
    <header className="bg-neutral-100 font-monserat">
      <div className="max-w-[1900px] mx-auto px-5 pt-5 pb-1 lg:pb-5">
        {isOpenBurger ? (
          <BurgerMenu2024 onOpenBurger={setIsOpenBurger} />
        ) : (
          <div className="flex gap-5 justify-between items-center px-1 lg:px-5 xl:px-12 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex space-x-1 max-w-64 h-20">
              <Image
                src={EUI_logo_4}
                alt="EUI Logo"
                width={44}
                height={96}
                priority
                className="min-w-[34px] max-w-[44px] w-full object-contain"
              />
              <Image
                src={ministerLogoSrc}
                alt="Minister's Logo"
                width={128}
                height={96}
                priority
                className="min-w-[74px] max-w-[94px] w-full object-contain"
              />
              <Image
                src={fundedByLogoSrc}
                alt="Funding by EU"
                width={102}
                height={84}
                priority
                className="min-w-[54px] max-w-[74px] w-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center items-end">
              {/* Mobile Language Selector */}
              <div className="xl:hidden">
                <LanguageSelector2024 />
              </div>
              {/* Desktop Navigation and Language Selector */}
              <div className="hidden xl:flex gap-5 justify-between">
                <NavigationMenu />
                <LanguageSelector2024 />
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

Header2024.displayName = "Header2024";

export default Header2024;



