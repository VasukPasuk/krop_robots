import React from 'react';
import './Menu.style.scss';

function Menu({isActive, children, ref}) {
  
  return (
    <div data-active-menu={String(isActive)} ref={ref} className={`competitions-right-menu right-menu`}>
      {children}
    </div>
  );
}

export default Menu;