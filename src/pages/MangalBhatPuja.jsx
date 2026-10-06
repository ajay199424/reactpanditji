import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const MangalBhatPuja = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vedikpoojan.com/mangal-bhat-puja#service",
        name: "Mangal Bhat Puja in Ujjain",
        alternateName: "Mangal Bhat Puja",
        description:
          "Mangal Bhat Puja in Ujjain through traditional Vedic rituals for Manglik-related concerns, marriage-related obstacles, family harmony and spiritual peace.",
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
        serviceType: "Mangal Bhat Puja",
        url: "https://vedikpoojan.com/mangal-bhat-puja",
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://vedikpoojan.com/mangal-bhat-puja#breadcrumb",
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
            name: "Mangal Bhat Puja",
            item: "https://vedikpoojan.com/mangal-bhat-puja",
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
          Mangal Bhat Puja in Ujjain | Mangal Bhat Puja - Vedic Poojan
        </title>

        <meta
          name="description"
          content="Mangal Bhat Puja in Ujjain with Vedic Poojan. Traditional Vedic puja for Manglik-related concerns, marriage obstacles, family harmony and spiritual peace."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://vedikpoojan.com/mangal-bhat-puja"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Mangal Bhat Puja in Ujjain | Vedic Poojan"
        />

        <meta
          property="og:description"
          content="Mangal Bhat Puja in Ujjain with traditional Vedic rituals for Manglik-related concerns, marriage obstacles and family harmony."
        />

        <meta
          property="og:url"
          content="https://vedikpoojan.com/mangal-bhat-puja"
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
          content="Mangal Bhat Puja in Ujjain | Vedic Poojan"
        />

        <meta
          name="twitter:description"
          content="Traditional Mangal Bhat Puja in Ujjain with Vedic rituals and guidance."
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
              / Mangal Bhat Puja
            </div>

            <h1 className="amita-bold text-4xl md:text-5xl mb-4">
              Mangal Bhat Puja in Ujjain
            </h1>

            <p className="max-w-3xl mx-auto text-base md:text-lg leading-8">
              पारंपरिक वैदिक विधि से मंगल भात पूजा कराएं और विवाह,
              मांगलिक दोष एवं पारिवारिक जीवन से जुड़ी बाधाओं के लिए
              आध्यात्मिक समाधान प्राप्त करें।
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
                Mangal Bhat Puja क्या है?
              </h2>

              <p className="leading-8 text-gray-700 mb-5">
                मंगल भात पूजा एक विशेष वैदिक अनुष्ठान है जिसे मांगलिक
                कार्यों में आने वाली बाधाओं, विवाह से जुड़ी चिंताओं और
                पारिवारिक जीवन में शांति एवं संतुलन के लिए कराया जाता है।
                Vedic Poojan में यह पूजा पारंपरिक वैदिक विधि और
                मंत्रोच्चार के साथ संपन्न कराई जाती है।
              </p>

              <p className="leading-8 text-gray-700 mb-8">
                यदि आप Ujjain में Mangal Bhat Puja करवाना चाहते हैं,
                तो पूजा की विधि और आपकी आवश्यकता के अनुसार उचित वैदिक
                अनुष्ठान के लिए Vedic Poojan से संपर्क कर सकते हैं।
              </p>

              <h2 className="amita-bold text-3xl md:text-4xl darkbrown mb-5">
                Mangal Bhat Puja क्यों कराई जाती है?
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-7">
                <li>
                  विवाह से जुड़ी बाधाओं के लिए आध्यात्मिक उपाय
                </li>
                <li>
                  मांगलिक संबंधी चिंताओं के समाधान के लिए
                </li>
                <li>
                  पारिवारिक सुख और शांति के लिए
                </li>
                <li>
                  वैवाहिक जीवन में सकारात्मकता और सामंजस्य के लिए
                </li>
                <li>
                  पारंपरिक वैदिक अनुष्ठान एवं मंत्रोच्चार के लिए
                </li>
              </ul>

              <h2 className="amita-bold text-3xl md:text-4xl darkbrown mt-12 mb-5">
                Ujjain में Mangal Bhat Puja
              </h2>

              <p className="leading-8 text-gray-700">
                Ujjain भारत के प्रमुख धार्मिक एवं आध्यात्मिक शहरों में से
                एक है। यहां विभिन्न प्रकार के वैदिक पूजा और अनुष्ठान
                पारंपरिक विधि से किए जाते हैं। Vedic Poojan के माध्यम से
                आप Mangal Bhat Puja सहित अन्य वैदिक सेवाओं के लिए
                जानकारी और पूजा संबंधी मार्गदर्शन प्राप्त कर सकते हैं।
              </p>

              {/* Related Service */}
              <div className="mt-10 p-6 rounded-xl bg-white shadow-sm">
                <h3 className="text-2xl font-semibold darkbrown mb-3">
                  Kaal Sarp Dosh Puja भी करवानी है?
                </h3>

                <p className="text-gray-700 mb-4">
                  अगर आप Kaal Sarp Dosh Nivaran Puja के बारे में भी
                  जानकारी चाहते हैं, तो हमारी dedicated service page देखें।
                </p>

                <Link
                  to="/kaal-sarp-dosh-puja"
                  className="font-semibold text-saffron hover:underline"
                >
                  Kaal Sarp Dosh Puja in Ujjain →
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

export default MangalBhatPuja;