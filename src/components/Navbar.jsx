import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">React Multi-Site</Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
