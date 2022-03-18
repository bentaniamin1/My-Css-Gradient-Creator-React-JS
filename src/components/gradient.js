import React ,{Component, useEffect} from "react";

export default function Gradient({rotation,onChange}) {
        useEffect(()=> {
                document.title = `${rotation} `;
                console.log("couleur didMount or Update",`${rotation}` );
                return() => {
                  console.log('WillUnmount',);
                }
              },
                [rotation]
              );
    return (
        <div className="Gradient col-sm-6 ">
                <label for="customRange1" class="form-label">Rotation</label>
                <input type="range" min="-360" max="360" class="form-range" id="customRange1" onChange={onChange}></input>
        </div>
        );
}