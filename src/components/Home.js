import React from "react";

import EmailCaptureForm from "../components/EmailCaptureForm";
import UpcomingShows from "../components/UpcomingShows";
import Video from "../components/Video";
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <Container>
      <Video />

      <UpcomingShows />
      <EmailCaptureForm />
    </Container>
  );
}
