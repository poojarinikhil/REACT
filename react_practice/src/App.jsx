import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import {Footer,add,div,multi,sub} from "./Footer";

function App(){
    return(
    <>
    <Heading></Heading>
    <Para/>
    <ul>
        <li>sum of two number is {add(40,45)}</li>
        <li>sub of two number is {sub(40,45)}</li>
        <li>mul of two number is {multi(40,45)}</li>
        <li>div of two number is {div(40,45)}</li>
    </ul>
    <Footer></Footer>
    </>
    )
}
export default App;