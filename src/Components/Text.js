import React from "react";
import "../style/Texte.css";
const Text = () => {
  const [isTrue, setIsTRue] = React.useState(true);
  const handlerIsTrue = () => {
    setIsTRue(!isTrue);
  };
  return (
    <div id="mouse" onMouseOver={handlerIsTrue} onMouseOut={handlerIsTrue}>
      {isTrue === false ? "Pakiet korzyści B2B" : ""}
    </div>
  );
};

export default Text;
