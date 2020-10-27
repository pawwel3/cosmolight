import React from "react";
import fb from "../img/Warstwa_x0020_1.svg";
import instagram from "../img/Instagram.svg";
import v from "../img/v.svg";
import yt from "../img/yt.svg";
import "../style/NavBarSM.css";
const NavBarSM = () => {
  return (
    <div className="sm">
      <a href="" className="icon">
        <img src={fb} />
      </a>
      <a href="" className="icon">
        <img src={instagram} />
      </a>
      <a href="" className="icon">
        <img src={v} />
      </a>
      <a href="" className="icon">
        <img src={yt} />
      </a>
    </div>
  );
};
export default NavBarSM;
