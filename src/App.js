import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
var adjustInterval=undefined;
function App() {
  const [watch, setWatch] = useState(0);
  const[started, setStarted]=useState(false)
  const startWatch = () => {
    adjustInterval=setInterval(() => {
      //setWatch(watch+1)
      setWatch((x)=>x+1)
    },1000)
    setStarted(true)
  };
  const stopWatch = () => {
    clearInterval(adjustInterval)
    setStarted(false)
  };
  const resetWatch = () => {
    setWatch(0)
    clearInterval(adjustInterval)
    setStarted(false)
  };
  return (
    <div className="App">
      <h1>Start Stop Watch</h1>
      <h1>{watch}</h1>
      <button className="start" disabled={started} onClick={startWatch}>Start</button>
      <button className="stop" onClick={stopWatch}>Stop</button>
      <button className="reset" onClick={resetWatch}>Reset</button>
    </div>
  );
}

export default App;
