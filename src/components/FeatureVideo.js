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
    <div className="white-background">
      <div className="video-container ">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/GN-BfRMJGLU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="video"
        ></iframe>
      </div>
    </div>
  );
}
/*

<Row>
<div className="mt-2 d-flex justify-content-center">
  <Button
    className="btn-lg  booking-btn rounded-pill "
    href="/booking"
  >
    <b>Book Live Music</b>
  </Button>
</div>
</Row>
 <Container className="booking-btn-container">
        <Row>
          <div></div>
        </Row>
      </Container>
*/
