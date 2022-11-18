import React from "react";
import Container from "react-bootstrap/Container";
import MailIcon from "./MailIcon";
import PhoneIcon from "./PhoneIcon";

export default function Contact() {
  return (
    <Container>
      <div className="m-4">
        <h1>Get In Touch</h1>
        <hr width="25%"></hr>
        <div className="d-flex">
          <MailIcon />
          <a className="mx-2 contact-text" href="mailto: mattplayne@gmail.com">
            mattplayne@gmail.com
          </a>
        </div>

        <div className="d-flex">
          <PhoneIcon />
          <a href="tel:705-937-1421" className="mx-2 contact-text">
            705-937-1421
          </a>
        </div>
        <hr width="25%"></hr>
      </div>

      <div className="m-4">
        <iframe
          data-tally-src="https://tally.so/embed/3EqXVA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="80%"
          height="321"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Contact form
"
          className="contact-form"
        ></iframe>
      </div>
    </Container>
  );
}
