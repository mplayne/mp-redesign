import { Row, Col } from "react-bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function RecentShows() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-center ">
          <h2 data-aos="fade-left" className="shows-banner">
            Recent Shows
          </h2>
        </Col>
      </Row>
    </>
  );
}

export default RecentShows;
