import React from "react";
import washington from "../img/washington_p05915wh.png";
import "../style/Slider.css";
import hangLamp from "../img/hang-lamp.png";
import lampa from "../img/neutrois.png";
import sun from "../img/sun.png";
import carlights from "../img/car-lights.png";
const Slider = () => {
  return (
    <div className="baner">
      <div className="text">
        <div className="name">Lampa Washington</div>
        <div className="shortDescription">Nowojorska klasyka stylu</div>
        <div className="description">
          Harmonijna w każdym calu linia lamp Dublin to doskonale zbilansowany
          taniec światła i cienia
        </div>
        <div className="data">
          <span className="inf">
            <img src={lampa} alt="lampa wisząca" />
            <span>Lampa wisząca</span>
          </span>
          <span className="inf">
            <img src={sun} alt="" />
            <span>1 źródło światła</span>
          </span>
          <span className="inf">
            <img className="ligth" id="car" src={carlights} alt="" />

            <span>Kierunek świecenia</span>
          </span>
        </div>
        <button className="buttonBaner">zobacz produkt</button>
      </div>
      <div>
        <img className="img" src={washington} alt="lampa" />
      </div>
    </div>
  );
};
export default Slider;
