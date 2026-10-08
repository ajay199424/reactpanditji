import { Helmet } from "react-helmet-async";
import { SITE_NAME, pages } from "./site.js";

export default function Seo({ page }) {
  const data = pages[page];

  return (
    <Helmet>
      <html lang="hi" />
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="robots" content={data.robots} />
      <link rel="canonical" href={data.canonical} />
      <meta property="og:title" content={data.ogTitle} />
      <meta property="og:description" content={data.ogDescription} />
      <meta property="og:url" content={data.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="hi_IN" />
      <meta property="og:image" content={data.image} />
      <meta property="og:image:secure_url" content={data.image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={data.imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.ogTitle} />
      <meta name="twitter:description" content={data.ogDescription} />
      <meta name="twitter:image" content={data.image} />
      <meta name="twitter:image:alt" content={data.imageAlt} />
      <script type="application/ld+json">{JSON.stringify(data.jsonLd)}</script>
    </Helmet>
  );
}
