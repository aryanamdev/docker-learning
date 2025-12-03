import { useState } from 'react'
import reactLogo from './assets/react.svg'
import dockerLogo from './assets/docker.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showCountText, setShowCountText] = useState(false)
  return (
    <>
      <div className='logo-container'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
         <a href="https://docs.docker.com/" target="_blank">
          <img src={dockerLogo} className="logo vite" alt="React logo" />
        </a>
      </div>
      <h1>Learning Docker, hell yeah!</h1>
      <div className="card">
        <button onClick={() => {
          setShowCountText(true)
        }}>
          count is {count} {showCountText ? `and will be ${0}` : null}
        </button>
      </div>
    </>
  )
}

export default App
