import React from "react";
import {
  ThematicPanels,
  EventHighlights,
  Footer,
  Header,
  HeroSection,
  Partners,
  RequestSection,
  SpeakersNew,
  ConferenceAgenda,
} from "@/components/index";

function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#F6F7F9] font-evolventa">
        <HeroSection />
        <EventHighlights />
        <ThematicPanels />
        <RequestSection />
        <ConferenceAgenda />
        <SpeakersNew />
        <Partners />
      </main>
      <Footer />
    </>
  );
}

export default Home;
