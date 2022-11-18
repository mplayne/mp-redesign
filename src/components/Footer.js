import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer d-flex flex-column text-center ">
      <div className="mt-4">
        <a href="https://www.facebook.com/mplayne/">
          <BsFacebook size={33} className="fb-icon-foot mx-2" />
        </a>
        <a href="https://www.instagram.com/matt_playne/">
          <BsInstagram size={33} className="insta-icon-foot mx-2" />
        </a>
      </div>
      <a className="footer-text mt-2" href="/contact">
        Webiste By Matt Playne
      </a>
      <p className="rights-text">All Rights Reserved</p>
    </div>
  );
}
