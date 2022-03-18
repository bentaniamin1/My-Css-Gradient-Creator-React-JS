import React, {useEffect , useState } from "react";
import Codegradient from "./Codegradient";
export default function Palette({breackdown,couleur, color, onChange, onChange1, value1}) {
  
  console.log("couleur");
    // couleur  action
    useEffect(()=> {
      document.title = `${color}-${value1} `;
      document.title = `${value1} `;
      console.log("couleur didMount or Update",`${color}` );
      return() => {
        console.log('WillUnmount',);
      }
    },
      [color,value1]
    );
    
    return (
        <div className="Palette col-sm-6">
          
            <label for='breackdown'>{breackdown}</label>
            <input type='number' min="0" max="100" name="breackdown1" value={value1}   onChange={onChange1}></input>
            <label for='color'>{couleur}</label>
            <input type="color" name="color" value={color}   onChange={onChange}></input>
        </div>
      );
}