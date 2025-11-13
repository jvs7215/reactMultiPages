import { useState } from 'react'

function About() {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <div className="container">
      <h1 className="title">About This Project</h1>
      
      <div className="content">
        <p className="paragraph">
          This is a React application with multiple pages. I'm learning how to use
          React Router to navigate between different pages.
        </p>
        <p className="paragraph">
          Below is a simple React component that uses state.
        </p>
      </div>

      <div className="toggle-box">
        <h2 className="toggle-title">Toggle Example</h2>
        <button className="toggle-button" onClick={() => setIsToggled(!isToggled)}>
          {isToggled ? 'Hide' : 'Show'} Message
        </button>
        {isToggled && (
          <p className="message">
            This message appears when you click the button!
          </p>
        )}
      </div>
    </div>
  )
}

export default About
