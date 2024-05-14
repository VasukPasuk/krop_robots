import React, { useState, useEffect } from 'react';
import './ScrollTopButton.style.scss';
import {FaArrowUp} from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <button
      className={`scroll-to-top-button ${showButton && `scroll-to-top-button__visible`}`}
      onClick={scrollToTop}
    >
      <FaArrowUp id={`scroll-to-icon`}/>
    </button>
  )
};

export default ScrollToTopButton;
