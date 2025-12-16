import { useState } from 'react'

function About() {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <div className="container">
      <h1 className="title">About Me</h1>

      <div className="content">
        <p className="paragraph">
          I'm a student at Penn State Behrend studying web development and interactive technologies. This portfolio demonstrates my skills in React, JavaScript, CSS animations, and SVG graphics.
        </p>
        <p className="paragraph">
          My work focuses on creating accessible, functional web applications with clean design and interactive elements.
        </p>
      </div>

      <div className="svg-animation-box">
        <h2 className="toggle-title">Interactive SVG Animation</h2>
        <p className="paragraph" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Click the circle to toggle the animation
        </p>

        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="interactive-svg"
          onClick={() => setIsToggled(!isToggled)}
          role="button"
          aria-label="Toggle animation"
          tabIndex="0"
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsToggled(!isToggled)
            }
          }}
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#C8A2D8', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#F5A9D0', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          <circle
            cx="150"
            cy="150"
            r="80"
            fill="url(#grad1)"
            className={isToggled ? 'svg-circle-animated' : 'svg-circle'}
          />

          <text
            x="150"
            y="160"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="bold"
          >
            {isToggled ? 'Active!' : 'Click Me'}
          </text>

          {isToggled && (
            <>
              <circle cx="150" cy="150" r="100" fill="none" stroke="#C8A2D8" strokeWidth="2" className="pulse-ring" />
              <circle cx="150" cy="150" r="120" fill="none" stroke="#F5A9D0" strokeWidth="2" className="pulse-ring-delayed" />
            </>
          )}
        </svg>
      </div>
    </div>
  )
}

export default About
