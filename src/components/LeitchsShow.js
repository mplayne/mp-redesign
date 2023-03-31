import { Row, Col, CarouselItem } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

function LeitchsShow() {
  return (
    <>
      <Row>
        <Col>
          <h3>Live at The Leitch's - Tiny ON - 09/09/2022 </h3>
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
                  src="https://www.youtube.com/embed/fz5yrOvluE8"
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
                  src="https://www.youtube.com/embed/5hogb3pAZfk"
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

export default LeitchsShow;
