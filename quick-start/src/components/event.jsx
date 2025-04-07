import "./myglobal.css"

function MyButton() {
    function handleClick() {
        alert("You clicked me!");
    }

    return (
        <div
            className="box"
        >
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
}

export default MyButton