import React, {useContext, useEffect, useState} from 'react';
import './Header.style.scss';
import {
  KROP_ROBOTS_SHOP_WARN_MASSAGE_TEXT, REGISTER_ROBOT_SUMO_LINK,
  SUMO_COMPETITIONS_WARN_MASSAGE_TEXT
} from "../../constants/.names";

import Logo from "../../icons/Logo";
import {Link, NavLink, useLocation} from "react-router-dom";
import {AiFillSetting} from "react-icons/ai";

import useNotify from "../../hooks/useNotify";

import {RxHamburgerMenu} from "react-icons/rx";
import MenuContext from "../../context/MenuContext";
import ThemeChanger from "../ui/ThemeChanger/ThemeChanger";
import ThemeContext from "../../context/ThemeContext";

function Header(props) {
  const {theme} = useContext(ThemeContext)
  const {currentMenu, setCurrentMenu} = useContext(MenuContext)
  const [shop_notify] = useNotify(KROP_ROBOTS_SHOP_WARN_MASSAGE_TEXT)
  const [sumo_notify] = useNotify(SUMO_COMPETITIONS_WARN_MASSAGE_TEXT)
  const {pathname} = useLocation();
  const currentPath = pathname.replace('/','');
  const [scrollPosition, setScrollPosition] = useState(0);
  const linkNavWarnMassageHandler = () => {
    shop_notify();
  }
  const LogoOnClickHandler = () => {
    setCurrentMenu(0)
  }
  useEffect(() => {
    const scrollListener = () => {
      const scrollPosition = window.scrollY;
      setScrollPosition(prev => scrollPosition < 500 ? scrollPosition : 600)
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])
  return (
    <header
      data-set-pos={currentPath === 'robot-sumo-full' ?  'fixed':'none' }
      style={{background: (scrollPosition < 500 && theme === "light" && ['', 'home'].includes(currentPath)) ? 'transparent' : ''}}
    >
      <Link
        to={'/home'}
        className={`logo-container`}
        onClick={LogoOnClickHandler}
      >
        <Logo/>
        <img src="text_white.png"alt="krop_robots logo-text"/>
      </Link>
      <div className={`tools-container`}>
        <NavLink to={`#`} id={`krop-robots-shop-link`} onClick={linkNavWarnMassageHandler}>
          Krop Robots Shop
        </NavLink>
        <ThemeChanger/>
        <RxHamburgerMenu
          className={`hamburger-menu`}
          // onClick={() => setCurrentMenu(1)}
        />
        <AiFillSetting
          id="settings-icon"
          // onClick={() => setCurrentMenu(2)}
        />
      </div>
    </header>
  );
}

export default Header;