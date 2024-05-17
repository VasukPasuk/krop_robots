import React from 'react';
import './ErrorPage.style.scss';
import {NavLink} from "react-router-dom";
import {AiFillHome} from "react-icons/ai";

function ErrorPage(props) {
  return (
    <section id="error-page">
      <img src="not-found-image.png" alt="not found image"/>
      <p className="error-text-block">
        Сторінка не була знайдена
      </p>
      <NavLink id="error-link-block" to={'/home'}>
        Повернутися на головну сторінку
      </NavLink>
    
    
    </section>
  );
}

export default ErrorPage;