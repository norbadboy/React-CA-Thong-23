import { Link } from "react-router-dom";
import "../styles/sass/header.scss";
import { Container, Navbar } from "react-bootstrap";
import SearchBar from "./searchBar.jsx";
import { FaShoppingCart } from "react-icons/fa";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm" className="nav">
        <Container className="d-flex justify-content-space-between">
          <div className="d-flex align-items-center">
            <Navbar.Brand className="brand">
              <Link to="/">Ecom Store</Link>
            </Navbar.Brand>
          </div>
          <div>
            <SearchBar />
          </div>
          <Navbar.Toggle />
          <div>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Link to="/">Home</Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link to="/contact">Contact</Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link to="/cart">
                  <FaShoppingCart />
                </Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

function Header() {
  return (
    <header>
      <NavbarComponent />
    </header>
  );
}

export default Header;
