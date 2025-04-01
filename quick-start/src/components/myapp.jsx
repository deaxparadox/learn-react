import "./myglobal.css"
import MyButton from "./button"

function Hello() {
    return <h1>Hello React</h1>
}

function MyApp() {
    return (
        <div>
            <div className="box">
                <Hello />
            </div>
            
            <div className="box">
                <h1>Button is nested</h1>
                <MyButton />
            </div>
        </div>
    )
}

export default MyApp