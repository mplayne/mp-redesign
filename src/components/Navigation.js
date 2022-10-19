import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Navigation() {
  return (
    <Navbar className="color-nav" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="nav-logo" href="/">
          MATT
          <br /> PLAYNE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="nav-hover" href="/booking">
              Booking
            </Nav.Link>
            <Nav.Link className="nav-hover" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav.Link href="https://www.facebook.com/mplayne/">
            <BsFacebook size={33} className="fb-icon" />
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com/matt_playne/">
            <BsInstagram size={33} className="insta-icon" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
