import React from 'react'
import Banner from '../components/Home/Banner'
import Enterprise from '../components/Home/Enterprise'
import Marquee from '../components/Home/Marquee'
import ServiceGrid from '../components/Home/ServiceGrid'
import OntracMethodology from '../components/Home/OntracMethodology'
import AboutUs from '../components/Home/AboutUs'
import Services from '../components/Home/Services'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Enterprise/>
      <Marquee/>
      <ServiceGrid/>
      <OntracMethodology/>
      <Services/>
      <AboutUs/>
    </div>
  )
}

export default Home
