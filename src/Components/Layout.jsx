import React from 'react';
import './Layout.style.scss'
import IntroductionBlock from "./IntroductionBlock/Introduction.block";
import CarouselBlock from "./CarouselBlock/Carousel.block";
import SumoIntroductionBlock from "./SumoIntroductionBlock/SumoIntroduction.block";
import SumoZonesBlock from "./SumoZonesBlock/SumoZones.block";
import SumoStagesBlock from "./SumoStagesBlock/SumoStages.block";
import FooterBlock from "./FooterBlock/Footer.block";
import ScrollToTopButton from "./ScrollTopButton/ScrollTopButton";
import {ToastContainer} from "react-toastify";
import TimeToRepair from "./TimeToRepairBlock/TimeToRepair";

function Layout(props) {
  return (
    <>
      {/* --------> MAIN CONTENT <-------- */}
      <IntroductionBlock/>
      <CarouselBlock/>
      <SumoIntroductionBlock/>
      <SumoZonesBlock/>
      <SumoStagesBlock/>
      <TimeToRepair/>
      {/* --------> MAIN CONTENT <-------- */}
      
      {/* --------> FOOTER <-------- */}
      <FooterBlock/>
      {/* --------> FOOTER <-------- */}
      
      {/* --------> HELPER FEATURES <-------- */}
      <ScrollToTopButton/>
      <ToastContainer limit={1}/>
      {/* --------> HELPER FEATURES <-------- */}
    </>
  );
}

export default Layout;