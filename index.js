//ReactDOM.render(<ul><li>idli</li><li>vada pav</li></ul>, document.getElementById("root")) 
// ReactDOM.render(
//     <div>
//         <MainContent/>
//     </div>,document.getElementById('root')
// )
// function MainContent(){
//     return(
//         <h1>I'm learning React</h1>
//     )
// }
// const  nav=(
//     <div>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="50px"></img>
//         <h1>Fun facts about React</h1>
//         <ol>
//             <li>I also dont know</li>
//             <li>Learning this now</li>
//             <li>Seem fine till now</li>
//         </ol>
//     </div>
// )
// ReactDOM.render(nav,document.getElementById("root"))
import React from "react"
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";

function App(){
    return(
        <div> 
        <Header />
        <h1>Reason to like react js</h1>
        <ul>
            <li>it is fun to learning</li>
            <li>nice things we can learn</li>
            <li>I got to get a job</li>
        </ul>
        <Footer />
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))