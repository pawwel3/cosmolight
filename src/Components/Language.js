import React from "react";
import "../style/Language.css";
const Language = () => {
  const [isPl, setIsPl] = React.useState(true);
  const handlerIsPl=()=>setIsPl(isPl=>!isPl)
  
  return (
    <div className="contener">
      <div className="toggle-btn" onClick={handlerIsPl}>
        <div className={isPl?'pl':'en'}>
          <div className="pl-en">{isPl?'pl':'en'}</div>
        </div>
      </div>
    </div>
  );
};
export default Language;
