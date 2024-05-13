import React from 'react';
import './SumoIntroduction.block.style.scss';

function SumoIntroductionBlock(props) {
  return (
    <section className={`sumo-introduction-block`}>
      <div className={`sumo-introduction-block-text-wrapper`}>
        <div className={`sumo-introduction-title-box`}>
          <h1 className={`sumo-introduction-title s-i-title1`}>
            Сумо
          </h1>
          <h2 className={`sumo-introduction-title s-i-title2`}>
            Автономні роботи
          </h2>
        </div>
        <div className={`sumo-introduction-main-text`}>
          У цьому змаганні учасникам необхідно підготувати робота, здатного найбільш ефективно виштовхнути
          робота-противника за межі чорної лінії рингу.
        </div>
      </div>
      <div className="sumo-introduction-block-img-wrapper">
        <div className={`sumo-introduction-block-img-box`}>
          <img src="./robot-fighting-3.jpg" alt="robot fight image"/>
          <div className={`sumo-introduction-img-shadow`}/>
        </div>
      </div>
    </section>
  );
}

export default SumoIntroductionBlock;