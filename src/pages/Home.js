import React from "react";
import UpcomingShows from "../components/UpcomingShows";
import FeatureVideo from "../components/FeatureVideo";
import Container from "react-bootstrap/Container";
import Banner from "../components/Banner";
import LibraryShow from "../components/LibraryShow";
import LeitchsShow from "../components/LeitchsShow";
import RecentShows from "../components/RecentShows";
import MccShow from "../components/MccShow";

export default function Home() {
  return (
    <Container>
      <div className="mt-5">
        <Banner />
      </div>
      <FeatureVideo />
      <div id="previous-shows-section">
        <div className="recent-shows-header">
          <RecentShows />
        </div>
        <div className="show-three">
          <MccShow />
        </div>
        <div className="show-one">
          <LibraryShow />
        </div>
        <div className="show-two">
          <LeitchsShow />
        </div>
      </div>
      <div className="upcoming-shows-section">
        <UpcomingShows />
      </div>
    </Container>
  );
}
