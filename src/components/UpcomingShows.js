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
      {/* 
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
            <li>05/12/2023</li>
            <li>Event Horizon Hobbies | Midland,ON </li>
            <li>7:00pm-9:00pm</li>
          </ul>
        </a>
        <a
          className="text-decoration-none show-text "
          href="https://www.midlandculturalcentre.com/events"
        >
          <ul className="center-list d-flex justify-content-between mt-3">
            <li>05/16/2023</li>
            <li>Midland Cultural Center | Midland,ON </li>
            <li>7:00pm-9:00pm</li>
          </ul>
        </a>
        <a
          className="text-decoration-none show-text "
          href="https://www.facebook.com/EventHorizonHobbiesCA"
        >
          <ul className="center-list d-flex justify-content-between">
            <li>05/26/2023</li>
            <li>Event Horizon Hobbies | Midland,ON </li>
            <li>7:00pm-9:00pm</li>
          </ul>
        </a>
      </div>
      */}
    </Container>
  );
}
