import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function UpcomingShows() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container className="upcoming-shows">
      <h3 data-aos="zoom-in" className="text-center mb-4 shows-banner">
        Upcoming Shows
      </h3>

      <div className="d-flex justify-content-center">
        <Button
          className="text-center d-flex align-item-center"
          variant="warning"
        >
          <a className="book-btn" href="/booking">
            Book Live Music
          </a>
        </Button>
      </div>

      {/* Individual Show List Item */}

      {/* <a className="text-decoration-none show-text" href="/">
        <ul className="center-list d-flex justify-content-between">
          <li>01/21/2023</li>
          <li>Midland Public Library</li>
          <li>Midland,ON</li>
        </ul>
      </a> */}
    </Container>
  );
}
