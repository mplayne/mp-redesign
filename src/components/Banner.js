import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import heroImg from "../img/promo1.jpg";
import { Container } from "react-bootstrap";
function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        class="d-flex justify-content-center "
      >
        <img
          src={heroImg}
          alt="logo"
          width="100%"
          style={{ borderRadius: "5%" }}
        />
      </div>
    </Container>
  );
}

export default Banner;

/* 
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

*/
