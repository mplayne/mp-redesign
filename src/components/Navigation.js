import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

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
    <div class="black-background">
      <Row>
        <div class="">
          <a href="/" style={{ textDecoration: "none" }} class="logo-main">
            <h1 class="mt-4">Matt Playne</h1>
          </a>
        </div>
      </Row>
      <Row>
        <div class="d-flex justify-content-center pb-2 mt-4">
          <a
            href="/booking"
            style={{ textDecoration: "none" }}
            class="nav-hover"
          >
            Booking
          </a>
          <a
            href="/contact"
            style={{ textDecoration: "none" }}
            class="nav-hover"
          >
            Contact
          </a>
        </div>
      </Row>
    </div>
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

/*

<Navbar className="color-nav" expand="lg" variant="light">
      <Row>
        <Navbar.Brand className="nav-logo" href="/">
          MATT PLAYNE
        </Navbar.Brand>
      </Row>
      <Row>
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
                href="#recent-shows-section"
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
      </Row>
    </Navbar>*/
