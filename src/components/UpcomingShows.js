import { Container, Row, Col } from "react-bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function UpcomingShows() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="upcoming-shows">
      <Row>
        <Col>
          <h2 data-aos="fade-right" className="shows-banner">
            Upcoming Shows
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 data-aos="fade-right" className="shows-sub-banner">
            It's Patio Season!
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="shows_container_one">
            <h3 className="month">June</h3>
            <ul className="shows_list">
              <li className="shows_list-item mt-4 ">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">06•01•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">Private Event</span>
                    <span className="shows_location">Midland, ON</span>
                    <span className="shows_time">8:00 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">06•02•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">The Boathouse Eatery</span>
                    <span className="shows_location">Midland, ON</span>
                    <span className="shows_time">5:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">06•08•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">Harbour House</span>
                    <span className="shows_location">Honey Harbour, ON</span>
                    <span className="shows_time">6:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">06•09•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">The Boathouse Eatery</span>
                    <span className="shows_location">Midland, ON</span>
                    <span className="shows_time">5:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">06•16•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">The Boathouse Eatery</span>
                    <span className="shows_location">Midland, ON</span>
                    <span className="shows_time">5:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">06•22•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">Ruff Mudder</span>
                    <span className="shows_location">Springwater, ON</span>
                    <span className="shows_time">11:00 AM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">06•22•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">Harbour House</span>
                    <span className="shows_location">Honey Harbour, ON</span>
                    <span className="shows_time">6:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">06•23•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">The Boathouse Eatery</span>
                    <span className="shows_location">Midland, ON</span>
                    <span className="shows_time">5:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">06•30•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">The Boathouse Eatery</span>
                    <span className="shows_location">Midland, ON</span>
                    <span className="shows_time">5:30 PM</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="shows_container_two">
            <h3 className="month">July</h3>
            <ul className="shows_list">
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">07•06•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">Harbour House</span>
                    <span className="shows_location">Honey Harbour, ON</span>
                    <span className="shows_time">6:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">07•07•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">The Boathouse Eatery</span>
                    <span className="shows_location">Midland, ON</span>
                    <span className="shows_time">5:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">07•14•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">The Boathouse Eatery</span>
                    <span className="shows_location">Midland, ON</span>
                    <span className="shows_time">5:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">07•20•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">Harbour House</span>
                    <span className="shows_location">Honey Harbour, ON</span>
                    <span className="shows_time">6:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">07•21•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">The Boathouse Eatery</span>
                    <span className="shows_location">Midland, ON</span>
                    <span className="shows_time">5:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">07•28•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">The Boathouse Eatery</span>
                    <span className="shows_location">Midland, ON</span>
                    <span className="shows_time">5:30 PM</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="shows_container_three">
            <h3 className="month">August</h3>
            <ul className="shows_list">
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">08•03•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">Harbour House</span>
                    <span className="shows_location">Honey Harbour, ON</span>
                    <span className="shows_time">6:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">08•04•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">The Boathouse Eatery</span>
                    <span className="shows_location">Midland, ON</span>
                    <span className="shows_time">5:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">08•11•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">The Boathouse Eatery</span>
                    <span className="shows_location">Midland, ON</span>
                    <span className="shows_time">5:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">08•17•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">Harbour House</span>
                    <span className="shows_location">Honey Harbour, ON</span>
                    <span className="shows_time">6:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">08•18•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">The Boathouse Eatery</span>
                    <span className="shows_location">Midland, ON</span>
                    <span className="shows_time">5:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">08•25•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">The Boathouse Eatery</span>
                    <span className="shows_location">Midland, ON</span>
                    <span className="shows_time">5:30 PM</span>
                  </a>
                </div>
              </li>
              <li className="shows_list-item mt-4">
                <div className="shows_col shows_col-date">
                  <div className="shows_date">08•31•2024</div>
                </div>
                <div className="shows_col shows_col-location">
                  <a className="shows_location_link" href="/">
                    <span className="shows_venue">Harbour House</span>
                    <span className="shows_location">Honey Harbour, ON</span>
                    <span className="shows_time">6:30 PM</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}
