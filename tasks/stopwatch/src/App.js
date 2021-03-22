import React, {useState} from "react";
import DisplayComponent from "./Components/DisplayComponent";
import BtnComponent from "./Components/BtnComponent";

import "./App.css";

export default function App() {

  const [time, setTime] = useState({ms:0, sec:0, min:0, hours:0});
  const [interv, setInterv] = useState();

  let updatedMs = time.ms,
    updatedSec = time.sec, 
    updatedMin = time.min,
    updatedH = time.hours;

  function start() {
    run();
    setInterv(setInterval(run, 10));
  }

  function stop() {
    clearInterval(interv);
  }

  function reset() {
    clearInterval(interv);
    setTime({ms:0, sec:0, min:0, hours:0})
  }

  const run = () => {
    if (updatedMs === 99) {
      updatedSec++;
      updatedMs = 0;
    }
    if (updatedSec === 60) {
      updatedMin++;
      updatedSec = 0;
    }
    if (updatedMin === 60) {
      updatedH++;
      updatedMin = 0;
    }  
    updatedMs++;

    return setTime({ms:updatedMs, sec:updatedSec, min:updatedMin, hours:updatedH});
  };

  return ( 
  <div className = 'wrapper__stopwatch'>
    <DisplayComponent time = {time}/> 
    <BtnComponent start = {start} reset = {reset} stop = {stop}/> 
    </div>
  );
}
