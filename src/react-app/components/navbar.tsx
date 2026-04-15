import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner" color="white">
        <Link to="/" className="brand hit-and-run">
          Groundworks
        </Link>

        <nav className="nav-links">
          <Link to="/services" className="placard" color="white">Services</Link>
          <Link to="/about" className="placard" color="white">About</Link>
          <Link to="/case-studies" className="placard" color="white">Case Studies</Link>
          <Link to="/contact" className="placard button button-secondary">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;