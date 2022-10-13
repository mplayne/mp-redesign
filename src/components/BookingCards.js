import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';


export default function BookingCards() {
    return (
        <Container className="booking-cards">
            <h1 className="d-flex justify-content-center ">Book The Best In Town</h1>
        <CardGroup className="gap-4 mt-4" >
      
            <Card className="text-center card-bg" text="light">
            <Card.Img  className="card-img" variant="top" src="/images/live.jpg" />
            <Card.Body className="d-flex align-items-center justify-content-center">
              <a href="/" className="stretched-link text-decoration-none card-text"><Card.Title>Private Events</Card.Title></a>
            </Card.Body>
          </Card>

          <Card className="text-center card-bg" text="light" >
            <Card.Img className="card-img" variant="top" src="/images/cafe.jpg" />
            <Card.Body className="d-flex align-items-center justify-content-center">
            <a href="/" className="stretched-link text-decoration-none card-text">
              <Card.Title>Bars &middot; Restaurants &middot; Cafes</Card.Title></a>
            </Card.Body>
          </Card>
          <Card className="text-center rounded card-bg" text="light">
            <Card.Img className="card-img" variant="top" src="/images/wedding.jpg" />
            <Card.Body className="d-flex align-items-center justify-content-center">
            <a href="/" className="stretched-link text-decoration-none card-text">
              <Card.Title>Weddings</Card.Title></a>
            </Card.Body>
          </Card>
        </CardGroup>
        </Container>
      );
}