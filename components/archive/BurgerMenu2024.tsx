"use client";

import Image from "next/image";
import React, { Dispatch, useCallback, useMemo } from "react";
import {
  EUI_logo_4,
  close,
  fundedByEU,
  fundedByEuUkr,
  monLogoEng,
  monLogoUa,
} from "@/public/icons/index";
import { useLocale } from "next-intl";
import dynamic from "next/dynamic";

const NavigationMenu = dynamic(() => import("../NavigationMenu"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

type BurgerMenuTypes = {
  onOpenBurger: Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenu2024 = React.memo(({ onOpenBurger }: BurgerMenuTypes) => {
  const handleCloseBurger = useCallback(() => {
    onOpenBurger(false);
  }, [onOpenBurger]);

  const locale = useLocale();

  const ministerLogoSrc = useMemo(() => (locale === "en" ? monLogoEng : monLogoUa), [locale]);

  const fundedByLogoSrc = useMemo(() => (locale === "en" ? fundedByEU : fundedByEuUkr), [locale]);

  return (
    <div className="relative h-screen flex flex-col space-y-5 gap-5 items-center w-full px-5 py-12 overflow-auto">
      <div className="flex space-x-1 max-w-64 justify-center h-20">
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
      <div className="flex flex-col gap-5 justify-between">
        <NavigationMenu burger closeBurger={handleCloseBurger} />
      </div>
      <div className="absolute top-0 right-0 flex place-items-center">
        <button onClick={handleCloseBurger} aria-label="Close Burger Menu">
          <Image src={close.src} alt="burder" width={50} height={50} priority />
        </button>
      </div>
    </div>
  );
});

BurgerMenu2024.displayName = "BurgerMenu2024";

export default BurgerMenu2024;


