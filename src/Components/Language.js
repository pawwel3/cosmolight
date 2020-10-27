import React from "react";
import "../style/Language.css";
const Language = () => {
  const [isPl, setIsPl] = React.useState(true);
  const [language, setLanguage] = React.useState("pl");
  const handlerIsPl = () => {
    if (isPl === true) {
      setIsPl(!isPl);
      setLanguage("en");
    } else {
      setIsPl(!isPl);
      setLanguage("pl");
    }
  };
  return (
    <div className="contener">
      <div className="toggle-btn" onClick={handlerIsPl}>
        <div className={language}>
          <div className="pl-en">{language}</div>
        </div>
      </div>
    </div>
  );
};
export default Language;
