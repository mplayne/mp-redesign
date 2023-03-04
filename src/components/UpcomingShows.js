import { Container, Row, Col } from "react-bootstrap";
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

      {/* Individual Show List Item 
      <div className="m-5">
<a className="text-decoration-none show-text " href="/">
  <ul className="center-list d-flex justify-content-between">
    <li>01/21/2023</li>
    <li>Midland Public Library</li>
    <li>Midland,ON</li>
  </ul>
</a>
</div>
      */}
      <Row>
        <Col className="d-flex justify-content-center">
          <h5>Private Events | Bars & Restaurants | Weddings </h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className="booking-btn-container">
            <Row>
              <div className="mt-2 d-flex justify-content-center">
                <Button
                  className="btn-lg  booking-btn rounded-pill "
                  href="/booking"
                >
                  <b>Book Your Next Event</b>
                </Button>
              </div>
            </Row>
            <Row data-aos="fade-left" data-aos-duration="800" className="mt-2">
              <div className="text-center">
                <small>Dates Available 2023</small>
              </div>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
