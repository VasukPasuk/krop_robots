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
function Layout(props) {
  return (
    <>
      <IntroductionBlock/>
      <CarouselBlock/>
      <SumoIntroductionBlock/>
      <SumoZonesBlock/>
      <SumoStagesBlock/>
      <FooterBlock/>
      <ScrollToTopButton/>
      <ToastContainer limit={1}/>
    </>
  );
}

export default Layout;