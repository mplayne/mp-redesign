import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function UpcomingShows() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container className="upcoming-shows">
      <h2
        data-aos="fade-right"
        className="d-flex justify-content-center mb-4 shows-banner"
      >
        Upcoming Shows
      </h2>
      {/* Individual Show List Item */}

      <a className="text-decoration-none show-text" href="/">
        <ul className="center-list d-flex justify-content-between">
          <li>01/21/2023</li>
          <li>Midland Public Library</li>
          <li>Midland,ON</li>
        </ul>
      </a>
    </Container>
  );
}
