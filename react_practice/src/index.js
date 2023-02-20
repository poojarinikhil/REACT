import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";
ReactDOM.render(
    <>
        <Card imgsrc={Sdata[0].imgsrc} alt="" className="card_img"
            title = {Sdata[0].title}
            sname = {Sdata[0].sname}
            link = {Sdata[0].link}
        />
        <Card imgsrc = {Sdata[1].imgsrc}
        title = {Sdata[1].title}
        sname = {Sdata[1].sname}
        link = {Sdata[1].link}
        />
    </>,
    document.getElementById('root')

)