import React from 'react';
import './IntroPage.style.scss';
import RobotLogo from "../../../robo/RobotLogo";


function IntroPage(props) {
  return (
    <section id="intro-section">
      <header id="intro-section__header">
        <div id="intro-section__header__logo-container">
          <RobotLogo id="intro-section__header__logo"/>
          <span id="intro-section__header__logo-text">
            KROP ROBOTS
          </span>
        </div>
      </header>
      <div id="intro-block">
        <div id="intro-block__left">
          <div id="text-wrapper">
            <div id="text-top__wrapper">
              <span id="text-top">
                STEM-Освіта
              </span>
            </div>
            <div id="text-bottom__wrapper">
              <span id="text-bottom">
                без обмежень
              </span>
            </div>
          </div>
        </div>
        <div id="intro-block__right"/>
      </div>
    </section>
  );
}

export default IntroPage;