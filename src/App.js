/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './App.css';

function App() {

  var [text, setText] = useState("");
  var [cipher, setCipher] = useState("");
  var [realTime, setRealTime] = useState("Enable");
  var code, diff;

  const fun = (str) => {
    var temp = "", curr = str;
    for (var id = 0 ; id < curr.length ; id++ ) {
      code = curr.charCodeAt(id);
      if(code >= 65 && code <= 90) {
        diff = code - 65;
        temp += String.fromCharCode(90 - diff);
      }
      else if(code >= 97 && code <= 122) {
        diff = code - 97;
        temp += String.fromCharCode(122 - diff);
      }
      else temp += curr[id];
    }
    return temp;
  }

  const convert = (e) => {
    if(e.target.innerText === "Cipher") setCipher(fun(text));
    else setText(fun(cipher));
  }

  const changeRealTime = () => {
    if(realTime === "Enable") setRealTime("Disable");
    else setRealTime("Enable");
  }

  const changeText = (e) => {
    setText(e.target.value);
    if(realTime === "Disable") {
      setCipher(fun(e.target.value));
    }
  }

  const changeCipherText = (e) => {
    setCipher(e.target.value);
    if(realTime === "Disable") {
      setText(fun(e.target.value));
    }
  }

  return (
    <div className="container">
      <h3> Plain Text </h3>
      <textarea rows="15" cols="60" value={text} onChange={changeText}/>
      <div>
        <button onClick={convert}> Cipher </button>
        <button onClick={changeRealTime}> {realTime} Real Time </button>
        <button onClick={convert}> Decipher </button>
      </div>
      <h3> Ciphered Text </h3>
      <textarea rows="15" cols="60" value={cipher} onChange={changeCipherText}/>
    </div>
  );
}

export default App;
