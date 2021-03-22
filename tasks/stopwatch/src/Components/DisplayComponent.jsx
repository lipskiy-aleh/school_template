import React from "react";

export default function DisplayComponent(props) {
    return (
        <div className = 'stopwatch__display'>
            <span className = 'time'>{(props.time.hours >= 10) ? props.time.hours : "0" + props.time.hours}&nbsp;:&nbsp;</span> 
            <span className = 'time'>{(props.time.min >= 10) ? props.time.min : "0" + props.time.min}&nbsp;:&nbsp;</span> 
            <span className = 'time'>{(props.time.sec >= 10) ? props.time.sec : "0" + props.time.sec}&nbsp;:&nbsp;</span> 
            <span className = 'time'>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span>
        </div>
    );

}