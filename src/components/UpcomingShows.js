import { Container, Row, Col } from "react-bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function UpcomingShows() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container className="upcoming-shows">
      <Row>
        <Col>
          <h2
            data-aos="fade-right"
            className="d-flex justify-content-center mb-4 shows-banner"
          >
            Upcoming Shows
          </h2>
        </Col>
      </Row>

      <div className="m-5">
        <a
          className="text-decoration-none show-text "
          href="https://www.facebook.com/EventHorizonHobbiesCA"
        >
          <ul className="center-list d-flex justify-content-between">
            <li>01•17•2024</li>
            <li>Event Horizon Hobbies | Midland,ON </li>
            <li>7:00pm</li>
          </ul>
        </a>
        <a
          className="text-decoration-none show-text "
          href="https://www.boathouseeatery.com/LiveMusic"
        >
          <ul className="center-list d-flex justify-content-between mt-3">
            <li>01•26•2024</li>
            <li>Boathouse Eatery | Midland,ON </li>
            <li>7:00pm</li>
          </ul>
        </a>
      </div>
    </Container>
  );
}
