import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand hit-and-run">
          Groundworks
        </Link>

        <nav className="nav-links">
          <Link to="/services" className="placard">Services</Link>
          <Link to="/about" className="placard">About</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/contact" className="button button-secondary">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;