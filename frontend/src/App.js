import React from "react";
import "./App.css";
import { Footer } from "./Footer/Footer";
import { Hero } from "./Hero/Hero";
import { JobTemplate } from "./JobTemplate/JobTemplate";
import { Navbar } from "./Navbar/Navbar";

import "./style.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <JobTemplate jobCategory="All" />
      <Footer />
    </>
  );
}

export default App;
