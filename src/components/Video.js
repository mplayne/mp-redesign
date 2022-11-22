import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Video() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <div className="video-container">
        <iframe
          width="856"
          height="486"
          src="https://www.youtube.com/embed/GN-BfRMJGLU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Container className="mt-5">
        <Row>
          <div className="mt-2 d-flex justify-content-center">
            <Button
              className="btn booking-btn rounded-pill col-6"
              href="/booking"
            >
              <b>Book Live Music</b>
            </Button>
          </div>
        </Row>
        <Row data-aos="fade-left" data-aos-duration="800" className="mt-2">
          <div className="text-center">
            <small>Dates Available 2022/2023</small>
          </div>
        </Row>
      </Container>
    </Container>
  );
}
