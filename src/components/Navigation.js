import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, []);

  return (
    <Navbar className="color-nav" expand="lg" variant="light">
      <Container className="my-2">
        <Navbar.Brand className="nav-logo" href="/">
          MATT
          <br /> PLAYNE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {isHomePage ? null : (
              <Nav.Link className="nav-hover" href="/">
                Home
              </Nav.Link>
            )}
            {isHomePage ? (
              <Nav.Link
                className="nav-hover"
                href="#previous-shows-section"
                onClick={handleSmoothScroll}
              >
                Shows
              </Nav.Link>
            ) : null}
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
function handleSmoothScroll(e) {
  e.preventDefault();
  const target = document.querySelector(e.target.hash);
  const offset = target.offsetTop;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}
