import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const KaalSarpDoshPuja = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id":
          "https://vedikpoojan.com/kaal-sarp-dosh-puja#service",
        name: "Kaal Sarp Dosh Puja in Ujjain",
        alternateName: "Kaal Sarp Dosh Nivaran Puja",
        description:
          "Kaal Sarp Dosh Nivaran Puja in Ujjain through traditional Vedic rituals for spiritual guidance, peace, balance and addressing concerns associated with Kaal Sarp Dosh.",
        provider: {
          "@type": "LocalBusiness",
          "@id": "https://vedikpoojan.com/#business",
          name: "Vedic Poojan",
          url: "https://vedikpoojan.com/",
        },
        areaServed: {
          "@type": "City",
          name: "Ujjain",
        },
        serviceType: "Kaal Sarp Dosh Nivaran Puja",
        url: "https://vedikpoojan.com/kaal-sarp-dosh-puja",
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://vedikpoojan.com/kaal-sarp-dosh-puja#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://vedikpoojan.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Kaal Sarp Dosh Puja",
            item: "https://vedikpoojan.com/kaal-sarp-dosh-puja",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          Kaal Sarp Dosh Puja in Ujjain | Kaal Sarp Dosh Nivaran
        </title>

        <meta
          name="description"
          content="Kaal Sarp Dosh Puja in Ujjain with Vedic Poojan. Traditional Kaal Sarp Dosh Nivaran Puja and Vedic rituals for spiritual peace, balance and guidance."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://vedikpoojan.com/kaal-sarp-dosh-puja"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Kaal Sarp Dosh Puja in Ujjain | Vedic Poojan"
        />

        <meta
          property="og:description"
          content="Traditional Kaal Sarp Dosh Nivaran Puja in Ujjain with Vedic Poojan."
        />

        <meta
          property="og:url"
          content="https://vedikpoojan.com/kaal-sarp-dosh-puja"
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
          content="Kaal Sarp Dosh Puja in Ujjain | Vedic Poojan"
        />

        <meta
          name="twitter:description"
          content="Kaal Sarp Dosh Nivaran Puja in Ujjain through traditional Vedic rituals."
        />

        <meta
          name="twitter:image"
          content="https://vedikpoojan.com/favicon.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Navbar */}
      <Navbar />

      <main className="bg-lightcream">
        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-darkbrown text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4 text-sm">
              <Link
                to="/"
                className="text-white hover:underline"
              >
                Home
              </Link>{" "}
              / Kaal Sarp Dosh Puja
            </div>

            <h1 className="amita-bold text-4xl md:text-5xl mb-4">
              Kaal Sarp Dosh Puja in Ujjain
            </h1>

            <p className="max-w-3xl mx-auto text-base md:text-lg leading-8">
              कालसर्प दोष निवारण के लिए पारंपरिक वैदिक पूजा और
              आध्यात्मिक अनुष्ठान। Ujjain में Kaal Sarp Dosh Puja
              के लिए Vedic Poojan से संपर्क करें।
            </p>

            <a
              href="#contact"
              className="inline-block mt-6 px-7 py-3 rounded-full bg-saffron text-white font-semibold"
            >
              पूजा के लिए संपर्क करें
            </a>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              <h2 className="amita-bold text-3xl md:text-4xl darkbrown mb-5">
                Kaal Sarp Dosh Puja क्या है?
              </h2>

              <p className="leading-8 text-gray-700 mb-5">
                कालसर्प दोष निवारण पूजा एक विशेष वैदिक अनुष्ठान है जिसे
                कालसर्प दोष से जुड़ी आध्यात्मिक चिंताओं के लिए कराया जाता है।
                Vedic Poojan में पारंपरिक वैदिक मंत्रोच्चार और पूजा विधि
                के अनुसार अनुष्ठान संपन्न कराने की सुविधा उपलब्ध है।
              </p>

              <p className="leading-8 text-gray-700 mb-8">
                यदि आप Ujjain में Kaal Sarp Dosh Nivaran Puja करवाना चाहते हैं,
                तो अपनी आवश्यकता के अनुसार पूजा संबंधी जानकारी और वैदिक
                मार्गदर्शन के लिए Vedic Poojan से संपर्क कर सकते हैं।
              </p>

              <h2 className="amita-bold text-3xl md:text-4xl darkbrown mb-5">
                Kaal Sarp Dosh Nivaran Puja क्यों कराई जाती है?
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-7">
                <li>
                  कालसर्प दोष से जुड़ी आध्यात्मिक चिंताओं के लिए
                </li>
                <li>
                  मानसिक शांति और सकारात्मकता के लिए
                </li>
                <li>
                  जीवन में संतुलन एवं आध्यात्मिक समाधान के लिए
                </li>
                <li>
                  पारंपरिक वैदिक पूजा एवं मंत्रोच्चार के लिए
                </li>
                <li>
                  वैदिक मार्गदर्शन और धार्मिक अनुष्ठान के लिए
                </li>
              </ul>

              <h2 className="amita-bold text-3xl md:text-4xl darkbrown mt-12 mb-5">
                Ujjain में Kaal Sarp Dosh Puja
              </h2>

              <p className="leading-8 text-gray-700">
                Ujjain एक प्रमुख धार्मिक नगरी है जहां विभिन्न प्रकार के
                वैदिक पूजा और धार्मिक अनुष्ठान पारंपरिक विधि से किए जाते हैं।
                Vedic Poojan में Kaal Sarp Dosh Nivaran Puja के साथ-साथ
                Mangal Bhat Puja, Rudrabhishek, Navgrah Shanti और अन्य
                वैदिक सेवाओं की जानकारी प्राप्त की जा सकती है।
              </p>

              {/* Related Service */}
              <div className="mt-10 p-6 rounded-xl bg-white shadow-sm">
                <h3 className="text-2xl font-semibold darkbrown mb-3">
                  Mangal Bhat Puja भी करवानी है?
                </h3>

                <p className="text-gray-700 mb-4">
                  विवाह या मांगलिक संबंधी पूजा के लिए हमारी Mangal Bhat
                  Puja service page देखें।
                </p>

                <Link
                  to="/mangal-bhat-puja"
                  className="font-semibold text-saffron hover:underline"
                >
                  Mangal Bhat Puja in Ujjain →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <div id="contact">
          <Contact />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default KaalSarpDoshPuja;