import React from "react";
import { Hero } from "../Hero/Hero";
import { JobTemplate } from "../JobTemplate/JobTemplate";
import { Navbar } from "../Navbar/Navbar";
export const Designer = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <JobTemplate jobCategory="Designer" />
    </>
  );
};
