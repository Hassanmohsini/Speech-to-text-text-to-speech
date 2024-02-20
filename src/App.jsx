import { useState } from "react";
import "./App.css";
import SpeechToText from "./components/SpeechToText.jsx";
import TextToSpeech from "./components/TextToSpeech.jsx";
import Logo from "./assets/Logo.jpg";
function App() {
  return (
    <>
      <div className="header">
        <img src={Logo} alt="" />
        <ul>
          <li>
            <TextToSpeech />
          </li>
          <li>
            <SpeechToText />
          </li>
        </ul>
      </div>
      <div className="body">
        <h1>hello</h1>
      </div>
    </>
  );
}

export default App;
