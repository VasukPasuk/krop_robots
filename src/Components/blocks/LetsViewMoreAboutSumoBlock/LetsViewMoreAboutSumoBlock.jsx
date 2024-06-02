import React from 'react';
import './LetsViewMoreAboutSumoBlock.style.scss';
import {NavLink} from "react-router-dom";
import {SUMO_DESCRIPTION_ROUTE} from "../../../constants/.routes";
import {FaLink} from "react-icons/fa";

function LetsViewMoreAboutSumoBlock(props) {
  return (
    <section id="view-more-about-sumo-block">
      <div className="decoration-circle-and-image--container">
        <div className="decoration-circle-image"/>
        <div className="decoration-circle-image"/>
        <img src="view-more-about-robot-sumo-image-removebg-preview.png" alt="boy is controlling his mini-robot with phone"/>
      </div>
      <div className="title-text-and-button--container">
        <h1 className="view-more--title-text">
          Хочеш знати більше про змагання роботів?
        </h1>
        <h2 className="view-more--title-text">
          Перейди за посиланням до інструкції боїв роботів
        </h2>
        <NavLink className="view-more-link-button" to={SUMO_DESCRIPTION_ROUTE}>
          <span>
            Дізнатися більше
          </span>
          <FaLink className="view-more-link-button--icon"/>
        </NavLink>
      </div>
    </section>
  );
}

export default LetsViewMoreAboutSumoBlock;