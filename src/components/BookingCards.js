import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';


export default function BookingCards() {
    return (
        <Container className="booking-cards">
            <h1 className="d-flex justify-content-center ">Book The Best In Town</h1>
        <CardGroup className="gap-3 mt-4" >
      
            <Card className="text-center rounded card-bg" text="light">
            <Card.Img className="card-img" variant="top" src="/images/live.jpg" />
            <Card.Body>
              <a href="/" className="stretched-link text-decoration-none card-text"><Card.Title >Private Events</Card.Title></a>
            </Card.Body>
          </Card>

          <Card className="text-center rounded card-bg" text="light" >
            <Card.Img className="card-img" variant="top" src="/images/cafe.jpg" />
            <Card.Body>
            <a href="/" className="stretched-link text-decoration-none card-text">
              <Card.Title>Bars/Restaurants/Coffee Shops</Card.Title></a>
            </Card.Body>
          </Card>
          <Card className="text-center rounded card-bg" text="light">
            <Card.Img className="card-img" variant="top" src="/images/wedding.jpg" />
            <Card.Body className="card-body">
            <a href="/" className="stretched-link text-decoration-none card-text">
              <Card.Title className="big">Weddings</Card.Title></a>
            </Card.Body>
          </Card>
        </CardGroup>
        </Container>
      );
}