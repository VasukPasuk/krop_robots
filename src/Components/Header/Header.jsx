import React, {useState} from 'react';
import './Header.style.scss';
import {useClickAway} from '@uidotdev/usehooks';
import {
  KROP_ROBOTS_SHOP_WARN_MASSAGE_TEXT, REGISTER_ROBOT_SUMO_LINK,
  SUMO_COMPETITIONS_WARN_MASSAGE_TEXT
} from "../../constants/.names";

import Logo from "../../icons/Logo";
import {NavLink, useLocation} from "react-router-dom";
import {AiFillSetting} from "react-icons/ai";

import {DropdownItem, DropdownList} from "../ui/DropdownList/DropdownList";
import useNotify from "../../hooks/useNotify";
import {TbMenuDeep} from "react-icons/tb";
import Menu from "../ui/Menu/Menu";
import {MdOutlineLanguage} from "react-icons/md";

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
      <div className={`links-and-tools-container`}>
        <ul className={`header-links-container`}>
          <li className={`header-link-box`} onClick={undefined}>
            <NavLink to={`home`} className={`header-link`}>
              Головна
            </NavLink>
          </li>
          <li className={`header-link-box`} onClick={linkNavWarnMassageHandler}>
            <NavLink to={`#`} className={`header-link`}>
              Krop Robots Shop
            </NavLink>
          </li>
        </ul>
        <ul className={`header-tools-container`}>
          <li className={`header-tools-container__menu-button`} onClick={openMenuHandler(1)}>
            <span>
              Змагання
            </span>
            <TbMenuDeep id={"header-tools-container__menu-icon"}/>
          </li>
        </ul>
        
        {/*<RxHamburgerMenu*/}
        {/*  className={`hamburger-menu`}*/}
        {/*  onClick={() => setVisibility(prev => !prev)}*/}
        {/*/>*/}
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
            <span>UK</span>
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