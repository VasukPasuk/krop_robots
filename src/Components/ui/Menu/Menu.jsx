import React, {useContext} from 'react';
import './Menu.style.scss';
import { IoClose } from "react-icons/io5";
import menuContext from "../../../context/MenuContext";

function Menu({isActive, children}) {
  const {setCurrentMenu} = useContext(menuContext)
  const closeMenuHandler = () => {
    setCurrentMenu(prev => 0)
  }
  return (
    <div data-active-menu={String(isActive)} className={`competitions-right-menu right-menu`}>
      <div
        className="close-menu-button"
        onClick={closeMenuHandler}
      >
        <IoClose />
      </div>
      {children}
    </div>
  );
}

export default Menu;