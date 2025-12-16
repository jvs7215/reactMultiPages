import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">Jessica Salemme</Link>
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav-link">Projects</NavLink>
            </li>
          </ul>
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
