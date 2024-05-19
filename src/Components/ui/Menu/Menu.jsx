import React from 'react';
import './Menu.style.scss';

function Menu({isActive, children}) {
  
  return (
    <div data-active-menu={String(isActive)} className={`competitions-right-menu right-menu`}>
      {children}
    </div>
  );
}

export default Menu;