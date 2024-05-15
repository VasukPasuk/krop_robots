import React from 'react';
import './TimeToRepair.style.scss';
import { TiArrowSortedDown } from "react-icons/ti";

function TimeToRepair(props) {
  return (
    <section className={`time-to-repair-block`}>
      <div className={`time-to-repair-block__text-block`}>
        <h1 className={`time-to-repair-block__text-block__title-box`}>
          Технічні перерви
        </h1>
        <div className={`time-to-repair-block__text-block__subtitle-box`}>
          <TiArrowSortedDown id="arrow-down-icon"/>
          <span>
            Технічні перерви між матчами
          </span>
        </div>
        <ul className={`time-to-repair-block__text-block__text-box`}>
          <li>
            Команди можуть відремонтувати своїх роботів під час 30-хвилинної технічної перерви між матчами.
          </li>
          <li>
            Учасники мають право на оперативну конструктивну зміну робота між раундами (в т.ч. – ремонт, заміну елементів живлення, вибір програми та ін.), якщо внесені зміни не суперечать вимогам змагання.
          </li>
          <li>
            Час на оперативну конструктивну зміну робота контролюється суддею, але не може перевищувати 1 хвилину.
          </li>
        </ul>
      </div>
      <div className={`time-to-repair-block__img-block`}>
        <img
          className={`robot-repairing-image`}
          src={`robot-repairing.png`}
          alt={`repairing robot img`}
        >
        
        </img>
      </div>
    
    </section>
  );
}

export default TimeToRepair;