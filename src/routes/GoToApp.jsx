import React from "react";
import { Link } from "react-router-dom";
import tts from "../assets/texttospeech.png"
import stt from "../assets/speechtotext.png"
function GoToApp() {
  return (
    <>
      <h1>Text to speech & Speech to text</h1>

      <ul>
        <li>
          <Link to="/app/text-to-speech"><img src={tts} alt="text to speech icon"/></Link>
        </li>
        <li>
          <Link to="/app/speech-to-text"><img src={stt} alt="speech to text icon"/></Link>
        </li>
      </ul>
    </>
  );
}

export default GoToApp;
