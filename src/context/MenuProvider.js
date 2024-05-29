import {useState} from "react";
import MenuContext from "./MenuContext";

const MenuProvider = ({children}) => {
  const [currentMenu, setCurrentMenu] = useState(0)
  return (
    <MenuContext.Provider value={{currentMenu, setCurrentMenu}}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider;