import React, {useState} from 'react';
import './Header.style.scss';
import {
  KROP_ROBOTS_SHOP_WARN_MASSAGE_TEXT, REGISTER_ROBOT_SUMO_LINK,
  SUMO_COMPETITIONS_WARN_MASSAGE_TEXT
} from "../../constants/.names";

import Logo from "../../icons/Logo";
import {NavLink, useLocation} from "react-router-dom";
import {AiFillSetting} from "react-icons/ai";

import {DropdownItem, DropdownList} from "../ui/DropdownList/DropdownList";
import useNotify from "../../hooks/useNotify";
import Menu from "../ui/Menu/Menu";
import {MdOutlineLanguage} from "react-icons/md";
import {RxHamburgerMenu} from "react-icons/rx";

function Header(props) {
  const [currentMenu, setCurrentMenu] = useState(0)
  
  const [shop_notify] = useNotify(KROP_ROBOTS_SHOP_WARN_MASSAGE_TEXT)
  const [sumo_notify] = useNotify(SUMO_COMPETITIONS_WARN_MASSAGE_TEXT)
  const location = useLocation();
  const currentPath = location.pathname.replace('/','');
  
  // const SettingMenuRef = useClickAway(()=> setCurrentMenu(0));
  // const CompetitionsMenuRef = useClickAway(()=> setCurrentMenu(0));
  
  const linkNavWarnMassageHandler = () => {
    shop_notify();
  }
  const linkDropDownWarnMassageHandler = () => {
    sumo_notify();
  }
  const openMenuHandler = (menuId) => {
    return () => {
      setCurrentMenu(prev => prev !== menuId ? menuId : 0);
    }
  }
  return (
    <header data-set-pos={currentPath === 'robot-sumo-full' ?  'fixed':'none' }>
      <div className={`logo-container`}>
        <Logo/>
        <img src="text_white.png" width={50} height={50} alt="krop_robots logo-text"/>
      </div>
      <div className={`tools-container`}>
        <NavLink to={`#`} id={`krop-robots-shop-link`} onClick={linkNavWarnMassageHandler}>
          Krop Robots Shop
        </NavLink>
        <RxHamburgerMenu
          className={`hamburger-menu`}
          onClick={openMenuHandler(1)}
        />
        <AiFillSetting id="settings-icon" onClick={openMenuHandler(2)}/>
      </div>
      
      <Menu isActive={currentMenu === 1}>
        <DropdownList title={"Робо-сумо"}>
          <DropdownItem
            isLink={true}
            isValid={true}
            href={REGISTER_ROBOT_SUMO_LINK}
          >
            <span>Форма для реєстрації</span>
          </DropdownItem>
          <DropdownItem
            isLink={true}
            onClick={linkDropDownWarnMassageHandler}
          >
            <span>Повна інструкція змагань</span>
          </DropdownItem>
        </DropdownList>
      </Menu>
      <Menu isActive={currentMenu === 2}>
        <DropdownList
          title={
            <>
              <span>Змінити мову </span>
              <MdOutlineLanguage className="title-container__icon" />
            </>
        }>
          <DropdownItem
            isLink={false}
          >
            <span>ENG</span>
          </DropdownItem>
          <DropdownItem
            isLink={false}
          >
            <span>UA</span>
          </DropdownItem>
        </DropdownList>
      </Menu>
    </header>
  );
}

export default Header;