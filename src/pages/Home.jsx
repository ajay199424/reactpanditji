import React from "react";
import Seo from "../seo/Seo";

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
  return (
    <>
      <Seo page="home" />

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


