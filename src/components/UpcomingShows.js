import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function UpcomingShows() {
  return (
    <Container className="upcoming-shows">
      <h3 className="text-center mb-4">Upcoming Shows</h3>
      <div className="d-flex justify-content-center">
        <Button
          className="text-center d-flex align-item-center"
          variant="warning"
        >
          <a className="book-btn" href="/booking">
            Book Live Music
          </a>
        </Button>
      </div>

      {/* Individual Show List Item */}

      {/* <a className="text-decoration-none show-text" href="/">
        <ul className="center-list d-flex justify-content-between">
          <li>01/21/2023</li>
          <li>Midland Public Library</li>
          <li>Midland,ON</li>
        </ul>
      </a> */}
    </Container>
  );
}
