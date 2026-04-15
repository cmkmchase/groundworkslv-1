import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand hit-and-run">
          Groundworks LV
        </Link>

        <nav className="nav-links">
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
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