import React from "react";

export default function BtnComponent(props) {
    return (
        <div>
            <button className = 'btn' onClick={props.start}>Start</button>
            <button className = 'btn' onClick={props.stop}>Stop</button>
            <button className = 'btn' onClick={props.reset}>Reset</button>
        </div>
    );
}
