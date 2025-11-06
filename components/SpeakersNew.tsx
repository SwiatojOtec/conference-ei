"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoscroll from "embla-carousel-auto-scroll";
import "./Embla.css";
import ImageItem from "./ImageItem";
import { useTranslations } from "next-intl";
import {
  piddubna,
  radutskiy,
  slobodnichenko,
  fedko,
  marcinke,
} from "@/public/images/speakers/index";

function SpeakersNew() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoscroll({ speed: 1 })]);
  const t = useTranslations("speakers");

  // Speakers
  const teamMembers = [
    {
      id: "5101953357",
      name: t("5101953357.name"),
      position: t("5101953357.position"),
      image: radutskiy,
    },
    {
      id: "6600130713",
      name: t("6600130713.name"),
      position: t("6600130713.position"),
      image: slobodnichenko,
    },
    {
      id: "4740672106",
      name: t("4740672106.name"),
      position: t("4740672106.position"),
      image: fedko,
    },
    {
      id: "4239296445",
      name: t("4239296445.name"),
      position: t("4239296445.position"),
      image: piddubna,
    },
    {
      id: "9876543211",
      name: t("9876543211.name"),
      position: t("9876543211.position"),
      image: marcinke,
    },
  ];

  return (
    <section>
      <div className="max-w-[1900px] mx-auto">
        <h1 className="max-sm:text-2xl max-md:text-3xl text-[4vw] 2xl:text-6xl font-evolventa font-bold text-black uppercase max-sm:py-5 py-11 pr-10 lg:pl-[60px] lg:pr-20 pl-10 rounded-[40px] tracking-tighter leading-tight md:mt-10 px-10">
          {t("title")}
        </h1>
        <div id="speakers" className="embla embla__viewport pt-10" ref={emblaRef}>
          <div className="embla__container text-black">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="embla__slide transition-opacity duration-300 ease-in-out">
                <div className="carousel-item flex-col animate-fadeIn">
                  <div>
                    <ImageItem url={member?.image?.src!} />
                  </div>
                  <div className="max-sm:p-1 p-5">
                    <p className="max-sm:text-sm sm:max-md:text-lg text-2xl leading-8 font-bold">
                      {member.name}
                    </p>
                    <p className="max-sm:text-xs sm:max-md:text-sm text-base">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

SpeakersNew.displayName = "SpeakersNew";

export default SpeakersNew;
