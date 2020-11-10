import React,{useContext} from "react";
import {LangueContext} from '../LangueContext'
const NavBarMenu = () => {
  const{langue}=useContext(LangueContext)
  return (
    <div className="navbar-menu">
      <ul>
        <LangueContext.Provider>
        <li className="menu">
          <a href="#about">{langue?'O NAS':'ABOUT US'}</a>
        </li>
        <li className="menu">
          <a href="">{langue?'KATALOG':'CATALOG'}</a>
        </li>
        <li className="menu">
          <a href="">{langue?"SALONY PARTNERSKIE":'PARTNER LIVING ROOMS'}</a>
        </li>
        <li className="menu">
          <a href="">{langue?"MODELE 3D":'3D MODELS'}</a>
        </li>
        <li className="menu">
          <a href="">{langue?"KONTAKT":"CONTACT"}</a>
        </li>
        <li className="menu">
          <a href="">B2B</a>
        </li>
        </LangueContext.Provider>
       
      </ul>
    </div>
  );
};
export default NavBarMenu;
