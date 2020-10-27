import React from "react";
import Texte from "./Text";
import "../style/B2b.css";
import NewYork from "../img/new_york_p04380wh_4.png";
const B2b = () => {
  return (
    <div id="b2b">
      <div id="b2bimg">
        <Texte />
        <div id="content"></div>
      </div>
      <div id="b2btext">
        <div id="text1">Oferta dla klienta biznesowego</div>
        <div id="text2">
          Wsparcie b2b <br /> dla profesjonalistów
        </div>
        <div id="text3">
          Nasza oferta skierowana jest do klienta biznesowego, dlatego
          konsekwentnie rozwijamy naszą obsługę B2B, oferując coraz
          obszerniejsze udogodnienia hurtowe.
        </div>
        <button id="b2b-button">dowiedz się więcej</button>
      </div>
    </div>
  );
};
export default B2b;
