import React, { useState, useEffect } from 'react';
import './ScrollTopButton.style.scss';
import {FaArrowUp} from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(true); // Изменено на false
  
  const scrollFn = () => {
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', scrollFn);
    return () => {
      window.removeEventListener('scroll', scrollFn);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return showButton ? (
    <button id={`scroll-to-top-button`} onClick={scrollToTop}>
      <FaArrowUp id={`scroll-to-icon`}/>
    </button>
  ) : null; // Изменено на null
};

export default ScrollToTopButton;
