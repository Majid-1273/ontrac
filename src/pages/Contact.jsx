import React, { useEffect, useState } from "react";
import ContactSupport from "../components/contact/ContactSupport";
import NewsletterSubscription from "../components/contact/NewsletterSubscription";
import PageBanner from "../components/contact/PageBanner";
import Map from "../components/contact/Map";
import TalkUs from "../components/contact/TalkUs";

function Contact() {
  return (
    <div>
      <PageBanner />
      <TalkUs/>
      <ContactSupport />
      {/* <NewsletterSubscription /> */}
      <Map />
    </div>
  );
}

export default Contact;
