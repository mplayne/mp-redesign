import { Container, Row, Col } from "react-bootstrap";

function PrivateShow() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Live Music at The Mill - Coldwater ON - 09/03/2022 </h3>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div className="shows-video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/fz5yrOvluE8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
        <Col md={6}>
          <div className="shows-video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5hogb3pAZfk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PrivateShow;
