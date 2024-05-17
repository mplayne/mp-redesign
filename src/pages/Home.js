import React from "react";
import UpcomingShows from "../components/UpcomingShows";
import FeatureVideo from "../components/FeatureVideo";

import Banner from "../components/Banner";
import LibraryShow from "../components/LibraryShow";
import LeitchsShow from "../components/LeitchsShow";
import RecentShows from "../components/RecentShows";
import MccShow from "../components/MccShow";

export default function Home() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <FeatureVideo />
      </div>

      <div>
        <UpcomingShows />
      </div>
    </div>
  );
}
