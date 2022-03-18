import logo from "./logo.svg";
import "./App.css";
import Palette from "./components/Pallete";
import Gradient from "./components/gradient";
import React, {useState} from "react";
import GradientLinear from "./components/GradientLinear";
import Codegradient from "./components/Codegradient";

function App() {
  const [color, setColor] = React.useState("#968d2c");
  console.log("couleur", color);
  
  const [color2, setColor2] = React.useState("#262079");
  console.log("couleur3", color);
  
  const [color3, setColor3] = React.useState("#e03e3e");

  const [breakpoint1, setBreakpoint1] = React.useState(7);
  const [breakpoint2, setBreakpoint2] = React.useState(46);
  const [breakpoint3, setBreakpoint3] = React.useState(67);


  const [rotation, setRotation] = React.useState(-60);

  //input code couleur
  const handleInput = (e) => {
    setColor(e.target.value);
  }

  const handleInput2 = (e) => {
    setColor2(e.target.value);
  }

  const handleInput3 = (e) => {
    setColor3(e.target.value);
  }

  //input breackpoint
  const handleInputBreackpoint1 = (e) => {
    setBreakpoint1(e.target.value);
  }

  const handleInputBreackpoint2 = (e) => {
    setBreakpoint2(e.target.value);
  }

  const handleInputBreackpoint3 = (e) => {
    setBreakpoint3(e.target.value);
  }

  //input Rotation
  const handleInputRotation = (e) => {
    setRotation(e.target.value);
  }

  const gradientline =`linear-gradient(${rotation}deg, ${color} ${breakpoint1}%, ${color2} ${breakpoint2}%, ${color3} ${breakpoint3}%)`;
  return (
    <div className="container justify-content-between">
    <div className="row">
      

    <Palette couleur='Couleur1' value={color} value1={breakpoint1} breackdown='Breakpoint1' onChange={handleInput} onChange1={handleInputBreackpoint1} color={color}  />
    <Palette couleur='Couleur2' breackdown='Breakpoint2' onChange={handleInput2} color={color2} onChange1={handleInputBreackpoint2} value1={breakpoint2} />
    <Palette couleur='Couleur3' breackdown='Breakpoint3' onChange={handleInput3} color={color3} onChange1={handleInputBreackpoint3} value1={breakpoint3} />
    <Gradient rotation={rotation} onChange={handleInputRotation}/>
    </div>
    <div className="row">
      <GradientLinear gradientline={gradientline}/>
    </div>
    <div className="row">
      <Codegradient color={color} color2={color2} color3={color3} breakpoint={breakpoint1} breakpoint2={breakpoint2} breakpoint3={breakpoint3} rotation={rotation}/>
    </div>
    
    </div>
  );
}

export default App;
