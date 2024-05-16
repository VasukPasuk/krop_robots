import React from 'react';
import './SumoStages.block.style.scss';

function SumoStagesBlock(props) {
  return (
    <div className={`sumo-stages-block`}>
      <h1 className={`sumo-stages-block__title-box`}>
        <span id={`stages-title`}>
          Етапи змагань
        </span>
      </h1>
      <ul className={`sumo-stages-block__text-container`}>
        <li className={`sumo-stages-block__text-container__text-block`}>
          <div className={`sumo-stages-block__text-container__text-block__number-box`}>
            <div className={`number-box__circle`}>1</div>
          </div>
          <div className={`sumo-stages-block__text-container__text-block__text-box`}>
            <div className={`sumo-stages-block__text-container__text-block__text-box__subtitle-box`}>
              Реєстрація
            </div>
            <div className={`sumo-stages-block__text-container__text-block__text-box__main-text-box`}>
              Команди проходять реєстрацію та отримують номери.
            </div>
          </div>
        </li>
        <li className={`sumo-stages-block__text-container__text-block`}>
          <div className={`sumo-stages-block__text-container__text-block__number-box`}>
            <div className={`number-box__circle`}>2</div>
          </div>
          <div className={`sumo-stages-block__text-container__text-block__text-box`}>
            <div className={`sumo-stages-block__text-container__text-block__text-box__subtitle-box`}>
              Підготовка роботів
            </div>
            <div className={`sumo-stages-block__text-container__text-block__text-box__main-text-box`}>
              Учасники збирають, налаштовують та тестують своїх роботів.
            </div>
          </div>
        </li>
        <li className={`sumo-stages-block__text-container__text-block`}>
          <div className={`sumo-stages-block__text-container__text-block__number-box`}>
            <div className={`number-box__circle`}>3</div>
          </div>
          <div className={`sumo-stages-block__text-container__text-block__text-box`}>
            <div className={`sumo-stages-block__text-container__text-block__text-box__subtitle-box`}>
              Жеребкування
            </div>
            <div className={`sumo-stages-block__text-container__text-block__text-box__main-text-box`}>
              Формується турнірна таблиця.
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SumoStagesBlock;