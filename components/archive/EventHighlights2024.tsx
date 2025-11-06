import { useLocale } from "next-intl";
import React, { useMemo } from "react";

interface HighlightProps {
  title: string;
}

const Highlight: React.FC<HighlightProps> = React.memo(({ title }) => {
  return (
    <div
      className={`flex flex-col items-start max-sm:py-5 py-11 pr-10 lg:pr-20 pl-8 border border-solid border-blue-800 rounded-[40px] w-full md:min-w-[396px] leading-8 md:w-full font-light tracking-tighter text-slate-950 max-md:px-5`}>
      <h3 className="max-sm:text-xl text-3xl font-grotesk">{title}</h3>
    </div>
  );
});

Highlight.displayName = "Highlight";

const EventHighlights2024: React.FC = () => {
  const locale = useLocale();

  const translations = useMemo(() => {
    if (locale === "en") {
      return {
        title: "Conference Expectations",
        event_title_1: "Presentation of Ukraine's European integration achievements in the healthcare sector",
        event_title_2: "Potential contribution of the Ukrainian healthcare system to the EU space",
        event_title_3: "Establishment of bilateral cooperation in healthcare with other EU member states",
        event_title_4: "Financial and investment prospects for the Ukrainian medical space within the European integration process"
      };
    }
    return {
      title: "Очікування від конференції",
      event_title_1: "Презентація євроінтеграційних здобутків України в сфері охорони здоров'я",
      event_title_2: "Потенційний внесок української системи охорони здоров'я в простір ЄС",
      event_title_3: "Налагодження білатеральної співпраці в сфері охорони здоров'я з іншими країнами-членами ЄС",
      event_title_4: "Фінансові та інвестиційні перспективи для українського медичного простору в рамках євроінтеграційного процесу"
    };
  }, [locale]);

  const highlights = useMemo(
    () => [
      {
        id: "6199149487",
        title: translations.event_title_1,
      },
      {
        id: "3170701726",
        title: translations.event_title_2,
      },
      {
        id: "1331619272",
        title: translations.event_title_3,
      },
      {
        id: "4295958768",
        title: translations.event_title_4,
      },
    ],
    [translations],
  );

  return (
    <section id="about" className="mt-4">
      <div className="max-w-[1800px] mx-auto p-5">
        <div className="flex gap-5 flex-col">
          <div className="flex flex-col max-md:ml-0 max-md:w-full">
            <h1 className="max-sm:text-2xl max-md:text-3xl text-[4vw] 2xl:text-6xl font-evolventa font-bold text-blue-800 uppercase max-sm:py-5 py-11 pr-10 lg:pr-20 pl-8 max-md:px-5 rounded-[40px] tracking-tighter leading-tight md:mt-10 max-sm:px-2 px-10">
              {translations.title}
            </h1>
          </div>
          <div className="flex flex-wrap max-md:w-full gap-5">
            {highlights.map((highlight) => (
              <Highlight key={highlight.id} {...highlight} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

EventHighlights2024.displayName = "EventHighlights2024";

export default EventHighlights2024;

