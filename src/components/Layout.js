import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <div className="booking-container"> {children}</div>
      <Footer />
    </>
  );
}
