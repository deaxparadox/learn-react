import { useState } from "react";

import "./myglobal.css"

function MyButtonState() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div
            className="box"
        >
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
        </div>
    )
}

export default MyButtonState