import { Link } from "react-router-dom";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Seo from "../seo/Seo";
import { articles } from "../seo/site.js";

export default function PujaLanding({ page }) {
  const article = articles[page];
  let seenHeading = false;

  return (
    <>
      <Seo page={page} />
      <Navbar />

      <main className="bg-lightcream">
        <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-darkbrown text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4 text-sm">
              <Link to="/" className="text-white hover:underline">
                Home
              </Link>{" "}
              / {article.crumb}
            </div>

            <h1 className="amita-bold text-4xl md:text-5xl mb-4">
              {article.h1}
            </h1>

            <p className="max-w-3xl mx-auto text-base md:text-lg leading-8">
              {article.intro}
            </p>

            <a
              href="#contact"
              className="inline-block mt-6 px-7 py-3 rounded-full bg-saffron text-white font-semibold"
            >
              {article.cta}
            </a>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {article.blocks.map((block, index) => {
                if (block.type === "h2") {
                  const className = seenHeading
                    ? "amita-bold text-3xl md:text-4xl darkbrown mt-12 mb-5"
                    : "amita-bold text-3xl md:text-4xl darkbrown mb-5";
                  seenHeading = true;
                  return (
                    <h2 key={index} className={className}>
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "ul") {
                  return (
                    <ul
                      key={index}
                      className="list-disc pl-6 space-y-3 text-gray-700 leading-7"
                    >
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={index} className="leading-8 text-gray-700 mb-5">
                    {block.text}
                  </p>
                );
              })}

              <div className="mt-10 p-6 rounded-xl bg-white shadow-sm">
                <h3 className="text-2xl font-semibold darkbrown mb-3">
                  {article.related.title}
                </h3>
                <p className="text-gray-700 mb-4">{article.related.text}</p>
                <Link
                  to={article.related.href}
                  className="font-semibold text-saffron hover:underline"
                >
                  {article.related.label} →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
