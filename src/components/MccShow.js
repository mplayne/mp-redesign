import { Row, Col } from "react-bootstrap";

function MccShow() {
  return (
    <>
      <Row>
        <Col>
          <h3>Live at Midland Cultural Center - Midland ON - 03/21/2023 </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="shows-video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zEPrbg9FcX4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default MccShow;
