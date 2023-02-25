import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";
function ncard(val){
    return(
        <Card imgsrc={val.imgsrc} alt="" className="card_img"
            title = {val.title}
            sname = {val.sname}
            link = {val.link}
        />
    )
}
ReactDOM.render(
    <>
        {Sdata.map(ncard)}
    </>,
    document.getElementById('root')

)