import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <Link
          to="/"
          className="navbar-logo"
        >
          JobBoard
        </Link>

        <div className="navbar-links">
          <Link to="/">
            Offerte
          </Link>

          <Link to="/">
            Aziende
          </Link>

          <Link to="/">
            Categorie
          </Link>
        </div>

        <div className="navbar-language">
          <button type="button">
            IT
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar