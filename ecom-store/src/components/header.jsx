import { Link } from "react-router-dom";
import "../styles/sass/header.scss";

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="logo">
        eCom Store
      </a>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Header;
