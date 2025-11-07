import React from "react";
import {
  ThematicPanels,
} from "@/components/index";
import Header2024 from "@/components/archive/Header2024";
import Footer2024 from "@/components/archive/Footer2024";
import SpeakersNew2024 from "@/components/archive/SpeakersNew2024";
import HeroSection2024 from "@/components/archive/HeroSection2024";
import Partners2024 from "@/components/archive/Partners2024";
import EventHighlights2024 from "@/components/archive/EventHighlights2024";
import ConferenceAgenda2024 from "@/components/archive/ConferenceAgenda2024";

function Archive2024() {
  return (
    <>
      <Header2024 />
      <main className="bg-[#F6F7F9] font-evolventa">
        <HeroSection2024 />
        <EventHighlights2024 />
        <ThematicPanels />
        <ConferenceAgenda2024 />
        <SpeakersNew2024 />
        <Partners2024 />
      </main>
      <Footer2024 />
    </>
  );
}

export default Archive2024;

