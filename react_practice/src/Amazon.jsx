import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const Amazon = () =>{
    return (
        <Card
          imgsrc={Sdata[1].imgsrc}
          alt=""
          className="card_img"
          title={Sdata[1].title}
          sname={Sdata[1].sname}
          link={Sdata[1].link}
        />
      );
}
export default Amazon;