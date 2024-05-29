import React from 'react';
import IntroductionBlock from "../Components/blocks/IntroductionBlock/Introduction.block";
import CarouselBlock from "../Components/blocks/CarouselBlock/Carousel.block";
import SumoIntroductionBlock from "../Components/blocks/SumoIntroductionBlock/SumoIntroduction.block";
import SumoZonesBlock from "../Components/blocks/SumoZonesBlock/SumoZones.block";
import SumoStagesBlock from "../Components/blocks/SumoStagesBlock/SumoStages.block";
import TimeToRepair from "../Components/blocks/TimeToRepairBlock/TimeToRepair";
import SanctionsBlock from "../Components/blocks/SanctionsBlock/SanctionsBlock";

function MainPage(props) {
  return (
    <>
      <IntroductionBlock/>
      <CarouselBlock/>
      <SumoIntroductionBlock/>
      <SumoStagesBlock/>
      <SumoZonesBlock/>
      <TimeToRepair/>
      <SanctionsBlock/>
    </>
  );
}

export default MainPage;