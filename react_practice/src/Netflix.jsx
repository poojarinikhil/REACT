import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const Netflix = () =>{
    return (
        <Card
          imgsrc={Sdata[0].imgsrc}
          alt=""
          className="card_img"
          title={Sdata[0].title}
          sname={Sdata[0].sname}
          link={Sdata[0].link}
        />
      );
}
export default Netflix;