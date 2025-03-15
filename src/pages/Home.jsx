import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../components/Home/Banner";
import Enterprise from "../components/Home/Enterprise";
import Marquee from "../components/Home/Marquee";
import ServiceGrid from "../components/Home/ServiceGrid";
import OntracMethodology from "../components/Home/OntracMethodology";
import AboutUs from "../components/Home/AboutUs";
import Services from "../components/Home/Services";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Ontrac</title>
        <meta name="description" content="Welcome to Ontrac, your trusted partner in IT services. Discover our enterprise solutions, services, and methodologies." />
      </Helmet>

      <Banner />
      <Enterprise />
      <Marquee />
      <ServiceGrid />
      <OntracMethodology />
      <Services />
      <AboutUs />
    </div>
  );
};

export default Home;
