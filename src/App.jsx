import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import SpeechToText from "./components/SpeechToText.jsx";
import TextToSpeech from "./components/TextToSpeech.jsx";

function App() {
  return (
    <>
      <nav>
        <Link to="text">Text to speech</Link>
        <Link to="speech">Speech to text</Link>
      </nav>
      <main>
        <Routes>
          <Route path="text" element={<TextToSpeech />} />
          <Route path="speech" element={<SpeechToText />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
