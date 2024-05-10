import React from 'react';
import './IntroductionPage.style.scss';
import RobotLogo from "../../robo/RobotLogo";

function IntroductionPage(props) {
  return (
    <section className={`introduction__block`}>
      <header className={`introduction__header`}>
        <RobotLogo id={`introduction__header__icon`}></RobotLogo>
        <span id={`introduction__logo-text`}>
          KROP_ROBOTS
        </span>
      </header>
      <div className={`introduction__content`}>
        <div className={`introduction__content__text-block`}>
          <div className={`introduction_text-wrapper`}>
            <h1 className={`introduction__content__text-block__title`}>
              KROP_ROBOTS
            </h1>
            <h3 className={`introduction__content__text-block_subtitle`}>
              Дивовижна STEM-освіта <br/> без обмежень!
            </h3>
          </div>
        </div>
        <div className={`introduction__content__img-block`}>
          <div className={`main-image-block`}/>
        </div>
      </div>
    </section>
  );
}

export default IntroductionPage;