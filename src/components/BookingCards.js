import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function BookingCards() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container className="booking-cards">
      <h2
        data-aos="fade-left"
        data-aos-duration="800"
        className="d-flex justify-content-center booking-banner mb-5"
      >
        Elevate your event with Live Music
      </h2>
      <CardGroup className="gap-4 d-flex justify-content-center">
        <Card
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-center card-bg"
          text="light"
        >
          <Card.Img className="card-img" variant="top" src="/images/live.jpg" />
          <Card.Body className="d-flex align-items-center justify-content-center">
            <a
              href="/Booking"
              className="stretched-link text-decoration-none card-text"
            >
              <Card.Title className="card-titles">Private Events</Card.Title>
            </a>
          </Card.Body>
        </Card>

        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-center card-bg"
          text="light"
        >
          <Card.Img className="card-img" variant="top" src="/images/cafe.jpg" />
          <Card.Body className="d-flex align-items-center justify-content-center">
            <a
              href="/Booking"
              className="stretched-link text-decoration-none card-text"
            >
              <Card.Title className="card-titles">
                Bars &middot; Restaurants &middot; Cafes
              </Card.Title>
            </a>
          </Card.Body>
        </Card>
        <Card
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-center rounded card-bg"
          text="light"
        >
          <Card.Img
            className="card-img"
            variant="top"
            src="/images/wedding.jpg"
          />
          <Card.Body className="d-flex align-items-center justify-content-center">
            <a
              href="/booking"
              className="stretched-link text-decoration-none card-text"
            >
              <Card.Title className="card-titles">Weddings</Card.Title>
            </a>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}
