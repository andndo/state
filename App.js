import './App.css';
import React, { useState, useRef, useEffect } from 'react';

function MinutesToHours(){
  const [amount, setAmount]=React.useState(0);
  const [flipped, setFlipped]=React.useState(false);
  const onChange = (event) => {
    setAmount(event.target.value)
  };
  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current)
  };
  return(
  <><div>
      <label htmlFor="minutes">Minutes</label>
      <input
        value={flipped ? amount * 60 : amount}
        id="minutes"
        type="number"
        placeholder="Minutes"
        onChange={onChange}
        disabled={flipped} />
        </div>
        <div>
      <label htmlFor="hours">Hours</label>
      <input
        value={flipped ? amount : Math.round(amount / 60)}
        id="hours"
        type="number"
        placeholder="Hours"
        onChange={onChange}
        disabled={!flipped} />
    </div>
    <button onClick={reset}>Reset</button>
    <button onClick={onFlip}>Flip</button></>
  );
}

function KmToMiles() {
  return <h3>KmToMiles</h3>
 }

function App() {
  const [index, setIndex] = React.useState();
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onselect}>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export default App;
