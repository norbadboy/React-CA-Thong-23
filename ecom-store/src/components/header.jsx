import { Link } from "react-router-dom";
import "../styles/sass/header.scss";
import { Container, Navbar } from "react-bootstrap";
import ShoppingCartIcon from "./cart";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="nav" fixed="top">
        <Container className="d-flex justify-content-space-between">
          <div className="d-flex align-items-center">
            <Navbar.Brand className="brand">
              <Link to="/">Ecom Store</Link>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="d-flex justify-content-end" style={{ fontSize: 25 }}>
              <Link to="/">Home</Link>
            </Navbar.Text>
            <Navbar.Text className="d-flex justify-content-end ms-4" style={{ fontSize: 25 }}>
              <Link to="/contact">Contact</Link>
            </Navbar.Text>
            <Navbar.Text className="d-flex justify-content-end ms-4" style={{ fontSize: 25 }}>
              <Link to="/cart">
                <ShoppingCartIcon></ShoppingCartIcon>
              </Link>
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
