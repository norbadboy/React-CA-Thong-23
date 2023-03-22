import { Link } from "react-router-dom";
import "../styles/sass/header.scss";
import { Button, Container, Navbar, Modal } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar expand="sm" className="nav">
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
          <Button> Cart 0 It</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
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
