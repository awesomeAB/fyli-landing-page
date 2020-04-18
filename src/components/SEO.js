import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import logo from '../../assets/logo/favicon.ico';
import image from '../../assets/logo/image.jpg';

const SEO = ({ pathname }) => {
  const {
    site: {
      siteMetadata: { siteUrl, title, description, twitter }
    }
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
          description
          twitter
        }
      }
    }
  `);

  return (
    <Helmet defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
      <link rel="icon" type="image/png" sizes="32x32" href={logo} />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="2184" />
      <meta property="og:image:height" content="1512" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
    </Helmet>
  );
};

export default SEO;
