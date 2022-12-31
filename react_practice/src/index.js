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
const time = [date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()]
const link = "https://csi.dbit.in"
// this is react fragment <> if we use div it creats extra space in website so we use react fragments
ReactDOM.render(<> 
    {/* challenge 1
    <h2> This is my top 5 favourite Netflix show </h2>
    <ol>
        <li>Dark</li>
        <p>this series is best of Netflix up to date. It is scifi series with a great plot and a mistery    
        </p>
        <li>Stranger things</li>
        <p>It is also scifi series with interesting story and you will enjoy it.</p>
        <li>Money heist</li>
        <p>It is a great show that shows the story of group theifs about their heist S3 was not that good either it would be on the second slot</p>
        <li>Behind her eyes</li>
        <p>this show is literally so underated show this show has a great plot twist it would catch you off graud</p>
        <li>Arcane</li>
        <p>Arcane is also good show with the great characters and good animation.</p>
    </ol> */}
    <h1 className="heading">Hello, My name is {`${name} ${surname}`}</h1>
    {/* <p>Todays date is {`${day}-${month}-${year}`}</p>
    <p>Todays date is {`${localdate}`}</p>
    <p> And Time is {time}</p>
    <p> And Time is {localtime}</p> */}
    <a href={link} target="_blank">
    <img className="Image" src="https://picsum.photos/200/300" alt=""/>
    </a>
    </>,
    document.getElementById('root'));
