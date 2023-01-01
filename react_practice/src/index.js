// var React = require('react');
// var ReactDOM = require('react-dom');
// babel covert it into mordern javascrip v
import React from "react"
import ReactDOM  from "react-dom"
import "./index.css"

const name = "Nikhil";
const surname = "Poojari"
const date = new Date();
const localdate =date.toLocaleDateString()
const localtime =date.toLocaleTimeString()
const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()
const hour = date.getHours()
const time = [date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()]
const link = "https://csi.dbit.in"
const heading={
    color: 'rgb(109, 97, 216)',
    textAlign: 'center',
    textTransform: "capitalize",
    fontWeight: "bold",
    fontFamily:" 'Dancing Script', cursive"
  }
const hello ={
  backgroundColor: "#50D0F4",
  textAlign: "center",
  borderRadius : "20px",
  padding : "20px",
  margin : "20px"
}

let greeting = "";
const helloStyle = {
};
if (hour < 12) {
  greeting = "Good Morning";
  helloStyle.color = "Yellow";
}
else if (hour >= 12 && hour < 19){
  greeting = "Good Afternoon";
  helloStyle.color = "Green";
}
else if (hour > 19){
  greeting = "Good Night";
  helloStyle.color = "Blue"
}
// this is react fragment <> if we use div it creats extra space in website so we use react fragments
ReactDOM.render(<> 
    <div style={hello}>
      <h1>Hello Sir,<span style={helloStyle}>{greeting}</span></h1>
    </div>
    </>,
    document.getElementById('root'));
