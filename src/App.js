
import './App.css';
import React from "react";
//components
import BookingCards from "./components/BookingCards";
import EmailCaptureForm from "./components/EmailCaptureForm";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import UpcomingShows from "./components/UpcomingShows";
import Video from "./components/Video";
import Container from 'react-bootstrap/Container';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>

export default function App() {
  return (
    <main>
        <Navigation />
      <Container>
      <Video />
      <BookingCards />
      <UpcomingShows />
      <EmailCaptureForm />
      </Container>
      <Footer />
   
      
    </main>
  )
}