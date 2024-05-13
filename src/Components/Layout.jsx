import React from 'react';
import './Layout.style.scss'
import IntroductionBlock from "./IntroductionBlock/Introduction.block";
import CarouselBlock from "./CarouselBlock/Carousel.block";
import SumoIntroductionBlock from "./SumoIntroductionBlock/SumoIntroduction.block";
import SumoZonesBlock from "./SumoZonesBlock/SumoZones.block";
import SumoStagesBlock from "./SumoStagesBlock/SumoStages.block";
import FooterBlock from "./FooterBlock/Footer.block";
import ScrollToTopButton from "./ScrollTopButton/ScrollTopButton";

function Layout(props) {
  return (
    <>
      <main id={`main-content-wrapper`}>
        <IntroductionBlock/>
        <CarouselBlock/>
        <SumoIntroductionBlock/>
        <SumoZonesBlock/>
        <SumoStagesBlock/>
        <FooterBlock/>
        
      </main>
      <ScrollToTopButton/>
    </>
  
  );
}

export default Layout;