import React from "react";
import NavBarBrand from "./NawBarBrand";
import NavBarMenu from "./NavBarMenu";
import NavBarSM from "./NavBarSM";
import Language from "./Language";
import "../style/Header.css";
const Header = () => {
  return (
    <nav className="navbar" role="navigation">
      <NavBarBrand />
      <NavBarMenu />
      <NavBarSM />
      <Language />
    </nav>
  );
};
export default Header;
