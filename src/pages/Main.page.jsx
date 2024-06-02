import React from 'react';
import IntroductionBlock from "../Components/blocks/IntroductionBlock/Introduction.block";
import CarouselBlock from "../Components/blocks/CarouselBlock/Carousel.block";
import SumoIntroductionBlock from "../Components/blocks/SumoIntroductionBlock/SumoIntroduction.block";
import SumoZonesBlock from "../Components/blocks/SumoZonesBlock/SumoZones.block";
import SumoStagesBlock from "../Components/blocks/SumoStagesBlock/SumoStages.block";
import TimeToRepair from "../Components/blocks/TimeToRepairBlock/TimeToRepair";
import SanctionsBlock from "../Components/blocks/SanctionsBlock/SanctionsBlock";
import MembersBlock from "../Components/blocks/MembersBlock/MembersBlock";
import LetsViewMoreAboutSumoBlock from "../Components/blocks/LetsViewMoreAboutSumoBlock/LetsViewMoreAboutSumoBlock";

function MainPage(props) {
  return (
    <>
      <IntroductionBlock/>
      <CarouselBlock/>
      <MembersBlock/>
      <SumoIntroductionBlock/>
      <SumoStagesBlock/>
      <SumoZonesBlock/>
      <TimeToRepair/>
      <SanctionsBlock/>
      <LetsViewMoreAboutSumoBlock/>
    </>
  );
}

export default MainPage;