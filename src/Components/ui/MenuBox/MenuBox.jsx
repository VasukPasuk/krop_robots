import React, {useContext} from 'react';
import Menu from "../Menu/Menu";
import {DropdownItem, DropdownList} from "../DropdownList/DropdownList";
import {REGISTER_ROBOT_SUMO_LINK} from "../../../constants/.names";
import {MdOutlineLanguage} from "react-icons/md";
import MenuContext from "../../../context/MenuContext";
import {SUMO_DESCRIPTION_ROUTE} from "../../../constants/.routes";

function MenuBox(props) {
  const { currentMenu, setCurrentMenu } = useContext(MenuContext);
  return (
    <>
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
            href={SUMO_DESCRIPTION_ROUTE}
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
    </>
  );
}

export default MenuBox;