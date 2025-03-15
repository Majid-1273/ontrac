import React from "react";
import { Helmet } from "react-helmet-async";
import PageBanner from "../components/Services/PageBanner";
import ServiceHero from "../components/Services/ServiceHero";
import OurServices from "../components/Services/OurServices";

function Services() {
  return (
    <div>
      <Helmet>
        <title>Services - Ontrac</title>
        <meta name="description" content="Explore Ontrac's wide range of IT services designed to empower your business with innovative solutions." />
      </Helmet>

      <PageBanner />
      {/* <ServiceHero/> */}
      <OurServices />
    </div>
  );
}

export default Services;
