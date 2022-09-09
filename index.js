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
const  nav=(
    <nav>
        <h1>NP</h1>
        <ul>
            <li>About me</li>
            <li>Projects</li>
            <li>Contacts</li>
        </ul>
    </nav>
)
ReactDOM.render(nav,document.getElementById("root"))