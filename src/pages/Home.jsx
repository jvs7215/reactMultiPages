import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Home() {
  return (
    <div className="container">
      <h1 className="title">Jessica Salemme</h1>
      <p className="subtitle">Web Development Portfolio</p>

      <div className="content">
        <p className="paragraph">
          Welcome to my portfolio website. This site showcases my web development projects and demonstrates my skills with interactive technologies including React, JavaScript, ThreeJS, SVG, and CSS animations.
        </p>
        <p className="paragraph">
          Explore the Projects page to see my work, including a digitization resource guide and interactive web applications.
        </p>
      </div>
    </div>
  )
}

export default Home
