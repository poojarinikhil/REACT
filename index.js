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
function Header(){
    return(
        <header>
            <nav className="nav">
                <img className= "Image" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactimg" />
                <ul className = "nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
function Footer(){
    return(
    <footer className="footer">
    <p><small>@poojari development. All rights reserved</small></p>
    </footer>
    )
}
function Unorderlist(){
    return(
        <div>
        <Header/>
        <h1>Reason to like react js</h1>
        <ul>
            <li>it is fun to learning</li>
            <li>nice things we can learn</li>
            <li>I got to get a job</li>
        </ul>
        <Footer/>
        </div>
    )
}

ReactDOM.render(<Unorderlist/>,document.getElementById("root"))