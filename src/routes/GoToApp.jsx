import React from 'react'
import { Link } from 'react-router-dom'


function GoToApp() {
  return (
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
  )
}

export default GoToApp