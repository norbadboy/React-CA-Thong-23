import { Link } from "react-router-dom";
import "../styles/sass/header.scss";
import { Container, Navbar } from "react-bootstrap";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm" className="nav">
        <Container>
          <Navbar.Brand className="brand">
            <Link to="/">Ecom Store</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to="/">Home</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/contact">Contact</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/cart">Cart</Link>
            </Navbar.Text>
          </Navbar.Collapse>
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
