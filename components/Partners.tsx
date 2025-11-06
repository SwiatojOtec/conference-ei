import React, { memo } from "react";
import {
  legalAdwiser,
  pharmhim,
  darnytsia,
  farmak,
  interchem,
  avly,
} from "@/public/icons/index";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

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
    className="w-full max-w-[90%] h-24 max-sm:h-20 object-contain"
  />
));

Partner.displayName = "Partner";

const Partners: React.FC = () => {
  const t = useTranslations("partners");

  const partners = [
    { id: "7672886314", image: legalAdwiser, alt: "Legal Adviser" },
    { id: "1234567894", image: avly, alt: "AVLY" },
    { id: "1234567892", image: farmak, alt: "Farmak" },
    { id: "1234567891", image: darnytsia, alt: "Darnytsia" },
    { id: "1234567890", image: pharmhim, alt: "Pharmhim" },
    { id: "1234567893", image: interchem, alt: "InterChem" },
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
                  className="flex flex-col w-full grow max-md:max-w-[45%] max-w-80 justify-center min-w-20 min-h-28 max-sm:min-h-24 max-h-44 max-sm:max-h-36 items-center px-10 py-6 max-sm:py-4 max-[400px]:py-3 bg-white rounded-3xl border border-solid border-slate-300 max-md:px-3 max-md:mt-4">
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
