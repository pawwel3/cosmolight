import React, { useState } from "react";
import NavBarBrand from "./NawBarBrand";
import NavBarMenu from "./NavBarMenu";
import NavBarSM from "./NavBarSM";
import Language from "./Language";
import {LangueContext, defaultObject} from '../LangueContext'
import "../style/Header.css";
const Header = () => {
    const[langue,setLangue]=useState(defaultObject)
    const toggleSetLangue=()=>setLangue((prevValue)=>!prevValue)
  return (
    <nav className="navbar" role="navigation">
     
      <LangueContext.Provider value={{
        langue,
        setLangue:toggleSetLangue

      }}>
         <NavBarBrand />
        <NavBarMenu />
        <NavBarSM />
      <Language />
      </LangueContext.Provider>
      
      
    </nav>
  );
};
export default Header;
