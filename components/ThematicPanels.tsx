"use client";

import { useTranslations } from "next-intl";
import React, { useMemo, useState } from "react";

const ThematicPanels: React.FC = () => {
  const [openPanelId, setOpenPanelId] = useState<string | null>(null);
  const t = useTranslations("thematic_panels");

  const panels = useMemo(
    () => [
      {
        id: "7767333357",
        title: t("thematic_title_1"),
        description: t("thematic_desc_1"),
      },
      {
        id: "1755576199",
        title: t("thematic_title_2"),
        description: t("thematic_desc_2"),
      },
      {
        id: "4168954090",
        title: t("thematic_title_3"),
        description: t("thematic_desc_3"),
      },
      {
        id: "6465433070",
        title: t("thematic_title_4"),
        description: t("thematic_desc_4"),
      },
      {
        id: "0473346932",
        title: t("thematic_title_5"),
        description: t("thematic_desc_5"),
      },
      {
        id: "8964369687",
        title: t("thematic_title_6"),
        description: t("thematic_desc_6"),
      },
    ],
    [t],
  );

  const togglePanel = (id: string) => {
    setOpenPanelId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="panels">
      <div className="max-w-[1800px] mx-auto p-5 leading-8">
        <div className="bg-gradient-to-tl from-blue-600 to-black rounded-2xl max-sm:p-5 p-10">
          <h1 className="max-sm:text-2xl max-md:text-3xl text-[4vw] 2xl:text-6xl font-evolventa font-bold text-white uppercase tracking-tighter leading-tight">
            {t("title")}
          </h1>
          <div className="flex">
            {/* Left side - Steps */}
            <ul className="max-md:hidden md:steps md:steps-vertical px-5 w-32">
              {panels.map((panel) => (
                <li
                  key={panel.id}
                  className={`step ${
                    openPanelId === panel.id ? "step-primary" : ""
                  } cursor-pointer text-white text-lg`}
                  onClick={() => togglePanel(panel.id)}></li>
              ))}
            </ul>

            {/* Right side - Content */}
            <div className="w-full font-monserat">
              <ul className="space-y-4">
                {panels.map((panel) => (
                  <li key={panel.id} className="text-white cursor-pointer">
                    {/* Header */}
                    <div
                      id={`accordion-title-${panel.id}`}
                      className="flex items-center justify-between py-3 border-b border-white cursor-pointer text-lg md:text-xl"
                      onClick={() => {
                        togglePanel(panel.id);
                        setTimeout(() => {
                          const headerElement = document.getElementById(
                            `accordion-title-${panel.id}`,
                          );
                          if (headerElement) {
                            headerElement.scrollIntoView({
                              behavior: "smooth",
                              block: "start", // Scroll to the start
                            });
                          }
                        }, 500);
                      }}>
                      <span>{panel.title}</span>
                      <span className="ml-2">{openPanelId === panel.id ? "▲" : "▼"}</span>
                    </div>

                    {/* Collapsible Description */}
                    <div
                      className={`transition-all duration-300 ease-in-out text-justify overflow-hidden ${
                        openPanelId === panel.id ? "max-h-full opacity-100" : "max-h-0 opacity-0"
                      }`}>
                      <p className="max-sm:text-base md:text-lg mt-3 text-white">
                        {panel.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ThematicPanels.displayName = "ThematicPanels";

export default ThematicPanels;
