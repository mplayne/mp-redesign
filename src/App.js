import "./App.css";
import React from "react";
//components
import Home from "./components/Home";
import Booking from "./components/booking";
import Contact from "./components/contact";

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
        </Routes>
      </Layout>
    </main>
  );
}
