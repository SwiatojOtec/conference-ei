"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoscroll from "embla-carousel-auto-scroll";
import "../Embla.css";
import ImageItem from "../ImageItem";
import { useTranslations } from "next-intl";
import {
  nizhynskyi,
  piddubna,
  radutskiy,
  slobodnichenko,
  stefanishyna,
  stefanyshyna,
  sumchuk,
  sur,
  habicht,
  kyriakides,
  liashko,
  mohamed,
  fedko,
  vinsent,
  madsen,
  rene,
  boki,
  chernuchuk,
  galina,
  gusak,
  mashkevich,
  onyschenko,
  savchuk,
  schleuning,
  waligora,
  saum,
} from "@/public/images/speakers/index2024";

function SpeakersNew2024() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoscroll({ speed: 1 })]);
  const t = useTranslations("speakers");

  // Speakers from 2024 conference
  const teamMembers = [
    {
      id: "1349899921",
      name: t("1349899921.name"),
      position: t("1349899921.position"),
      image: liashko,
    },
    {
      id: "9203651569",
      name: t("9203651569.name"),
      position: t("9203651569.position"),
      image: stefanishyna,
    },
    {
      id: "5101953357",
      name: t("5101953357.name"),
      position: t("5101953357.position"),
      image: radutskiy,
    },
    {
      id: "0583925130",
      name: t("0583925130.name"),
      position: t("0583925130.position"),
      image: stefanyshyna,
    },
    {
      id: "5093967432",
      name: t("5093967432.name"),
      position: t("5093967432.position"),
      image: kyriakides,
    },
    {
      id: "7883649566",
      name: t("7883649566.name"),
      position: t("7883649566.position"),
      image: galina,
    },
    {
      id: "1284791861",
      name: t("1284791861.name"),
      position: t("1284791861.position"),
      image: saum,
    },
    {
      id: "152942140630",
      name: t("152942140630.name"),
      position: t("152942140630.position"),
      image: habicht,
    },
    {
      id: "6600130713",
      name: t("6600130713.name"),
      position: t("6600130713.position"),
      image: slobodnichenko,
    },
    {
      id: "5450440301",
      name: t("5450440301.name"),
      position: t("5450440301.position"),
      image: gusak,
    },
    {
      id: "8736333714",
      name: t("8736333714.name"),
      position: t("8736333714.position"),
      image: schleuning,
    },
    {
      id: "0181458066",
      name: t("0181458066.name"),
      position: t("0181458066.position"),
      image: rene,
    },
    {
      id: "2539850355",
      name: t("2539850355.name"),
      position: t("2539850355.position"),
      image: waligora,
    },
    {
      id: "7809504446",
      name: t("7809504446.name"),
      position: t("7809504446.position"),
      image: boki,
    },
    {
      id: "5570982942",
      name: t("5570982942.name"),
      position: t("5570982942.position"),
      image: madsen,
    },
    {
      id: "9751212000",
      name: t("9751212000.name"),
      position: t("9751212000.position"),
      image: vinsent,
    },
    {
      id: "3751567084",
      name: t("3751567084.name"),
      position: t("3751567084.position"),
      image: mohamed,
    },
    {
      id: "0828195891",
      name: t("0828195891.name"),
      position: t("0828195891.position"),
      image: chernuchuk,
    },
    {
      id: "9837450329",
      name: t("9837450329.name"),
      position: t("9837450329.position"),
      image: sumchuk,
    },
    {
      id: "9969099340",
      name: t("9969099340.name"),
      position: t("9969099340.position"),
      image: mashkevich,
    },
    {
      id: "7093669078",
      name: t("7093669078.name"),
      position: t("7093669078.position"),
      image: sur,
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
      id: "5188574604",
      name: t("5188574604.name"),
      position: t("5188574604.position"),
      image: onyschenko,
    },
    {
      id: "7011523267",
      name: t("7011523267.name"),
      position: t("7011523267.position"),
      image: savchuk,
    },
    {
      id: "4904138034",
      name: t("4904138034.name"),
      position: t("4904138034.position"),
      image: nizhynskyi,
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

SpeakersNew2024.displayName = "SpeakersNew2024";

export default SpeakersNew2024;
