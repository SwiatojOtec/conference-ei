import React, { memo, useMemo } from "react";
import {
  gfa,
  expertiseFrance,
  uaExperts,
  legalAdwiser,
  publicHealthUa,
  publicHealthEng,
  who,
  thl,
} from "@/public/icons/index";
import Image, { StaticImageData } from "next/image";
import { useLocale, useTranslations } from "next-intl";

interface PartnerProps {
  image: StaticImageData;
  alt: string;
}

const Partner: React.FC<PartnerProps> = memo(({ image, alt }) => (
  <Image
    loading="lazy"
    src={image}
    width={image.width}
    height={image.height}
    alt={alt}
    className="min-w-24 w-2/3 object-contain"
  />
));

Partner.displayName = "Partner";

const Partners: React.FC = () => {
  const t = useTranslations("partners");

  const locale = useLocale();

  const publicHealth = useMemo(
    () => (locale === "en" ? publicHealthEng : publicHealthUa),
    [locale],
  );

  const partners = [
    { id: "4525287679", image: publicHealth, alt: "Public Health" },
    { id: "1806615645", image: gfa, alt: "GFA" },
    { id: "4375693792", image: thl, alt: "THL" },
    { id: "1655657187", image: who, alt: "ВООЗ" },
    { id: "8010212658", image: expertiseFrance, alt: "Expertise-France" },
    { id: "7672886314", image: legalAdwiser, alt: "Legal-Adwiser" },
    { id: "8692913525", image: uaExperts, alt: "EU-Experts" },
  ];

  return (
    <section id="partners">
      <div className="max-w-[1800px] mx-auto p-5">
        <div className="flex flex-col px-5 py-12 lg:py-20 lg:px-10 mt-4 w-full border border-solid border-slate-300 rounded-[40px] max-md:max-w-full">
          <h2 className="self-start max-sm:text-2xl max-md:text-3xl text-[4vw] 2xl:text-6xl font-evolventa font-bold uppercase tracking-tighter leading-tight text-slate-950 max-md:max-w-full">
            {t("title")}
          </h2>
          <div className="max-sm:mt-6 mt-16 max-w-full max-md:mt-10">
            <div className="flex flex-wrap max-sm:items-center justify-center gap-5">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full grow max-md:max-w-[45%] max-w-80 justify-center min-w-20 min-h-40 max-[400px]:min-h-32 max-h-60 items-center px-10 py-6 max-[400px]:py-3 bg-white rounded-3xl border border-solid border-slate-300 max-md:px-3 max-md:mt-4">
                  <Partner {...partner} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Partners.displayName = "Partners";

export default Partners;
