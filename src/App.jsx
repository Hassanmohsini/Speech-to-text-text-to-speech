import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import SpeechToText from "./components/SpeechToText.jsx";
import TextToSpeech from "./components/TextToSpeech.jsx";

// New components for Home, Contact Us, and About Us pages
const Home = () => <h1>Home Page</h1>;
const ContactUs = () => <h1>Contact Us Page</h1>;
const AboutUs = () => <h1>About Us Page</h1>;

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/go-to-app">Go To App</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/go-to-app" element={<GoToApp />} />
          <Route path="/app/text-to-speech" element={<TextToSpeech />} />
          <Route path="/app/speech-to-text" element={<SpeechToText />} />
        </Routes>
      </main>
    </>
  );
}

// Component for Go To App page
const GoToApp = () => (
  <>
    <h1>Go To App</h1>
    <ul>
      <li>
        <Link to="/app/text-to-speech">Text To Speech</Link>
      </li>
      <li>
        <Link to="/app/speech-to-text">Speech To Text</Link>
      </li>
    </ul>
  </>
);

export default App;
