import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let currTime = new Date();
currTime = currTime.getHours();


let greeting = " ";
const cssStyle = { };

if(currTime >= 1 && currTime <12){
    greeting="Good Mornning";
    cssStyle.color="Green";
}
if(currTime >= 12 && currTime <18 ){
    greeting="Good AfterNoon";
    cssStyle.color="orange";
}
else{
    greeting="Good Night";
    cssStyle.color="black"
}

ReactDOM.render(
<div className="box">    
<h1>hello Sir, <span style={cssStyle}>{greeting}</span></h1>
</div>,
    document.getElementById("root")
);