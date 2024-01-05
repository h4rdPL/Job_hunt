import React from "react";
import { Hero } from "../Hero/Hero";
import { JobTemplate } from "../JobTemplate/JobTemplate";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
export const FullTime = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <JobTemplate jobCategory="Fulltime" />
      <Footer />
    </>
  );
};
