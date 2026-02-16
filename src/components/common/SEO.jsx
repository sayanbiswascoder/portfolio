import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, name, type }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
};

SEO.defaultProps = {
  title: "Sayan Biswas | Frontend Developer Portfolio",
  description:
    "Sayan Biswas is a skilled Frontend Developer specializing in React.js, HTML, CSS, and JavaScript. Explore his portfolio to see projects, experience, and contact details.",
  name: "Sayan Biswas",
  type: "website",
  keywords:
    "HTML, CSS, JavaScript, React, Sayan Biswas, Frontend Developer, Web Developer, Portfolio, India",
};

export default SEO;
