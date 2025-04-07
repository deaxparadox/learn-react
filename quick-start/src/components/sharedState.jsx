import { useState } from "react";

import "./myglobal.css"

function SharedStateButton({count, onClick}) {
    return (
        <button
            onClick={onClick}
        >
            Clicked {count} times
        </button>
    )
}

function ShareState() {
    const [count, setCount] = useState(0);

    function hanldeClick() {
        setCount(count + 1);
    }

    return (
        <div
            className="box"
        >
            <h1>Counters that update separately</h1>
            <SharedStateButton count={count} onClick={hanldeClick}/>
            <SharedStateButton count={count} onClick={hanldeClick}/>
        </div>
    )
}

export default ShareState