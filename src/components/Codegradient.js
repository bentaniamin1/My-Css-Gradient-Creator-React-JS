import react, {useState, useEffect} from "react";
import Palette from "./Pallete"
export default function Codegradient(props) {

    //affichage du linear gradient
    return (
        <div className="col-sm-12">
            <h3 className="monCodeGradient" id="rooot">background: linear-gradient({props.rotation}deg, {props.color} {props.breakpoint}%, {props.color2} {props.breakpoint2}%, {props.color3} {props.breakpoint3}%);</h3>
        </div>
    )
}