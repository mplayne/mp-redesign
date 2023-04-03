import "./App.css";
import React from "react";
//pages
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>;

export default function App() {
  return (
    <main>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<AboutMe />} />
        </Routes>
      </Layout>
    </main>
  );
}
