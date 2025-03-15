import React from "react";
import { Helmet } from "react-helmet-async";
import ContactSupport from "../components/contact/ContactSupport";
import NewsletterSubscription from "../components/contact/NewsletterSubscription";
import PageBanner from "../components/contact/PageBanner";
import Map from "../components/contact/Map";
import TalkUs from "../components/contact/TalkUs";

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Ontrac</title>
        <meta name="description" content="Get in touch with Ontrac. Contact our team for support, inquiries, or collaboration." />
      </Helmet>

      <PageBanner />
      <TalkUs />
      <ContactSupport />
      {/* <NewsletterSubscription /> */}
      {/* <Map /> */}
    </div>
  );
}

export default Contact;
