import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../sections/Hero";
import Service from "../sections/Service";
import VideoSection from "../sections/VideoSection";
import Gallery from "../sections/Gallery";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Review from "../sections/Review";
import Footer from "../components/Footer";
import LocationSection from "../sections/Location";

const Home = () => {
  const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://vedikpoojan.com/#business",
  name: "Vedic Poojan",
  url: "https://vedikpoojan.com/",
  description:
    "Vedic Poojan provides Vedic Puja, Anushthan, Rudrabhishek, Navgraha Shanti Puja, Vastu Shanti Puja, Kaal Sarp Dosh Nivaran Puja, Durga Saptashati Path, Yagya Anushthan and other spiritual ritual services in Ujjain, Madhya Pradesh and nearby areas.",
  image: "https://vedikpoojan.com/favicon.png",
  telephone: "+917828318208",
  priceRange: "$$",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Ujjain",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Ujjain",
    },
    {
      "@type": "AdministrativeArea",
      name: "Madhya Pradesh",
    },
  ],

  serviceType: [
    "Vedic Puja",
    "Vedic Anushthan",
    "Kaal Sarp Dosh Nivaran Puja",
    "Mangal Bhat Puja",
    "Rudrabhishek",
    "Maha Rudrabhishek",
    "Navgraha Shanti Puja",
    "Vivah Yog Shanti Puja",
    "Santan Badha Nivaran",
    "Durga Saptashati Path",
    "Yagya Anushthan",
    "Vastu Shanti Puja",
    "Vedic Mantra",
  ],
};

  return (
    <>
      <Helmet>
  {/* Primary SEO */}
  <title>
    Vedic Pooja & Anushthan in Ujjain | Kaal Sarp Puja, Rudrabhishek & Vedic Services
  </title>

  <meta
    name="description"
    content="Vedic Pooja and Anushthan services in Ujjain, Madhya Pradesh including Kaal Sarp Dosh Nivaran Puja, Rudrabhishek, Mangal Bhat Puja, Navgraha Shanti, Vastu Shanti and other traditional Vedic rituals."
  />

  <meta
    name="keywords"
    content="Vedic Pooja Ujjain, Vedic Puja Ujjain, Vedic Anushthan Ujjain, Puja Services Ujjain, Kaal Sarp Puja Ujjain, Kaal Sarp Dosh Nivaran Ujjain, Kalsarp Dosh Puja, Mangal Bhat Puja Ujjain, Rudrabhishek Ujjain, Maha Rudrabhishek Ujjain, Navgraha Shanti Puja Ujjain, Vivah Yog Shanti Puja, Santan Badha Nivaran, Durga Saptashati Path Ujjain, Yagya Anushthan Ujjain, Vastu Shanti Puja Ujjain, Vedic Mantra, धार्मिक पूजा, वैदिक अनुष्ठान, कालसर्प दोष निवारण, मंगल भात पूजा, रुद्राभिषेक, नवग्रह शांति पूजा, वास्तु शांति पूजा"
  />

  <link
    rel="canonical"
    href="https://vedikpoojan.com/"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Vedic Pooja & Anushthan in Ujjain | Kaal Sarp Puja, Rudrabhishek & Vedic Services"
  />

  <meta
    property="og:description"
    content="Vedic Pooja and Anushthan services in Ujjain, Madhya Pradesh including Kaal Sarp Dosh Nivaran Puja, Rudrabhishek, Mangal Bhat Puja, Navgraha Shanti, Vastu Shanti and other traditional Vedic rituals."
  />

  <meta
    property="og:url"
    content="https://vedikpoojan.com/"
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:image"
    content="https://vedikpoojan.com/favicon.png"
  />

  {/* Twitter */}
  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Vedic Pooja & Anushthan in Ujjain | Kaal Sarp Puja, Rudrabhishek & Vedic Services"
  />

  <meta
    name="twitter:description"
    content="Vedic Pooja and Anushthan services in Ujjain, Madhya Pradesh including Kaal Sarp Dosh Nivaran Puja, Rudrabhishek, Mangal Bhat Puja, Navgraha Shanti, Vastu Shanti and other traditional Vedic rituals."
  />

  <meta
    name="twitter:image"
    content="https://vedikpoojan.com/favicon.png"
  />

  {/* LocalBusiness Schema */}
  <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>
</Helmet>

      <div>
        <Hero />
        <Service />
        <VideoSection />
        <Gallery />
        <About />
        <Contact />
        <Review />
        <LocationSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;

// import ActionStrip from "../sections/ActionStrip";
// import React from "react";
// import Hero from "../sections/Hero";
// import Service from "../sections/Service";
// import VideoSection from "../sections/VideoSection";
// import Gallery from "../sections/Gallery";
// import About from "../sections/About";
// import Contact from "../sections/Contact";
// import Review from "../sections/Review";
// import Footer from "../components/Footer";
// import LocationSection from "../sections/Location";

// const Home = () => {
//   return (
//     <div>
//       <Hero />
      {/* <ActionStrip /> */}
//       <Service />
//       <VideoSection />
//       <Gallery />
//       <About />
//       <Contact />
//       <Review />
//       <LocationSection/>
//       <Footer />
//     </div>
//   );
// };

// export default Home;


