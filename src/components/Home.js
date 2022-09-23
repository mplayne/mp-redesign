import React from 'react';
import BookingCards from "../components/BookingCards";
import EmailCaptureForm from "../components/EmailCaptureForm";
import UpcomingShows from "../components/UpcomingShows";
import Video from "../components/Video";
import Container from 'react-bootstrap/Container';

export default function Home() {
    return(
        <Container>
        <Video />
        <BookingCards />
        <UpcomingShows />
        <EmailCaptureForm />
        </Container>
    )
}