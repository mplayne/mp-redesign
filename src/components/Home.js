import React from "react";
import UpcomingShows from "../components/UpcomingShows";
import Video from "../components/Video";
import Container from "react-bootstrap/Container";
import PreviousShows from "./previous-shows";
import Banner from "./Banner";

export default function Home() {
  return (
    <Container>
      <div className="mt-5">
        <Banner />
      </div>
      <Video />
      <div id="shows-section">
        <PreviousShows />
        <UpcomingShows />
      </div>
    </Container>
  );
}
