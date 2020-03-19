import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import Button from '../components/Button';

const Terms = () => (
  <Layout>
    <SEO pathname="/404/" />
    <div className="container mx-auto text-center pb-12 xl:pb-24">
      <h1 className="px-4 text-2xl text-gray-600 pt-12">Page not found.</h1>

      <p className="px-4 text-xl text-gray-600  pt-12">
        Oops! The page you are looking for does not exists &#128528;
      </p>
      <p className="px-4 text-xl text-gray-600 pt-4 pb-12 lg:pb-16">
        If you think something is broken, feel free to write to us:{' '}
        <a href="mailto:hello@fyli.me">hello@fyli.me</a>
      </p>
      <Link to="/">
        <Button>Go Back</Button>
      </Link>
    </div>
  </Layout>
);

export default Terms;
