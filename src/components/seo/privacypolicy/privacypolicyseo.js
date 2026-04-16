import { Helmet } from "react-helmet";

const SEO = ({ title, url, image, type = "website" }) => {
  return (
    <Helmet>
      <title>{title}</title>


      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;