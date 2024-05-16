import React, {useState} from 'react';
import './Header.style.scss';

import {RxHamburgerMenu} from "react-icons/rx";
import {HEADER_LINKS, WARN_MASSAGE_TEXT} from "../../constants/.names";
import {Bounce, toast} from "react-toastify";
import Logo from "../../icons/Logo";
import {NavLink, useLocation} from "react-router-dom";

function Header(props) {
  const [visibility, setVisibility] = useState(false);
  const notify = () => toast.warn(WARN_MASSAGE_TEXT, {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
  const location = useLocation();
  const currentPath = location.pathname.replace('/','');
  
  return (
    <header data-set-pos={currentPath === 'robot-sumo-full' ?  'fixed':'none' }>
      <div className={`logo-container`}>
        <Logo/>
        <img src="text_white.png" width={50} height={50} alt="krop_robots logo-text"/>
      </div>
      <ul className={`links-wrapper ${visibility ? 'links-wrapper__show' : 'links-wrapper__hide'}`}>
        {HEADER_LINKS.map((anchor, index) => (
          <li
            key={anchor.link}
            onClick={index === 1 ? notify : undefined}
            className={`link-item l-i-${index + 1}`}
          >
            <NavLink to={anchor.link}>
              {anchor.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <RxHamburgerMenu
        className={`hamburger-menu`}
        onClick={() => setVisibility(prev => !prev)}
      />
    </header>
  );
}

export default Header;