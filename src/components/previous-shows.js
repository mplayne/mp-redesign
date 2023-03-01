import { Container, Row, Col } from "react-bootstrap";
import PrivateShow from "./PrivateShow";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function PreviousShows() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center ">
          <h2 data-aos="fade-left" className="shows-banner">
            Previous Shows
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <PrivateShow />
        </Col>
      </Row>
    </Container>
  );
}

export default PreviousShows;
