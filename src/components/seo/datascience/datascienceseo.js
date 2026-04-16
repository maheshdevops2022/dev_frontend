import { Helmet } from "react-helmet";

const SEO = ({ title, description, url, image, type = "website" }) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} data-react-helmet="true" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;