import React from "react";
import { Helmet } from "react-helmet-async";
import PageBanner from "../components/About/PageBanner";
import AboutHero from "../components/About/AboutHero";
import Process from "../components/About/Process";

function About() {
  return (
    <div>
      <Helmet>
        <title>About Us - Ontrac</title>
        <meta name="description" content="Learn about Ontrac and our commitment to authentic IT Service." />
      </Helmet>

      <PageBanner />
      <AboutHero />
      <Process />
    </div>
  );
}

export default About;
