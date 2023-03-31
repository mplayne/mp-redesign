import { Row, Col, CarouselItem } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

function LibraryShow() {
  return (
    <>
      <Row>
        <Col>
          <h3>Live at Midland Public Library - Midland ON - 01/21/2023 </h3>
        </Col>
      </Row>
      <Row>
        <Carousel className="my-carousel my-carousel-light" variant="dark">
          <CarouselItem>
            <Col>
              <div className="shows-video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/OTwgNrIDCgQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
          </CarouselItem>
          <CarouselItem>
            <Col>
              <div className="shows-video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/VgwlwJFr-nA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
          </CarouselItem>
        </Carousel>
      </Row>
    </>
  );
}

export default LibraryShow;
