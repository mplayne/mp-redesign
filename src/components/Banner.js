import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container className="banner-text">
      <Row className="text-center m-2">
        <Col>
          <div data-aos="fade-down" data-aos-duration="3000">
            Canadian
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center text-center m-2">
        <Col>
          <div data-aos="fade-up" data-aos-duration="3000">
            Singer-Songwriter
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
