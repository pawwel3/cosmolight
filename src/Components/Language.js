import React,{useContext} from "react";
import {LangueContext} from '../LangueContext'
import "../style/Language.css";

const Language = () => {
 /*const [isPl, setIsPl] = React.useState(true);
  const handlerIsPl=()=>setIsPl(isPl=>!isPl)*/
  const {langue}=useContext(LangueContext)
  const {setLangue}=useContext(LangueContext)
  
  return (
      
         <div className="contener">
            <div className="toggle-btn" onClick={setLangue}>
                  < div className={langue?'pl':'en'}>
                      <div className="pl-en">{langue?'pl':'en'}</div>
                  </div>
            </div>
        </div>
      
       
    
    
  );
};
export default Language;
