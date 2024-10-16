"use client";

import Link from "next/link";
import React, { useCallback, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

type MenuItemsTypes = {
  id: string;
  label: string;
  active: boolean;
  url: string;
};

type MenuItemsPropsTypes = {
  burger?: boolean;
  closeBurger?: () => void;
};

const NavigationMenu = ({ burger, closeBurger }: MenuItemsPropsTypes) => {
  const t = useTranslations("navigation");
  const initialState = useMemo(
    () => [
      { id: "4733272244", label: t("about"), active: false, url: "#about" },
      { id: "5780316506", label: t("thematic"), active: false, url: "#panels" },
      {
        id: "3276767331",
        label: t("agenda"),
        active: false,
        url: "#program",
      },
      { id: "8441915618", label: t("speakers"), active: false, url: "#speakers" },
      {
        id: "7876577745",
        label: t("photos"),
        active: false,
        url: "https://fedorov.gallery.photo/gallery/ukraine-eu-integration-healthcare/",
      },
      { id: "8950054252", label: t("partners"), active: false, url: "#partners" },
    ],
    [t],
  );

  const [menuItems, setMenuItems] = useState<MenuItemsTypes[]>(initialState);

  const handleClick = useCallback(
    (menuItem: Record<string, any>) => {
      closeBurger && closeBurger();
      setMenuItems((prev) =>
        prev.map((item) => {
          if (item.id === menuItem.id) {
            return { ...item, active: true };
          }
          return { ...item, active: false };
        }),
      );
    },
    [closeBurger],
  );

  const isExternalLink = (menuUrl: string) => {
    return menuUrl.startsWith("https");
  };

  return (
    <nav className="flex items-center">
      <ul
        className={`flex space-x-1 ${
          burger && "flex-col space-y-14"
        } items-center text-base font-light tracking-tight leading-tight max-md:max-w-full`}>
        {menuItems.map((menuItem) => {
          const isJointStatement =
            menuItem.label === "Спільна заява" || menuItem.label === "Joint Statement";
          return (
            <li key={menuItem.id}>
              <Link
                href={menuItem.url}
                target={isExternalLink(menuItem.url) ? "_blank" : "_self"}
                onClick={() => handleClick(menuItem)}
                className={`${
                  burger && "px-6 py-4"
                } px-3 py-3 2xl:px-6 text-white 2xl:py-4 bg-[#0771b8] hover:bg-[#165077] rounded-[40px] max-md:px-5 cursor-pointer text-nowrap ${
                  menuItem.active && "bg-[#165077]"
                } ${isJointStatement ? "bg-yellow-400 hover:bg-yellow-600 text-black" : ""}`}>
                {menuItem.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

NavigationMenu.displayName = "NavigationMenu";

export default NavigationMenu;
