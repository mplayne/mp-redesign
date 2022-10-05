import { Container } from "react-bootstrap";


export default function UpcomingShows() {
    return(
        <Container className="upcoming-shows">
            <h3 className="text-center mb-4">Upcoming Shows</h3>
            <a className="text-decoration-none show-text" href="/">
                <ul className="center-list d-flex justify-content-between">
                    <li>01/21/2023</li>
                    <li>Midland Public Library</li>
                    <li>Midland,ON</li> 
                </ul>
                </a>
                <a className="text-decoration-none show-text" href="/">
                <ul className="center-list d-flex justify-content-between">
                    <li>01/21/2023</li>
                    <li>Midland Public Library</li>
                    <li>Midland,ON</li> 
                </ul>
                </a>
                 <a className="text-decoration-none show-text" href="/">
                <ul className="center-list d-flex justify-content-between">
                    <li>01/21/2023</li>
                    <li>Midland Public Library</li>
                    <li>Midland,ON</li> 
                </ul>
                </a>
            <hr />
         </Container>
    )
}