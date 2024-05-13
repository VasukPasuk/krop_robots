import React, { useState, useEffect } from 'react';
import './ScrollTopButton.style.scss';
import {FaArrowUp} from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  
  const scrollFn = (event) => {
    console.log(event)
    if (event.pageY > 268) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('wheel', scrollFn);
    return () => {
      document.removeEventListener('wheel', scrollFn);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  
  return (
    <button
      id={`scroll-to-top-button`}
      className={`${showButton && `visible`}`}
      onClick={scrollToTop}
    >
      <FaArrowUp id={`scroll-to-icon`}/>
    </button>
  )
};

export default ScrollToTopButton;
