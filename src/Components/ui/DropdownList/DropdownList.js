import React, {useState} from 'react';
import './DropdownList.style.scss';
import {IoIosArrowUp} from "react-icons/io";
import {FaLink} from "react-icons/fa";
function DropdownList({children, title}) {
  const [active, setActive] = useState(false);
  return (
    <div className={`drop-down-list-element`}>
      <div
        className={`drop-down-list-element__title-box`}
        onClick={() => {
          setActive(state => !state)
        }}
      >
        <span className={`menu-title-container`}>
          {title}
        </span>
        <IoIosArrowUp
          className={`drop-down-element__arrow`}
          data-active-arrow={active ? 'true' : 'false'}
        />
      
      </div>
      <ul data-active-list={active ? 'true' : 'false'} className={`drop-down-element__content-box`}>
        {children}
      </ul>
    </div>
  );
}

function DropdownItem({children, isLink = false, onClick= undefined, isValid = false, href= "#"}) {
  return (
    <li className={`drop-down-element__content-box__option-item`} onClick={onClick || undefined }>
      {isLink && (
        <a target="_self" href={href}>
          <FaLink/>
          {children}
        </a>
      )}
      {!isLink && (
        <div>
          {children}
        </div>
      )}
    </li>
  )
}

export {DropdownList, DropdownItem}